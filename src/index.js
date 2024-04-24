module.exports = {
    extends: ['standard-with-typescript', 'eslint-config-important-stuff'],
    plugins: ['simple-import-sort', 'unused-imports'],
    env: {
      node: true,
    },
    globals: {
      "NodeJS": true
    },
    rules: {
      'simple-import-sort/exports': "error",
      "simple-import-sort/imports": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "no-console": "warn",
    }
}
  