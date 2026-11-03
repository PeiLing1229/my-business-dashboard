// Inline SVG icons: the main menu uses the Team 1 dog and Formula 1 props;
// utility and calendar-event icons stay as compact line icons. Nothing is downloaded.

const BRAND_ICONS = new Set(['overview', 'sales', 'customers', 'payments', 'stock', 'tasks', 'calendar', 'brief', 'about']);

// The shared drop-eared dog keeps the navigation recognisably Team 1. Each page
// adds a different F1 object so the icon still communicates its function.
const DOG_DRIVER = [
  { tag: 'path', d: 'M14 17C10 10 5 12 6 21c1 6 4 9 9 7', class: 'mascot-soft' },
  { tag: 'path', d: 'M34 17c4-7 9-5 8 4-1 6-4 9-9 7', class: 'mascot-soft' },
  { tag: 'path', d: 'M13 19c1-8 21-8 22 0v7c0 8-5 13-11 13s-11-5-11-13z', class: 'mascot-fur' },
  { tag: 'path', d: 'M18 15c2-4 5-4 6-1 2-3 5-2 6 1', class: 'mascot-line' },
  { tag: 'circle', cx: '19', cy: '24', r: '1.25', class: 'mascot-dot' },
  { tag: 'circle', cx: '29', cy: '24', r: '1.25', class: 'mascot-dot' },
  { tag: 'ellipse', cx: '24', cy: '30', rx: '6', ry: '4.5', class: 'mascot-white' },
  { tag: 'circle', cx: '24', cy: '28.5', r: '1.5', class: 'mascot-dot' },
  { tag: 'path', d: 'M20.5 32c2 2 5 2 7 0', class: 'mascot-line' },
];

const F1_CAR = [
  { tag: 'path', d: 'M17 31h14l3 6h7l3 4v4H4v-4l3-4h7z', class: 'mascot-blue' },
  { tag: 'path', d: 'M20 31h8l3 11H17z', class: 'mascot-white' },
  { tag: 'path', d: 'M4 40h40v5H4z', class: 'mascot-blue' },
  { tag: 'circle', cx: '10', cy: '42', r: '4', class: 'mascot-ink' },
  { tag: 'circle', cx: '38', cy: '42', r: '4', class: 'mascot-ink' },
  { tag: 'circle', cx: '10', cy: '42', r: '1.6', class: 'mascot-soft' },
  { tag: 'circle', cx: '38', cy: '42', r: '1.6', class: 'mascot-soft' },
];

const scaled = (parts, transform) => parts.map(part => ({ ...part, transform }));

