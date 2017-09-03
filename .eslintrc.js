module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true
    },
    "globals":{
        "angular": true
    },
    "extends": "eslint:recommended",
    "rules": {
        // Severity should be one of the following: 0 = off, 1 = warn, 2 = error
        "eqeqeq": 2,
        "no-console": 1,
        "indent": [
            "warn",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "warn",
            "single"
        ]
    }
};