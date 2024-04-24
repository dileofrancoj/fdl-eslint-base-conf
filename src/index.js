module.exports = {
    extends: ['standard-with-typescript', 'important-stuff'],
    plugins: ['simple-import-sort', 'unused-imports'],
    env: {
      node: true,
    },
    globals: {
      "NodeJS": true // comando para reconocer variables globals y bypassear el no undef
    },
    rules: {
      'simple-import-sort/exports': "error",
      "simple-import-sort/imports": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "no-console": "warn",
    }
}
  