module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [
        // 'eslint:recommended', // already included by next/core-web-vitals
        'next/core-web-vitals', // includes eslint:recommended, eslint-plugin-react, eslint-plugin-react-hooks, eslint-plugin-next
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended', // show prettier errors as ESLint errors
    ],
    rules: {
        'no-console': ['error', { allow: ['warn', 'error', 'info', 'group', 'groupEnd', 'trace'] }],
        'spaced-comment': ['error', 'always'],
        'import/newline-after-import': ['error', { count: 1 }],
    },
};
