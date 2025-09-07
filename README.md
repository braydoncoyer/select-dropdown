# Braydon 🤝 Laravel

Hey team!

Thanks again for letting me jump in on this project. I had a blast working on the select element and wanted to share a quick walkthrough of what I built, why I made certain decisions, and some extras I sprinkled in along the way.

---

## Quick Note

I began with the original select component, aiming to faithfully reflect the design. After meeting with Hank, he suggested I also create a second version -- “my take” -- to explore how I might enhance both the design and functionality.

Below I'll talk about:

1. The original implementation (true to the design).
2. My own interpretation of the problem, with a few tweaks and enhancements.

---

## Highlights (original design)

Even though this was a fairly small project, there were a few details worth calling out:

1. **Opening up or down** – The select works in both directions. In the mocks, each item rotated slightly more as you went down the list. That rotation needed to flip when the menu opened upward. There weren’t mocks for that case, but I went ahead and built it anyway.

2. **Limit prop** – With lots of items, the rotation gets wild. I added a `limit` prop so devs can control how many options show. The design had 4, but flexibility for future use felt right.

3. **Noise overlay** – Instead of exporting a PNG from the Figma mocks and dropping it in, I generated it with SVG. Looks basically the same but runs smoother.

4. **Hover/focus states** – The mocks didn’t have any, so I added them for both the trigger and items. Small thing, but it makes navigation so much clearer.

5. **Animations** - I kept animations minimal (I’ll explain why in a moment). The only animated elements are the options as they appear, and the open/close arrows. Both are fast, subtle and synced so nothing feels out of place.

---

## My Thought Process (original design)

I started with shadcn/ui as the foundation rather than rolling my own from scratch. It’s already strong on accessibility, easy to extend, and plays well with Tailwind.

For animations, I leaned on Tailwind and native CSS. I considered going wild with Motion, but honestly, too many animations just get in the way. This version strikes a balance: smooth and playful without being distracting. What do you think?

Quick disclaimer: Claude Code helped with a chunk of the raw code. Since I’ve been living in Angular for the past 5 years, it gave me a faster ramp-up. My real role was guiding it—using my experience to shape prompts, review the output, and refine until it matched the design and dev standards. AI may have done a chunk of the typing, but the quality comes from knowing what _should_ be built.

---

## My Take

I put together a slightly different version inspired by the original design, but a bit more put together:

- The select is a bit more compact in both width and height. Feels tighter overall.
- Instead of each item having its own background color, the background only shows on hover/focus. Cleaner, less noisy.
- The select’s shadow subtly casts over the items, giving depth without being over the top.
- Each Laracon location gets a small geographical flag next to it. I think this makes it easier to quickly locate an option closest to the user. (Side idea: imagine a faded, animated version of the flag playing in the background on hover 👀).
- I left out the inline “Laracon” label when an item is selected. Personally, it felt a bit redundant. In a real app, we’d probably have this inside a form with proper labels to make things explicit anyway.

And naturally, full accessibility, keyboard navigation, and proper up/down opening based on available space all still work. Nothing too flashy—just a clean, snappy experience.
