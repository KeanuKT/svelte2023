

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.01fe969e.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.87e88802.js"];
export const stylesheets = [];
export const fonts = [];
