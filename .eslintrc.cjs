/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "@thoughtbot/eslint-config",
    "@thoughtbot/eslint-config/typescript",
    "prettier",
  ],
  plugins: ["simple-import-sort"],
  rules: {
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
    "react-hooks/exhaustive-deps": "error",
    "import/prefer-default-export": "off",
    "@typescript-eslint/restrict-template-expressions": "off",

    // Switch off no-underscore-dangle rule as Sanity uses them a lot for internal properties
    "no-underscore-dangle": "off",
  },
  overrides: [
    {
      // or whatever matches stories specified in .storybook/main.js
      files: ["*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],
      extends: ["plugin:storybook/recommended"],
    },
  ],
  ignorePatterns: [
    "node_modules/",
    ".next/",
    "vercel/",
    "pnpm-lock.yaml",
    ".gitignore",
    "app/_boilerplate/",
    "!.storybook/",
    "types/sanity.types.ts",
  ],
};
