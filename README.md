## Braydon <> Laravel

Hey, team!
Thanks for giving me the opportunity to work on a cool project! I had a blast working on this select element, and wanted to walk you through a few things and my thought process.

### Highlights

Although this project is pretty basic, I wanted to highlight a few things worth mentioning:

1. Opening up/down – The select handles both. In the mocks, each item rotates more (1 degree more) as you go down the list. That rotation needed to flip when the menu opens upward, and even though there weren’t mocks for that case, I went ahead and built it anyway.

2. Limit prop – The rotation gets wild with lots of items, so I added a prop that lets you control how many options show. The design only showed 4, but giving devs the option felt right.

3. Noise overlay – Instead of dropping in a static image like the Figma had, I generated it with an SVG. Very close to the same look, but better performance.

4. Hover/focus states – The mocks didn’t include any, but I added them anyway for both the trigger and items. Makes it way easier to see where you are.

### Thought process

Instead of rolling my own select component from scratch, I used shadcn/ui as the foundation. It’s already solid when it comes to accessibility, it's easy to extend, and it plays nicely with Tailwind.

For animations, I stuck with Tailwind and native CSS as much as possible. I thought about pulling in Motion and trying to really animate the heck out of this thing, but honestly, sometimes less is more. Too many unneeded animations would end up frustrating the end user. This scores a nice balance. What do you think?

Small disclaimer: Claude Code wrote a decent amount of the actual code here. As someone who has been writing Angular code for the last 5 years, it really helped me get going quickly. My role was in steering; using my experience to shape the prompts, review the output, and make sure the end result met the design and dev standards. So while AI did a decent amount the heavy lifting, the quality comes from my expertise and knowledge of how things should be done.
