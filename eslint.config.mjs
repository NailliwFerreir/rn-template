import pluginReact from 'eslint-plugin-react'
import globals from 'globals'
import tseslint from 'typescript-eslint'


export default [
  { files: ['**/*.{js,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    ignores: ['*.config.js', './components/**/*.{js,ts,jsx,tsx}'],
    rules: {
      'no-unused-vars': 'error',
      'no-explicit-any': 'off',
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'no-trailing-spaces': 'error',
      'require-jsdoc': 'off',
      'react/react-in-jsx-scope': 'off',
      'indent': ['error', 2],
      'object-curly-spacing': ['error', 'always'],
      'linebreak-style': ['error', 'unix'],
      'react/jsx-wrap-multilines': [
        'error',
        {
          declaration: 'parens-new-line',
          assignment: 'parens-new-line',
          return: 'parens-new-line',
          arrow: 'parens-new-line',
          condition: 'parens-new-line',
          logical: 'parens-new-line',
          prop: 'parens-new-line',
        },
      ],
    } }
]
