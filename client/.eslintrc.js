module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'no-debugger': 'off',
    'import/prefer-default-export': 'off',
    "max-len": [
      "warn",
      {
        "ignoreComments": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }
    ],
    "no-restricted-syntax": [
      "off",
      "ForInStatement",
      "ForOfStatement"
    ]
  },
};
