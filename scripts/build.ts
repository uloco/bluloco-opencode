// Generates themes/bluloco.json (OpenCode V2 theme format) from the bluloco.nvim palette.
// Run with: bun scripts/build.ts

type Mode = "dark" | "light"
type Scale = Record<100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, string>

// Copied from bluloco.nvim lua/lush_theme/bluloco.lua
const palette = {
  dark: {
    bg: "#282C34",
    bgFloat: "#21242D",
    fg: "#ABB2BF",
    keyword: "#10B1FE",
    comment: "#636D83",
    punctuation: "#7A82DA",
    method: "#3FC56B",
    type: "#FF6480",
    string: "#F9C859",
    number: "#FF78F8",
    constant: "#9F7EFE",
    tag: "#3691FF",
    attribute: "#FF936A",
    property: "#CE9887",
    parameter: "#8bcdef",
    primary: "#3691ff",
    selection: "#274670",
    diffAdd: "#105B3D",
    diffDelete: "#522E34",
    added: "#177F55",
    deleted: "#A14D5B",
    error: "#ff2e3f",
    warning: "#da7a43",
    info: "#3691ff",
  },
  light: {
    bg: "#F9F9F9",
    bgFloat: "#ECEDEE",
    fg: "#383A42",
    keyword: "#0098DD",
    comment: "#A0A1A7",
    punctuation: "#7A82DA",
    method: "#23974A",
    type: "#D52753",
    string: "#C5A332",
    number: "#CE33C0",
    constant: "#823FF1",
    tag: "#275FE4",
    attribute: "#DF631C",
    property: "#A05A48",
    parameter: "#40B8C5",
    primary: "#0099e1",
    selection: "#d2ecff",
    diffAdd: "#c5f6c8",
    diffDelete: "#fac1c6",
    added: "#3cbc66",
    deleted: "#FA7883",
    error: "#ff0000",
    warning: "#ff8f3a",
    info: "#0099e1",
  },
} satisfies Record<Mode, Record<string, string>>

type Palette = (typeof palette)[Mode]

// --- HSL helpers matching lush.nvim semantics, so greys equal the nvim theme's shades ---

type Hsl = { h: number; s: number; l: number }

function hexToRgb(hex: string) {
  const value = parseInt(hex.slice(1), 16)
  return [(value >> 16) & 255, (value >> 8) & 255, value & 255] as const
}

function rgbToHex([r, g, b]: readonly number[]) {
  return "#" + [r, g, b].map((v) => Math.round(Math.min(255, Math.max(0, v))).toString(16).padStart(2, "0")).join("")
}

function toHsl(hex: string): Hsl {
  const [r, g, b] = hexToRgb(hex).map((v) => v / 255)
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const l = (max + min) / 2
  if (max === min) return { h: 0, s: 0, l: l * 100 }
  const d = max - min
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
  const h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4
  return { h: h * 60, s: s * 100, l: l * 100 }
}

function fromHsl({ h, s, l }: Hsl) {
  const sat = s / 100
  const light = l / 100
  const k = (n: number) => (n + h / 30) % 12
  const a = sat * Math.min(light, 1 - light)
  const f = (n: number) => light - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1))
  return rgbToHex([f(0) * 255, f(8) * 255, f(4) * 255])
}

// lush rounds h/s/l to integers after every operation; mirror that so greys match bluloco.nvim exactly.
const round = (c: Hsl): Hsl => ({
  h: Math.round(((c.h % 360) + 360) % 360),
  s: Math.round(Math.min(100, Math.max(0, c.s))),
  l: Math.round(Math.min(100, Math.max(0, c.l))),
})
const hsl = (hex: string) => round(toHsl(hex))
const lighten = (c: Hsl, n: number) => round({ ...c, l: c.l + (100 - c.l) * (n / 100) })
const darken = (c: Hsl, n: number) => round({ ...c, l: c.l - c.l * (n / 100) })
// lush mixes hue and saturation as a polar vector, which keeps achromatic colors from picking up a stray hue.
function mixHsl(a: Hsl, b: Hsl, n: number) {
  const t = n / 100
  const rad = Math.PI / 180
  const x = Math.cos(a.h * rad) * a.s * (1 - t) + Math.cos(b.h * rad) * b.s * t
  const y = Math.sin(a.h * rad) * a.s * (1 - t) + Math.sin(b.h * rad) * b.s * t
  return round({ h: Math.atan2(y, x) / rad, s: Math.hypot(x, y), l: a.l + (b.l - a.l) * t })
}

