module.exports = {
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-recommended',
    // 'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-prettier',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
    // 'declaration-block-trailing-semicolon': null,
    // 'no-descending-specificity': null,
    // 'no-duplicate-selectors': null,
    // 'no-empty-source': null,
    // 'no-extra-semicolons': null,
    // 'rule-empty-line-before': null,
    // 'selector-pseudo-class-no-unknown': null,
    // 'selector-pseudo-element-no-unknown': null,
    // 'selector-type-no-unknown': null,
    // 'unit-no-unknown': null,
  },
}
