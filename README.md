# Bluloco Theme for OpenCode

A vibrant, colorful theme for [opencode.ai](https://opencode.ai) with both dark and light variants.

Based on the [Bluloco](https://github.com/uloco/bluloco.nvim) color scheme.

## Installation

Copy the theme file to your opencode themes directory:

```bash
mkdir -p ~/.config/opencode/themes
cp themes/bluloco.json ~/.config/opencode/themes/
```

Then select it with the `/theme` command or add to your `opencode.json`:

```json
{
  "theme": "bluloco"
}
```

## Color Mapping

### Primary Colors

| Property | Dark | | Light | |
|----------|------|--|-------|--|
| primary | ![](https://placehold.co/20x20/3691ff/3691ff) | `#3691ff` | ![](https://placehold.co/20x20/0099e1/0099e1) | `#0099e1` |
| secondary | ![](https://placehold.co/20x20/10B1FE/10B1FE) | `#10B1FE` | ![](https://placehold.co/20x20/0098DD/0098DD) | `#0098DD` |
| accent | ![](https://placehold.co/20x20/7A82DA/7A82DA) | `#7A82DA` | ![](https://placehold.co/20x20/7A82DA/7A82DA) | `#7A82DA` |

### Status Colors

| Property | Dark | | Light | |
|----------|------|--|-------|--|
| error | ![](https://placehold.co/20x20/ff2e3f/ff2e3f) | `#ff2e3f` | ![](https://placehold.co/20x20/ff0000/ff0000) | `#ff0000` |
| warning | ![](https://placehold.co/20x20/da7a43/da7a43) | `#da7a43` | ![](https://placehold.co/20x20/ff8f3a/ff8f3a) | `#ff8f3a` |
| success | ![](https://placehold.co/20x20/3FC56B/3FC56B) | `#3FC56B` | ![](https://placehold.co/20x20/23974A/23974A) | `#23974A` |
| info | ![](https://placehold.co/20x20/3691ff/3691ff) | `#3691ff` | ![](https://placehold.co/20x20/0099e1/0099e1) | `#0099e1` |

### UI Colors

| Property | Dark | | Light | |
|----------|------|--|-------|--|
| text | ![](https://placehold.co/20x20/ABB2BF/ABB2BF) | `#ABB2BF` | ![](https://placehold.co/20x20/383A42/383A42) | `#383A42` |
| textMuted | ![](https://placehold.co/20x20/636D83/636D83) | `#636D83` | ![](https://placehold.co/20x20/A0A1A7/A0A1A7) | `#A0A1A7` |
| background | ![](https://placehold.co/20x20/282C34/282C34) | `#282C34` | ![](https://placehold.co/20x20/F9F9F9/F9F9F9) | `#F9F9F9` |
| backgroundPanel | ![](https://placehold.co/20x20/21242D/21242D) | `#21242D` | ![](https://placehold.co/20x20/ECEDEE/ECEDEE) | `#ECEDEE` |
| backgroundElement | ![](https://placehold.co/20x20/274670/274670) | `#274670` | ![](https://placehold.co/20x20/d2ecff/d2ecff) | `#d2ecff` |

### Border Colors

| Property | Dark | | Light | |
|----------|------|--|-------|--|
| border | ![](https://placehold.co/20x20/636D83/636D83) | `#636D83` | ![](https://placehold.co/20x20/A0A1A7/A0A1A7) | `#A0A1A7` |
| borderActive | ![](https://placehold.co/20x20/FF6480/FF6480) | `#FF6480` | ![](https://placehold.co/20x20/0099e1/0099e1) | `#0099e1` |
| borderSubtle | ![](https://placehold.co/20x20/3B4252/3B4252) | `#3B4252` | ![](https://placehold.co/20x20/CBCBCB/CBCBCB) | `#CBCBCB` |

### Diff Colors

| Property | Dark | | Light | |
|----------|------|--|-------|--|
| diffAdded | ![](https://placehold.co/20x20/177F55/177F55) | `#177F55` | ![](https://placehold.co/20x20/3cbc66/3cbc66) | `#3cbc66` |
| diffRemoved | ![](https://placehold.co/20x20/A14D5B/A14D5B) | `#A14D5B` | ![](https://placehold.co/20x20/FA7883/FA7883) | `#FA7883` |
| diffContext | ![](https://placehold.co/20x20/636D83/636D83) | `#636D83` | ![](https://placehold.co/20x20/A0A1A7/A0A1A7) | `#A0A1A7` |
| diffHunkHeader | ![](https://placehold.co/20x20/7A82DA/7A82DA) | `#7A82DA` | ![](https://placehold.co/20x20/7A82DA/7A82DA) | `#7A82DA` |
| diffHighlightAdded | ![](https://placehold.co/20x20/3FC56B/3FC56B) | `#3FC56B` | ![](https://placehold.co/20x20/23974A/23974A) | `#23974A` |
| diffHighlightRemoved | ![](https://placehold.co/20x20/ff2e3f/ff2e3f) | `#ff2e3f` | ![](https://placehold.co/20x20/ff0000/ff0000) | `#ff0000` |
| diffAddedBg | ![](https://placehold.co/20x20/105B3D/105B3D) | `#105B3D` | ![](https://placehold.co/20x20/c5f6c8/c5f6c8) | `#c5f6c8` |
| diffRemovedBg | ![](https://placehold.co/20x20/522E34/522E34) | `#522E34` | ![](https://placehold.co/20x20/fac1c6/fac1c6) | `#fac1c6` |
| diffContextBg | ![](https://placehold.co/20x20/282C34/282C34) | `#282C34` | ![](https://placehold.co/20x20/F9F9F9/F9F9F9) | `#F9F9F9` |
| diffLineNumber | ![](https://placehold.co/20x20/636D83/636D83) | `#636D83` | ![](https://placehold.co/20x20/A0A1A7/A0A1A7) | `#A0A1A7` |
| diffAddedLineNumberBg | ![](https://placehold.co/20x20/105B3D/105B3D) | `#105B3D` | ![](https://placehold.co/20x20/c5f6c8/c5f6c8) | `#c5f6c8` |
| diffRemovedLineNumberBg | ![](https://placehold.co/20x20/522E34/522E34) | `#522E34` | ![](https://placehold.co/20x20/fac1c6/fac1c6) | `#fac1c6` |

### Markdown Colors

| Property | Dark | | Light | |
|----------|------|--|-------|--|
| markdownText | ![](https://placehold.co/20x20/ABB2BF/ABB2BF) | `#ABB2BF` | ![](https://placehold.co/20x20/383A42/383A42) | `#383A42` |
| markdownHeading | ![](https://placehold.co/20x20/10B1FE/10B1FE) | `#10B1FE` | ![](https://placehold.co/20x20/0098DD/0098DD) | `#0098DD` |
| markdownLink | ![](https://placehold.co/20x20/3691FF/3691FF) | `#3691FF` | ![](https://placehold.co/20x20/275FE4/275FE4) | `#275FE4` |
| markdownLinkText | ![](https://placehold.co/20x20/9F7EFE/9F7EFE) | `#9F7EFE` | ![](https://placehold.co/20x20/823FF1/823FF1) | `#823FF1` |
| markdownCode | ![](https://placehold.co/20x20/CE9887/CE9887) | `#CE9887` | ![](https://placehold.co/20x20/A05A48/A05A48) | `#A05A48` |
| markdownBlockQuote | ![](https://placehold.co/20x20/9F7EFE/9F7EFE) | `#9F7EFE` | ![](https://placehold.co/20x20/823FF1/823FF1) | `#823FF1` |
| markdownEmph | ![](https://placehold.co/20x20/FF936A/FF936A) | `#FF936A` | ![](https://placehold.co/20x20/DF631C/DF631C) | `#DF631C` |
| markdownStrong | ![](https://placehold.co/20x20/FF6480/FF6480) | `#FF6480` | ![](https://placehold.co/20x20/D52753/D52753) | `#D52753` |
| markdownHorizontalRule | ![](https://placehold.co/20x20/636D83/636D83) | `#636D83` | ![](https://placehold.co/20x20/A0A1A7/A0A1A7) | `#A0A1A7` |
| markdownListItem | ![](https://placehold.co/20x20/7A82DA/7A82DA) | `#7A82DA` | ![](https://placehold.co/20x20/7A82DA/7A82DA) | `#7A82DA` |
| markdownListEnumeration | ![](https://placehold.co/20x20/FF78F8/FF78F8) | `#FF78F8` | ![](https://placehold.co/20x20/CE33C0/CE33C0) | `#CE33C0` |
| markdownImage | ![](https://placehold.co/20x20/3691FF/3691FF) | `#3691FF` | ![](https://placehold.co/20x20/275FE4/275FE4) | `#275FE4` |
| markdownImageText | ![](https://placehold.co/20x20/9F7EFE/9F7EFE) | `#9F7EFE` | ![](https://placehold.co/20x20/823FF1/823FF1) | `#823FF1` |
| markdownCodeBlock | ![](https://placehold.co/20x20/FF6480/FF6480) | `#FF6480` | ![](https://placehold.co/20x20/D52753/D52753) | `#D52753` |

### Syntax Highlighting

| Property | Dark | | Light | |
|----------|------|--|-------|--|
| syntaxComment | ![](https://placehold.co/20x20/636D83/636D83) | `#636D83` | ![](https://placehold.co/20x20/A0A1A7/A0A1A7) | `#A0A1A7` |
| syntaxKeyword | ![](https://placehold.co/20x20/10B1FE/10B1FE) | `#10B1FE` | ![](https://placehold.co/20x20/0098DD/0098DD) | `#0098DD` |
| syntaxFunction | ![](https://placehold.co/20x20/3FC56B/3FC56B) | `#3FC56B` | ![](https://placehold.co/20x20/23974A/23974A) | `#23974A` |
| syntaxVariable | ![](https://placehold.co/20x20/9F7EFE/9F7EFE) | `#9F7EFE` | ![](https://placehold.co/20x20/823FF1/823FF1) | `#823FF1` |
| syntaxString | ![](https://placehold.co/20x20/F9C859/F9C859) | `#F9C859` | ![](https://placehold.co/20x20/C5A332/C5A332) | `#C5A332` |
| syntaxNumber | ![](https://placehold.co/20x20/FF78F8/FF78F8) | `#FF78F8` | ![](https://placehold.co/20x20/CE33C0/CE33C0) | `#CE33C0` |
| syntaxType | ![](https://placehold.co/20x20/FF6480/FF6480) | `#FF6480` | ![](https://placehold.co/20x20/D52753/D52753) | `#D52753` |
| syntaxOperator | ![](https://placehold.co/20x20/7A82DA/7A82DA) | `#7A82DA` | ![](https://placehold.co/20x20/7A82DA/7A82DA) | `#7A82DA` |
| syntaxPunctuation | ![](https://placehold.co/20x20/7A82DA/7A82DA) | `#7A82DA` | ![](https://placehold.co/20x20/7A82DA/7A82DA) | `#7A82DA` |

## License

MIT
