module.exports = {
  extends: [
    "expo",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  plugins: ["prettier", "@typescript-eslint", "import"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: "./"
  },
  rules: {
    "prettier/prettier": "warn"
  }
};
