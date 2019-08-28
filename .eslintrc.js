module.exports = {
    root: true,

    env: {
        node: true
    },

    rules: {
        "no-console": "off",
        "no-debugger": "off"
    },

    parserOptions: {
        parser: "babel-eslint"
    },

    // recommend linting
    // extends: ["plugin:vue/recommended", "@vue/prettier", "plugin:prettier/recommended"],

    // very recommend linting
    extends: [
        "plugin:vue/strongly-recommended",
        "eslint:recommended",
        "@vue/prettier",
        "plugin:prettier/recommended"
    ]
    // overrides: [
    //     {
    //       files: [
    //         "**/*.test.js|**/*.spec.js"
    //       ],
    //       env: {
    //         jest: true // now **/*.test.js files' env has both es6 *and* jest
    //       },
    //       // Can't extend in overrides: https://github.com/eslint/eslint/issues/8813
    //       // "extends": ["plugin:jest/recommended"]
    //       plugins: ["jest"],
    //       rules: {
    //         "jest/no-disabled-tests": "warn",
    //         "jest/no-focused-tests": "error",
    //         "jest/no-identical-title": "error",
    //         "jest/prefer-to-have-length": "warn",
    //         "jest/valid-expect": "error"
    //       }
    //     }
    //     Object.assign(
    //         {
    //           files: [ "**/*.test.js|**/*.spec.js" ],
    //           env: { jest: true },
    //           plugins: [ "jest" ],
    //         },
    //         require("eslint-plugin-jest").configs.recommended
    //       )
    //   ],
    //   globals: {
    //       jest: true
    //   }
};
