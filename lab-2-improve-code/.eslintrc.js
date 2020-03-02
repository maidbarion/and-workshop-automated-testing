module.exports = {
    extends: ['airbnb', 'plugin:prettier/recommended'],
    parser: 'babel-eslint',
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
        node: true
    },
    rules: {
        'jsx-a11y/href-no-hash': ['off'],
        'react/jsx-filename-extension': [
            'warn',
            { extensions: ['.js', '.jsx'] }
        ],
        'max-len': [
            'warn',
            {
                code: 80,
                tabWidth: 2,
                comments: 80,
                ignoreComments: false,
                ignoreTrailingComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true
            }
        ],
        'no-param-reassign': ['off'],
        'no-use-before-define': ['off'],
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': ['off'],
        'no-case-declarations': 'off',
        'no-nested-ternary': 'off'
        //'no-shadow': 'off'
    },
    settings: {
        'import/resolver': {
            node: {
                moduleDirectory: ['node_modules', 'src/utils']
            }
        }
    }
};