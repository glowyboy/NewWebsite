import { $fetch } from "ofetch";
import { baseURL } from "#internal/nuxt/paths";
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
//# sourceMappingURL=virtual_nuxt_C__Users_Glowyboy_Desktop_CssFigmaproj_CssFigmaproj_CssFigmaproj_figmeproj_.nuxt_fetch.mjs.map
