import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header data-svelte-h="svelte-1autdm">Hello, I am the header!</header>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <nav data-svelte-h="svelte-9h9har"><a href="/">HOME</a> <a href="/about">ABOUT</a></nav> <svg viewBox="0 0 960 300"><symbol id="s-text"><text text-anchor="middle" x="50%" y="80%">Pigs</text></symbol><g class="g-ants"><use xlink:href="#s-text" class="text-copy"></use><use xlink:href="#s-text" class="text-copy"></use><use xlink:href="#s-text" class="text-copy"></use><use xlink:href="#s-text" class="text-copy"></use><use xlink:href="#s-text" class="text-copy"></use></g></svg> <img src="https://cdn.wallpapersafari.com/72/98/vY9A7Z.jpg" alt="doge" style="width:900px;height:600px;"> ${$$result.head += `<!-- HEAD_svelte-1tujy95_START --><link rel="stylesheet" href="css/main.css"><!-- HEAD_svelte-1tujy95_END -->`, ""} <div></div> <a target="_blank" href="https://www.youtube.com/" data-svelte-h="svelte-13l13gp">YouTube</a>`;
});
export {
  Page as default
};
