module.exports = {
  root: true,
  extends: 'airbnb-base',
  env: {
    browser: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    allowImportExportEverywhere: true,
    sourceType: 'module',
    requireConfigFile: false,
  },
  rules: {
    'import/extensions': ['error', { js: 'always' }], // require js file extensions in imports
    'linebreak-style': ['error', 'unix'], // enforce unix linebreaks
    'no-param-reassign': [2, { props: false }], // allow modifying properties of param
  },
  overrides: [
    {
      files: ['tools/**/*.js'],
      env: {
        browser: false,
        node: true,
      },
      rules: {
        'no-console': 'off',
        'import/prefer-default-export': 'off',
        'no-restricted-syntax': [
          'error',
          { selector: 'ForInStatement', message: 'Use Object.{keys,values,entries} instead.' },
          { selector: 'LabeledStatement', message: 'Labels are a form of GOTO.' },
          { selector: 'WithStatement', message: '`with` is disallowed.' },
        ],
      },
    },
  ],
};
