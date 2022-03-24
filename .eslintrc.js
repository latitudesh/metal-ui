module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    }, 
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    }, 
    "rules": { 
        "no-undef": 1,
        "linebreak-style": [
            1,
            "unix"
        ],
        "quotes": [
            1,
            "double"
        ],
        "semi": [
            1,
            "always"
        ]
    },
    overrides: [
        {
            files: ["__tests__/**/*.test.js"],
            rules: {
                "no-undef": "off",
            },
        },
    ],
};
