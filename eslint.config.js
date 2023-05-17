import js from "@eslint/js";
import solid from "eslint-plugin-solid";
import globals from "globals";
export default [
  js.configs.recommended, // replaces eslint:recommended
  // your configs here,
  {
    files: ["**/*.jsx", "**/*.tsx"],
    plugins: {
      solid
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        ...globals["es2015"]
      }
    },
    rules: solid.configs.recommended.rules
    // or solid.configs.typescript.rules for use with TypeScript
  }
];