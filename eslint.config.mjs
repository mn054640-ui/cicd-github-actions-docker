import js from "@eslint/js";
import globals from "globals";

export default [
  {
    files: ["**/*.js"],   // 👈 VERY IMPORTANT (this fixes your issue)
    ignores: ["node_modules/**"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
    },

    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
      "no-console": "off",
    },
  },

  js.configs.recommended,
];
