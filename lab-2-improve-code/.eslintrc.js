module.exports = {
    extends: ['plugin:prettier/recommended'],
    parser: 'babel-eslint',
    env: {
        es6: true,
        jest: true,
        node: true
    },
    rules: {},
    settings: {
        'import/resolver': {
            node: {
                moduleDirectory: ['node_modules']
            }
        }
    }
};
