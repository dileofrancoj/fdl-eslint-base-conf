module.exports = {
    extends: ['eslint-config-airbnb-base', 'eslint-config-important-stuff'],
    plugins: ['simple-import-sort', 'unused-imports'],
    rules: {
      'simple-import-sort/exports': 'error',
      'semi': 'off'
    }
}
  