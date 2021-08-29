module.exports = {
    "plugins": ["prettier"],
    "extends": ["plugin:react/recommended"],
    "rules": {
        "prettier/prettier": "error"
    },
    "ParserOptions":{
        "ecmaVersion":7,
        "sourceType": "module",
        "ecmaFeatures":{
            "jsx":true
        }
    }
};