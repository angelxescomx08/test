export default [
  {
    files: ["**/*.js", "**/*.cjs", "**/*.mjs", "**/*.ts"],
    rules: {
      "prefer-const": "warn",
      "no-constant-binary-expression": "error"
    }
  }
];