const BRAND_PARTS = {
  // Overview: dog driver seated in an F1 car with a steering wheel.
  overview: [
    ...scaled(DOG_DRIVER, 'translate(4 -3) scale(.83)'),
    ...F1_CAR,
    { tag: 'circle', cx: '24', cy: '34', r: '5.5', class: 'mascot-white' },
    { tag: 'path', d: 'M24 34l3-3M19 34h10', class: 'mascot-line' },
  ],
  // Orders: dog racer waving the chequered finish flag.
  sales: [
    ...scaled(DOG_DRIVER, 'translate(-1 2) scale(.82)'),
    { tag: 'path', d: 'M32 7v37', class: 'mascot-line' },
    { tag: 'path', d: 'M32 8h13v15H32z', class: 'mascot-white' },
    { tag: 'path', d: 'M32 8h6.5v7.5H32zM38.5 15.5H45V23h-6.5z', class: 'mascot-check' },
    { tag: 'circle', cx: '15', cy: '39', r: '4', class: 'mascot-ink' },
    { tag: 'circle', cx: '15', cy: '39', r: '1.5', class: 'mascot-soft' },
  ],
  // Customers: a two-driver Team 1 pairing with race visors.
  customers: [
    ...scaled(DOG_DRIVER, 'translate(-4 2) scale(.72)'),
    ...scaled(DOG_DRIVER, 'translate(14 7) scale(.64)'),
    { tag: 'path', d: 'M9 19l13-2-1 7-13 2zM28 22l11-2-1 6-11 2z', class: 'mascot-blue' },
    { tag: 'path', d: 'M22 20h5', class: 'mascot-line' },
  ],
  // Payments: dog driver with an F1 tyre and the logo's lightning motif.
  payments: [
    ...scaled(DOG_DRIVER, 'translate(-4 1) scale(.8)'),
    { tag: 'circle', cx: '36', cy: '35', r: '10', class: 'mascot-ink' },
    { tag: 'circle', cx: '36', cy: '35', r: '6', class: 'mascot-soft' },
    { tag: 'circle', cx: '36', cy: '35', r: '2', class: 'mascot-white' },
    { tag: 'path', d: 'M38 26l-7 9h5l-4 8 10-11h-5z', class: 'mascot-blue' },
  ],
  // Stock: dog in the pit lane with a tyre trolley.
  stock: [
    ...scaled(DOG_DRIVER, 'translate(-3 -2) scale(.78)'),
    { tag: 'path', d: 'M6 34h31l5 5v5H6z', class: 'mascot-blue' },
    { tag: 'path', d: 'M10 34l5-6h17l5 6M17 34v4h10v-4', class: 'mascot-line' },
    { tag: 'circle', cx: '12', cy: '43', r: '3.5', class: 'mascot-ink' },
    { tag: 'circle', cx: '36', cy: '43', r: '3.5', class: 'mascot-ink' },
    { tag: 'circle', cx: '42', cy: '22', r: '5', class: 'mascot-ink' },
    { tag: 'circle', cx: '42', cy: '22', r: '2.3', class: 'mascot-soft' },
  ],
  // Tasks: dog crew member holding an F1 pit board.
  tasks: [
    ...scaled(DOG_DRIVER, 'translate(-2 4) scale(.76)'),
    { tag: 'rect', x: '29', y: '7', width: '16', height: '23', rx: '2', class: 'mascot-white' },
    { tag: 'path', d: 'M33 11h4v4h-4zM37 15h4v4h-4zM33 19h4v4h-4zM37 23h4v3h-4z', class: 'mascot-check' },
    { tag: 'path', d: 'M37 30v15M30 39h14', class: 'mascot-line' },
    { tag: 'path', d: 'M8 39h17', class: 'mascot-blue' },
  ],
  // Calendar: race-weekend calendar plus a miniature F1 silhouette.
  calendar: [
    ...scaled(DOG_DRIVER, 'translate(-4 -1) scale(.72)'),
    { tag: 'rect', x: '20', y: '24', width: '25', height: '20', rx: '3', class: 'mascot-white' },
    { tag: 'path', d: 'M20 30h25M26 21v6M39 21v6', class: 'mascot-line' },
    { tag: 'path', d: 'M26 34h5v4h-5zM31 38h5v4h-5zM36 34h5v4h-5z', class: 'mascot-check' },
    { tag: 'path', d: 'M5 42h13l2-3h5l2 3h5', class: 'mascot-blue' },
  ],
  // AI analysis: dog driver wearing telemetry goggles with a data trace.
  brief: [
    ...DOG_DRIVER,
    { tag: 'path', d: 'M13 20l10-2-2 9-10 2zM35 20l-10-2 2 9 10 2z', class: 'mascot-blue' },
    { tag: 'path', d: 'M22 22h4M6 40h7l3-5 5 8 5-5 4 2h12', class: 'mascot-line' },
    { tag: 'path', d: 'M40 7v8M36 11h8', class: 'mascot-blue' },
  ],
  // About: full dog racing helmet and an F1 front wing.
  about: [
    ...DOG_DRIVER,
    { tag: 'path', d: 'M12 19c4-10 20-10 24 0l-2 9H14z', class: 'mascot-blue' },
    { tag: 'path', d: 'M14 25h20M18 19h12', class: 'mascot-line' },
    { tag: 'path', d: 'M7 41h34v4H7zM14 41l4-5h12l4 5', class: 'mascot-white' },
    { tag: 'circle', cx: '14', cy: '43', r: '3', class: 'mascot-ink' },
    { tag: 'circle', cx: '34', cy: '43', r: '3', class: 'mascot-ink' },
  ],
};

const PATHS = {
  lock: ['M6.5 11h11A1.5 1.5 0 0 1 19 12.5v6a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 18.5v-6A1.5 1.5 0 0 1 6.5 11z', 'M8 11V8a4 4 0 0 1 8 0v3'],
  file: ['M7 3h7l5 5v13H7z', 'M14 3v5h5'],
  left: ['M15 6l-6 6 6 6'],
  right: ['M9 6l6 6-6 6'],
  payment: ['M12 20.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17z', 'M14.5 9.2c-.5-.8-1.4-1.2-2.5-1.2-1.5 0-2.6.8-2.6 2s1.1 1.6 2.6 2 2.6.8 2.6 2-1.1 2-2.6 2c-1.1 0-2-.4-2.5-1.2', 'M12 6.5V8', 'M12 16v1.5'],
  followup: ['M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2'],
  completion: ['M3 6h11v10H3z', 'M14 10h4l3 3v3h-7', 'M7 19.3a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6z', 'M17 19.3a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6z'],
  task: ['M5.5 4h13A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-13A1.5 1.5 0 0 1 5.5 4z', 'M8.5 12.5l2.5 2.5 4.5-5'],
  entry: ['M5 4h10l4 4v12H5z', 'M9 12h6', 'M9 16h4'],
};

const SVG = 'http://www.w3.org/2000/svg'; // XML namespace name, not a network address

export function icon(name, cls = '') {
  const svg = document.createElementNS(SVG, 'svg');
  const branded = BRAND_ICONS.has(name);
  svg.setAttribute('viewBox', branded ? '0 0 48 48' : '0 0 24 24');
  svg.setAttribute('class', `ico${branded ? ' brand-icon' : ''} ${cls}`.trim());
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');
  const parts = branded ? BRAND_PARTS[name] : (PATHS[name] || []).map(d => ({ tag: 'path', d }));
  for (const { tag = 'path', class: partClass = '', ...attrs } of parts || []) {
    const part = document.createElementNS(SVG, tag);
    for (const [key, value] of Object.entries(attrs)) part.setAttribute(key, value);
    if (partClass) part.setAttribute('class', partClass);
    svg.append(part);
  }
  return svg;
}
