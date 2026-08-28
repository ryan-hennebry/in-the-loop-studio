---
name: builder-view-transition-probe
description: How to probe this site's cross-document view transition, why the lockup is no longer named, and how to measure a lockup that has no named group to read
metadata:
  type: feedback
---

Probe the cross-document transition by stepping paused animations, never by screenshotting during
the navigation. `context.addInitScript` a `pagereveal` listener, `await e.viewTransition.ready`,
then pause every animation whose `effect.pseudoElement` contains `view-transition`, record its
`getKeyframes()`, and drive `currentTime` yourself.

**Why:** Nothing survives the page swap except an init script, and the UA's own keyframes are a
stronger proof than any screenshot. Four traps have already produced wrong readings here.
(1) Initialise the flag as `null`, not `false`: a `waitForFunction` that accepts `fired === false`
short-circuits on the initial value and reports that Back never fired a transition when it did.
(2) `page.goBack()` needs its own wait; bfcache reactivation still fires `pagereveal`.
(3) Under `reducedMotion: 'reduce'` the correct reading is `fired === false` in all four states.
(4) The big one: **an unscrolled navigation is not a test.** See below.

**As of 2026-08-28 nothing on this site carries a `view-transition-name`, and that is deliberate.**
The lockup carried one for several commits on the theory that naming the one element common to both
routes pins it. Two measurements killed it. `::view-transition-group` tweens from the geometry the
old snapshot had in the VIEWPORT, not in the document, so leaving `/plan/` scrolled to its footer
and clicking the colophon ran the group from `matrix(1, 0, 0, 1, 420, -1009)` to
`matrix(1, 0, 0, 1, 420, 72)` at 1440x900 - the lockup flew 1,081px down the screen, and Back flew
it 1,078px back up. Only unscrolled navigations had ever been measured, which is why it read as
pinned. Separately, `::view-transition-old(identity)` and `-new(identity)` held at `animation: none`
and `opacity: 1` double-drew the same antialiased edges for the whole 220ms: 11.42% of the pixels
changed mid-transition at a max channel delta of 216, over two resting lockups that are
pixel-identical. Every named variant that fixed the flight broke Back, because parking the group at
the new geometry parks it off the top of the screen. Unnamed, the root cross-fade rebuilds an
identical lockup in place and the same frozen frame measures 4.07% at a max delta of 7 of 255. Do
not reintroduce the name; if you are tempted, measure `/plan/` scrolled to its footer first.

**How to measure position with no named group.** `getComputedStyle(de, '::view-transition-group(x)')`
returns nothing useful once the name is gone, so read painted ink instead: screenshot a
1440x200 top strip at each frozen `currentTime` and locate the resting lockup tile by zero-mean
normalised cross-correlation down the strip. It reports y=66 in the strip (the lockup rests at
y=72; the tile starts 6px above it) with ncc 1.0 in every frame of all four states, and it honestly
reports ncc ~0.21 when the lockup is genuinely off screen - on `/plan/` at the footer there is no
lockup to find, which is the correct reading, not a failure. For the scrolled states, subtracting
the resting incoming frame first isolates one page's contribution and holds ncc above 0.9 through
most of the fade. `align-items: flex-start` on `.identity__home` still matters and matters more:
the 48px target is 11.62px taller than the 36.38px lockup, and centred it sat 0.81px low, which the
cross-fade would now blend as two copies that do not line up. Measure the item, never the target.

Related: [[builder-interaction-probes]], [[builder-visual-measurement]], [[builder-paint-vs-box]]