// --- OKLab mixing for chromatic scales (perceptually even steps) ---

function toLinear(v: number) {
  v /= 255
  return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4
}
function fromLinear(v: number) {
  return (v <= 0.0031308 ? v * 12.92 : 1.055 * v ** (1 / 2.4) - 0.055) * 255
}
function toOklab(hex: string) {
  const [r, g, b] = hexToRgb(hex).map(toLinear)
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b)
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b)
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b)
  return [
    0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
  ]
}
function fromOklab([L, A, B]: number[]) {
  const l = (L + 0.3963377774 * A + 0.2158037573 * B) ** 3
  const m = (L - 0.1055613458 * A - 0.0638541728 * B) ** 3
  const s = (L - 0.0894841775 * A - 1.291485548 * B) ** 3
  return rgbToHex(
    [
      4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
      -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
      -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
    ].map(fromLinear),
  )
}
function mix(from: string, to: string, amount: number) {
  const a = toOklab(from)
  const b = toOklab(to)
  return fromOklab(a.map((v, i) => v + (b[i]! - v) * amount))
}

// --- Scales ---

function shades(p: Palette, mode: Mode) {
  const bg = hsl(p.bg)
  const shade = (n: number) => (mode === "light" ? darken(bg, n) : lighten(bg, n))
  // Same recipe as bluloco.nvim's grey* colors: a bg shade tinted with a bit of primary.
  const grey = (n: number, tint: number) => fromHsl(mixHsl(shade(n), hsl(p.primary), tint))
  return { grey3: grey(3, 3), grey7: grey(7, 7), grey10: grey(10, 10), grey15: grey(15, 10), grey30: grey(30, 10) }
}

// Steps run from the text end (100) to the page end (900), as OpenCode expects in both modes.
function grayScale(p: Palette, mode: Mode): Scale {
  const g = shades(p, mode)
  const between = mix(p.fg, p.comment, 0.5)
  if (mode === "dark")
    return {
      100: p.fg,
      200: between,
      300: p.comment,
      400: g.grey30,
      500: g.grey15,
      600: g.grey10,
      700: g.grey7,
      800: p.bg,
      // Bluloco floats/panels sit darker than the editor, so the darkest step is the panel color.
      900: p.bgFloat,
    }
  return {
    100: p.fg,
    200: between,
    300: p.comment,
    400: g.grey30,
    500: g.grey10,
    600: g.grey7,
    700: p.bgFloat,
    800: g.grey3,
    900: p.bg,
  }
}

function hueScale(anchor: string, gray: Scale, page: string): Scale {
  return {
    100: mix(anchor, gray[100], 0.75),
    200: mix(anchor, gray[200], 0.5),
    300: mix(anchor, gray[300], 0.5),
    400: anchor,
    500: mix(anchor, page, 0.45),
    600: mix(anchor, page, 0.72),
    700: mix(anchor, page, 0.84),
    800: mix(anchor, page, 0.92),
    900: mix(anchor, page, 0.96),
  }
}

function hues(p: Palette, mode: Mode) {
  const gray = grayScale(p, mode)
  const scale = (anchor: string) => hueScale(anchor, gray, p.bg)
  const red = scale(mode === "dark" ? p.error : p.type)
  const blue = scale(p.primary)
  // Selected rows use interactive.600; match nvim's PmenuSel/Visual selection.
  blue[600] = p.selection
  return {
    gray,
    red,
    orange: scale(p.attribute),
    yellow: scale(p.string),
    green: scale(p.method),
    cyan: scale(p.parameter),
    blue,
    purple: scale(p.punctuation),
    // Custom hues so agents can use exact bluloco colors (see categorical).
    keyword: scale(p.keyword),
    warning: scale(p.warning),
    accent: "$hue.purple",
    interactive: "$hue.blue",
    neutral: "$hue.gray",
  }
}

