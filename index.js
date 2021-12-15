module.exports = {
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    jsx: true,
  },
  plugins: [
    "react",
    "react-native",
    "import",
    "simple-import-sort",
    "unused-imports"
  ],
  env: {
    "react-native/react-native": true
  },
  rules: {
    "no-console": "warn",
    "no-nested-ternary": "off",
    "no-use-before-define": 0,
    "no-restricted-globals": 0,
    "prefer-const": ["warn", {
      "ignoreReadBeforeAssign": true
    }],
    "import/order": "off",
    "import/extensions": 0,
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": [
      "error",
      {
        "groups": [
          [
            // Packages. `react` related packages come first.
            "^react",
            // Packages
            "^(@?\\w)$",
            // Side effect imports.
            "^\\u0000",
            // Parent imports. Put `..` last.
            "^\\.\\.(?!/?$)",
            "^\\.\\./?$",
            // Other relative imports. Put same-folder imports and `.` last.
            "^\\./(?=.*/)(?!/?$)",
            "^\\.(?!/?$)",
            "^\\./?$"
          ]
        ]
      }
    ],
    "unused-imports/no-unused-imports": 1,

    // React rules
    "react/no-did-update-set-state": "off",
    "react/require-default-props": 2,
    "react/forbid-prop-types": 0,
    "react/static-property-placement": 0,
    "react/sort-comp": 0,
    "react/jsx-filename-extension": [0, { "extensions": [".jsx", ".js"] }],
    "react/jsx-props-no-spreading": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-no-bind": 0,
    "react/jsx-sort-props": [2, {
      "callbacksLast": true,
      "shorthandFirst": true,
      "shorthandLast": false,
      "ignoreCase": true,
      "noSortAlphabetically": false,
      "reservedFirst": ["key"]
    }],
    "react/sort-prop-types": [1, {
      "callbacksLast": true,
      "ignoreCase": true,
      "requiredFirst": true,
      "sortShapeProp": true,
      "noSortAlphabetically": false
    }],

    // React Native rules
    "react-native/no-unused-styles": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-raw-text": 1,
    "react-native/no-color-literals": 2,
    "react-native/no-single-element-style-arrays": 2,
  },
};
