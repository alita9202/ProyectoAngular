
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://alita9202.github.io/ProyectoAngular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ProyectoAngular"
  },
  {
    "renderMode": 2,
    "route": "/ProyectoAngular/about"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24422, hash: 'f98bae08aa88f91a9dc72bf41e49ee0e8855c848b34550bd20b5af4e5788735a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 24941, hash: '0f6bd3e72e956b7c3ab824543613e9d02f67fb4f03699746bea1e88624714734', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 26076, hash: '6d77d72159a604dcb50d9b7d551ecc75814b0e756a8e165cf899508bb9c376bb', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 30972, hash: '34686be0c32ab293473a74915e6207145d4bb5427fad300e00ad71996883d827', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
