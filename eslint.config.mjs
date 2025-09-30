import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
eslintConfig.push({
  rules: {
    "react/react-in-jsx-scope": "off",
    "@next/next/no-img-element": "warn",
    "@typescript-eslint/no-explicit-any": "off",
    "no-console": "warn",
    "react/jsx-uses-react": "off",
    "react/jsx-uses-vars": "error",
    "react/jsx-no-undef": "error",
    "react/prop-types": "off",
    "import/no-unresolved": "error",
    "import/order": [
      "warn",
      {
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "always",
      },
    ],
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "never",
    }],    "object-curly-spacing": ["error", "always"],
    "array-bracket-spacing": ["error", "never"],
    "indent": ["error", 2],
    "max-len": ["warn", { "code": 100, "ignoreUrls": true }],
    "eol-last": ["error", "always"],
    "no-trailing-spaces": "error",
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
  },
});