// Tokens that differ per mode only by palette value.
function paletteTokens(p: Palette) {
  return {
    border: { base: "$hue.neutral.400" },
    // nvim PmenuThumb
    scrollbar: { base: "$hue.accent.400" },
    diff: {
      text: { added: p.added, removed: p.deleted, context: "$text.muted", hunkHeader: p.number },
      background: { added: p.diffAdd, removed: p.diffDelete, context: "$background.base" },
      highlight: { added: p.method, removed: p.error },
      lineNumber: { text: "$text.muted", background: { added: p.diffAdd, removed: p.diffDelete } },
    },
    syntax: {
      comment: p.comment,
      keyword: p.keyword,
      function: p.method,
      // OpenCode also paints parameters and function/method calls with this token.
      variable: p.constant,
      string: p.string,
      number: p.number,
      type: p.type,
      operator: p.punctuation,
      punctuation: p.punctuation,
    },
    markdown: {
      text: p.fg,
      heading: p.keyword,
      link: p.tag,
      linkText: p.constant,
      code: p.property,
      blockQuote: p.constant,
      emphasis: p.attribute,
      strong: p.type,
      horizontalRule: p.comment,
      listItem: p.punctuation,
      listEnumeration: p.punctuation,
      image: p.tag,
      imageText: p.constant,
      codeBlock: p.fg,
    },
  }
}

const base = {
  // Agents take colors by their index among visible agents: build, general, explore, plan, then custom ones.
  categorical: ["keyword", "purple", "green", "warning", "yellow", "cyan", "red", "blue"],
  text: {
    base: "$hue.neutral.100",
    muted: "$hue.neutral.300",
    action: {
      primary: {
        base: "$text.base",
        $disabled: "$text.muted",
        $focused: "$text.base",
        $selected: "$hue.interactive.400",
      },
      secondary: { base: "$text.muted", $hovered: "$text.base", $focused: "$hue.interactive.400" },
      destructive: { base: "#ffffff", $disabled: "$text.muted" },
    },
    formfield: {
      base: "$text.base",
      $hovered: "$hue.interactive.400",
      $focused: "$hue.interactive.400",
      $pressed: "$hue.interactive.400",
      $disabled: "$text.muted",
      $selected: "$hue.interactive.400",
    },
    feedback: {
      error: { base: palette.light.error },
      warning: { base: palette.light.warning },
      success: { base: "$hue.green.400" },
      info: { base: "$hue.blue.400" },
    },
  },
  // Light layout: page at 900, panels a step darker at 700.
  background: {
    base: "$hue.neutral.900",
    raised: { base: "$hue.neutral.700", high: "$hue.neutral.600", max: "$hue.neutral.500" },
    action: {
      primary: {
        base: "transparent",
        // nvim CursorLine (grey7)
        $hovered: "$hue.neutral.600",
        $focused: "$hue.interactive.600",
        $selected: "transparent",
      },
      secondary: { base: "transparent" },
      destructive: { base: "$hue.red.400" },
    },
    formfield: { base: "$background.base" },
    feedback: {
      error: { base: "$background.base" },
      warning: { base: "$background.base" },
      success: { base: "$background.base" },
      info: { base: "$background.base" },
    },
  },
  ...paletteTokens(palette.light),
  "@dialog": {
    background: {
      base: "$background.raised.base",
      action: {
        primary: { $hovered: "$background.raised.high" },
        secondary: { $hovered: "$background.raised.high" },
      },
    },
  },
}

const theme = {
  $schema: "https://opencode.ai/theme.json",
  base,
  light: { hue: hues(palette.light, "light") },
  dark: {
    hue: hues(palette.dark, "dark"),
    text: {
      feedback: { error: { base: palette.dark.error }, warning: { base: palette.dark.warning } },
    },
    // Dark layout: page at 800, panels darker at 900 like bluloco.nvim floats.
    background: {
      base: "$hue.neutral.800",
      raised: { base: "$hue.neutral.900", high: "$hue.neutral.700", max: "$hue.neutral.600" },
      action: { primary: { $hovered: "$hue.neutral.700" } },
    },
    ...paletteTokens(palette.dark),
  },
}

const output = new URL("../themes/bluloco.json", import.meta.url)
await Bun.write(output, JSON.stringify(theme, null, 2) + "\n")
console.log(`wrote ${output.pathname}`)
