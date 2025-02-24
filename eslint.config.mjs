import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactNative from "eslint-plugin-react-native";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-plugin-prettier";
/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tseslint.parser, // ✅ Add TypeScript parser
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: "./tsconfig.json", // ✅ Ensure ESLint reads TypeScript config
      },
    },
    plugins: {
      js,
      typescript: tseslint,
      react,
      "react-native": reactNative,
      import: importPlugin,
      prettier,
    },
    rules: {
      // ✅ Prevent unused variables & imports
      // "no-unused-vars": [
      //   "error",
      //   { vars: "all", args: "after-used", ignoreRestSiblings: true },
      // ],
      // "@/no-unused-vars": ["error"],
      // // ✅ React Rules
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",

      // ✅ React Native Rules
      "react-native/no-unused-styles": "error",
      "react-native/split-platform-components": "warn",
      "react-native/no-inline-styles": "off",
      "react-native/no-color-literals": "warn",
      "react-native/no-single-element-style-arrays": "warn",

      // ✅ Import Rules (Fix path resolution)
      "import/order": [
        "error",
        { groups: ["builtin", "external", "internal"] },
      ],
      "import/no-unresolved": "off", // 🚀 Disable this rule (TypeScript handles it)
      "import/no-extraneous-dependencies": "error",

      // ✅ Prettier Integration
      "prettier/prettier": "error",
    },
  },
];
