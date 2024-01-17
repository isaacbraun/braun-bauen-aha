import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_2Ey0Y7kc.mjs';

const _page0  = () => import('./chunks/generic_sT_t6FCu.mjs');
const _page1  = () => import('./chunks/index_JWGBlLLp.mjs');
const _page2  = () => import('./chunks/decrement_zuyWQ-jy.mjs');
const _page3  = () => import('./chunks/increment_VRn12A8t.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/api/partials/decrement.astro", _page2],["src/pages/api/partials/increment.astro", _page3]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = undefined;

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
