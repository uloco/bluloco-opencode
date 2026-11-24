# Bluloco Theme for OpenCode

A vibrant, colorful theme for [opencode.ai](https://opencode.ai) with both dark and light variants.

Based on the [Bluloco](https://github.com/uloco/bluloco.nvim) color scheme. Uses the V2 theme format of OpenCode 2.4+.

## Installation

Copy the theme file to your opencode themes directory:

```bash
mkdir -p ~/.config/opencode/themes
cp themes/bluloco.json ~/.config/opencode/themes/
```

Then select it with the `/themes` command or add it to `~/.config/opencode/cli.json`:

```json
{
  "theme": { "name": "bluloco", "mode": "system" }
}
```

## Building

`themes/bluloco.json` is generated. Edit the palette or token mapping in `scripts/build.ts`, then run:

```bash
bun scripts/build.ts
```

The grey steps use the same math as bluloco.nvim's `grey*` colors (lush HSL), so they match the editor exactly.

## Known limitations

OpenCode hardcodes builtin syntax scopes (`type.builtin`, `variable.builtin`, `function.builtin`, …) and `tag` to the
error color, and `attribute` to the warning color. Object properties share the function color, `new`/`typeof`/`in`
share the operator color, and `ALL_CAPS` constants share the number color. Themes can't change these without recoloring real errors
([#20151](https://github.com/anomalyco/opencode/issues/20151)).

## Color Mapping

### Agents

Agents take `categorical` colors in order of the visible agent list.

| Agent | Dark | Light |
|---|---|---|
| build | ![](https://placehold.co/20x20/10b1fe/10b1fe) `#10b1fe` | ![](https://placehold.co/20x20/0098dd/0098dd) `#0098dd` |
| general | ![](https://placehold.co/20x20/7a82da/7a82da) `#7a82da` | ![](https://placehold.co/20x20/7a82da/7a82da) `#7a82da` |
| explore | ![](https://placehold.co/20x20/3fc56b/3fc56b) `#3fc56b` | ![](https://placehold.co/20x20/23974a/23974a) `#23974a` |
| plan | ![](https://placehold.co/20x20/da7a43/da7a43) `#da7a43` | ![](https://placehold.co/20x20/ff8f3a/ff8f3a) `#ff8f3a` |

### Surfaces

| Token | Dark | Light |
|---|---|---|
| `background.base` | ![](https://placehold.co/20x20/282c34/282c34) `#282c34` | ![](https://placehold.co/20x20/f9f9f9/f9f9f9) `#f9f9f9` |
| `background.raised.base` | ![](https://placehold.co/20x20/21242d/21242d) `#21242d` | ![](https://placehold.co/20x20/ecedee/ecedee) `#ecedee` |
| `background.raised.high` | ![](https://placehold.co/20x20/384252/384252) `#384252` | ![](https://placehold.co/20x20/dee1e3/dee1e3) `#dee1e3` |
| `background.raised.max` | ![](https://placehold.co/20x20/3c495d/3c495d) `#3c495d` | ![](https://placehold.co/20x20/d2d8da/d2d8da) `#d2d8da` |
| `background.action.primary.$hovered` (hover) | ![](https://placehold.co/20x20/384252/384252) `#384252` | ![](https://placehold.co/20x20/dee1e3/dee1e3) `#dee1e3` |
| `background.action.primary.$focused` (selected row) | ![](https://placehold.co/20x20/274670/274670) `#274670` | ![](https://placehold.co/20x20/d2ecff/d2ecff) `#d2ecff` |

### Text

| Token | Dark | Light |
|---|---|---|
| `text.base` | ![](https://placehold.co/20x20/abb2bf/abb2bf) `#abb2bf` | ![](https://placehold.co/20x20/383a42/383a42) `#383a42` |
| `text.muted` | ![](https://placehold.co/20x20/636d83/636d83) `#636d83` | ![](https://placehold.co/20x20/a0a1a7/a0a1a7) `#a0a1a7` |
| `text.action.primary.$selected` (selected text) | ![](https://placehold.co/20x20/3691ff/3691ff) `#3691ff` | ![](https://placehold.co/20x20/0099e1/0099e1) `#0099e1` |
| `border.base` | ![](https://placehold.co/20x20/5a6d8c/5a6d8c) `#5a6d8c` | ![](https://placehold.co/20x20/a2aeb3/a2aeb3) `#a2aeb3` |
| `scrollbar.base` | ![](https://placehold.co/20x20/7a82da/7a82da) `#7a82da` | ![](https://placehold.co/20x20/7a82da/7a82da) `#7a82da` |

### Feedback

| Token | Dark | Light |
|---|---|---|
| `text.feedback.error.base` (error) | ![](https://placehold.co/20x20/ff2e3f/ff2e3f) `#ff2e3f` | ![](https://placehold.co/20x20/ff0000/ff0000) `#ff0000` |
| `text.feedback.warning.base` (warning) | ![](https://placehold.co/20x20/da7a43/da7a43) `#da7a43` | ![](https://placehold.co/20x20/ff8f3a/ff8f3a) `#ff8f3a` |
| `text.feedback.success.base` (success) | ![](https://placehold.co/20x20/3fc56b/3fc56b) `#3fc56b` | ![](https://placehold.co/20x20/23974a/23974a) `#23974a` |
| `text.feedback.info.base` (info) | ![](https://placehold.co/20x20/3691ff/3691ff) `#3691ff` | ![](https://placehold.co/20x20/0099e1/0099e1) `#0099e1` |

### Syntax

| Token | Dark | Light |
|---|---|---|
| `syntax.comment` | ![](https://placehold.co/20x20/636d83/636d83) `#636d83` | ![](https://placehold.co/20x20/a0a1a7/a0a1a7) `#a0a1a7` |
| `syntax.keyword` | ![](https://placehold.co/20x20/10b1fe/10b1fe) `#10b1fe` | ![](https://placehold.co/20x20/0098dd/0098dd) `#0098dd` |
| `syntax.function` | ![](https://placehold.co/20x20/3fc56b/3fc56b) `#3fc56b` | ![](https://placehold.co/20x20/23974a/23974a) `#23974a` |
| `syntax.variable` | ![](https://placehold.co/20x20/9f7efe/9f7efe) `#9f7efe` | ![](https://placehold.co/20x20/823ff1/823ff1) `#823ff1` |
| `syntax.string` | ![](https://placehold.co/20x20/f9c859/f9c859) `#f9c859` | ![](https://placehold.co/20x20/c5a332/c5a332) `#c5a332` |
| `syntax.number` | ![](https://placehold.co/20x20/ff78f8/ff78f8) `#ff78f8` | ![](https://placehold.co/20x20/ce33c0/ce33c0) `#ce33c0` |
| `syntax.type` | ![](https://placehold.co/20x20/ff6480/ff6480) `#ff6480` | ![](https://placehold.co/20x20/d52753/d52753) `#d52753` |
| `syntax.operator` | ![](https://placehold.co/20x20/7a82da/7a82da) `#7a82da` | ![](https://placehold.co/20x20/7a82da/7a82da) `#7a82da` |
| `syntax.punctuation` | ![](https://placehold.co/20x20/7a82da/7a82da) `#7a82da` | ![](https://placehold.co/20x20/7a82da/7a82da) `#7a82da` |

### Markdown

| Token | Dark | Light |
|---|---|---|
| `markdown.text` | ![](https://placehold.co/20x20/abb2bf/abb2bf) `#abb2bf` | ![](https://placehold.co/20x20/383a42/383a42) `#383a42` |
| `markdown.heading` | ![](https://placehold.co/20x20/10b1fe/10b1fe) `#10b1fe` | ![](https://placehold.co/20x20/0098dd/0098dd) `#0098dd` |
| `markdown.link` | ![](https://placehold.co/20x20/3691ff/3691ff) `#3691ff` | ![](https://placehold.co/20x20/275fe4/275fe4) `#275fe4` |
| `markdown.linkText` | ![](https://placehold.co/20x20/9f7efe/9f7efe) `#9f7efe` | ![](https://placehold.co/20x20/823ff1/823ff1) `#823ff1` |
| `markdown.code` | ![](https://placehold.co/20x20/ce9887/ce9887) `#ce9887` | ![](https://placehold.co/20x20/a05a48/a05a48) `#a05a48` |
| `markdown.blockQuote` | ![](https://placehold.co/20x20/9f7efe/9f7efe) `#9f7efe` | ![](https://placehold.co/20x20/823ff1/823ff1) `#823ff1` |
| `markdown.emphasis` | ![](https://placehold.co/20x20/ff936a/ff936a) `#ff936a` | ![](https://placehold.co/20x20/df631c/df631c) `#df631c` |
| `markdown.strong` | ![](https://placehold.co/20x20/ff6480/ff6480) `#ff6480` | ![](https://placehold.co/20x20/d52753/d52753) `#d52753` |
| `markdown.horizontalRule` | ![](https://placehold.co/20x20/636d83/636d83) `#636d83` | ![](https://placehold.co/20x20/a0a1a7/a0a1a7) `#a0a1a7` |
| `markdown.listItem` | ![](https://placehold.co/20x20/7a82da/7a82da) `#7a82da` | ![](https://placehold.co/20x20/7a82da/7a82da) `#7a82da` |
| `markdown.listEnumeration` | ![](https://placehold.co/20x20/7a82da/7a82da) `#7a82da` | ![](https://placehold.co/20x20/7a82da/7a82da) `#7a82da` |
| `markdown.image` | ![](https://placehold.co/20x20/3691ff/3691ff) `#3691ff` | ![](https://placehold.co/20x20/275fe4/275fe4) `#275fe4` |
| `markdown.imageText` | ![](https://placehold.co/20x20/9f7efe/9f7efe) `#9f7efe` | ![](https://placehold.co/20x20/823ff1/823ff1) `#823ff1` |
| `markdown.codeBlock` | ![](https://placehold.co/20x20/abb2bf/abb2bf) `#abb2bf` | ![](https://placehold.co/20x20/383a42/383a42) `#383a42` |

### Diff

| Token | Dark | Light |
|---|---|---|
| `diff.text.added` | ![](https://placehold.co/20x20/177f55/177f55) `#177f55` | ![](https://placehold.co/20x20/3cbc66/3cbc66) `#3cbc66` |
| `diff.text.removed` | ![](https://placehold.co/20x20/a14d5b/a14d5b) `#a14d5b` | ![](https://placehold.co/20x20/fa7883/fa7883) `#fa7883` |
| `diff.text.context` | ![](https://placehold.co/20x20/636d83/636d83) `#636d83` | ![](https://placehold.co/20x20/a0a1a7/a0a1a7) `#a0a1a7` |
| `diff.text.hunkHeader` | ![](https://placehold.co/20x20/ff78f8/ff78f8) `#ff78f8` | ![](https://placehold.co/20x20/ce33c0/ce33c0) `#ce33c0` |
| `diff.background.added` | ![](https://placehold.co/20x20/105b3d/105b3d) `#105b3d` | ![](https://placehold.co/20x20/c5f6c8/c5f6c8) `#c5f6c8` |
| `diff.background.removed` | ![](https://placehold.co/20x20/522e34/522e34) `#522e34` | ![](https://placehold.co/20x20/fac1c6/fac1c6) `#fac1c6` |
| `diff.highlight.added` | ![](https://placehold.co/20x20/3fc56b/3fc56b) `#3fc56b` | ![](https://placehold.co/20x20/23974a/23974a) `#23974a` |
| `diff.highlight.removed` | ![](https://placehold.co/20x20/ff2e3f/ff2e3f) `#ff2e3f` | ![](https://placehold.co/20x20/ff0000/ff0000) `#ff0000` |
| `diff.lineNumber.text` | ![](https://placehold.co/20x20/636d83/636d83) `#636d83` | ![](https://placehold.co/20x20/a0a1a7/a0a1a7) `#a0a1a7` |

## License

MIT
