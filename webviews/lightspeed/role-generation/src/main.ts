//import "primeicons/primeicons.css";
import { createApp } from "vue";
import App from "./App.vue";

import hljs from "highlight.js/lib/core";
import yaml from "highlight.js/lib/languages/yaml";
import hljsVuePlugin from "@highlightjs/vue-plugin";
import ProgressSpinner from "primevue/progressspinner";
import PrimeVue from "primevue/config";
import Material from "@primevue/themes/material";

/* TODO
primeicons loading is blocked by the CSP
index.html:1 Refused to load the font 'https://file+.vscode-resource.vscode-cdn.net/assets/primeicons.woff2' because it violates the following Content Security Policy directive: "default-src 'none'". Note that 'font-src' was not explicitly set, so 'default-src' is used as a fallback.

index.html:1 Refused to load the font 'https://file+.vscode-resource.vscode-cdn.net/assets/primeicons.woff' because it violates the following Content Security Policy directive: "default-src 'none'". Note that 'font-src' was not explicitly set, so 'default-src' is used as a fallback.

index.html:1 Refused to load the font 'https://file+.vscode-resource.vscode-cdn.net/assets/primeicons.ttf' because it violates the following Content Security Policy directive: "default-src 'none'". Note that 'font-src' was not explicitly set, so 'default-src' is used as a fallback.
*/

hljs.registerLanguage("yaml", yaml);

const app = createApp(App);
app.use(hljsVuePlugin);

app.use(PrimeVue, {
  theme: {
    preset: Material,
  },
});

app.component("ProgressSpinner", ProgressSpinner);
app.mount("#app");
