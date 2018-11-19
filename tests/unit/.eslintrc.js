module.exports = {
    env: {
      mocha: true
    },
    "rules": {
        "no-console": [
            "warn",
            {
                "allow": [
                    "warn",
                    "error"
                ]
            }
        ],
        "indent": [
            "error",
            4
        ],
        "prettier/prettier": "off",
        "quotes": [
            "error",
            "single",
            {
                "allowTemplateLiterals": true
            }
        ],
        "semi": [
            "error",
            "always"
        ],
        "comma-dangle": [
            "error",
            {
                "arrays": "always-multiline",
                "objects": "always-multiline",
                "imports": "always-multiline",
                "exports": "always-multiline",
                "functions": "always-multiline"
            }
        ],
        "comma-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "comma-style": [
            "error",
            "first",
            {
                "exceptions": {
                    "ArrayExpression": true,
                    "ObjectExpression": true
                }
            }
        ],
        "no-unused-vars": [
            "error",
            {
                "vars": "all",
                "args": "all",
                "ignoreRestSiblings": false
            }
        ],
        "consistent-this": "error",
        "eqeqeq": [
            "error",
            "always"
        ],
        "no-const-assign": "error",
        "no-dupe-args": "error",
        "no-empty-function": "error",
        "no-eval": "error",
        "no-extra-semi": "error",
        "no-global-assign": "error",
        "curly": "error",
        "object-curly-spacing": [
            "error",
            "never"
        ],
        "object-curly-newline": [
            "error",
            {
                "multiline": true
            }
        ]
    },
  }