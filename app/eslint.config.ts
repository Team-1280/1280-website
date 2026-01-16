import eslint from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  {
    ignores: ["dist"],
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "@stylistic": stylistic,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...stylistic.configs.recommended.rules,
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn"],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
  prettier,
]
