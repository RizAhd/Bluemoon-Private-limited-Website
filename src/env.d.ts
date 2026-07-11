/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  /** Web3Forms access key for contact/quote lead delivery (public, safe to expose). */
  readonly PUBLIC_WEB3FORMS_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
