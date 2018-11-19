# preact - pipeline operator - babel 7 - weabpack - boilerplate
Babel 7 come with lot of new javascript features. Include my favorite: [pipeline operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Pipeline_operator). So this is the right time to create minimal building script for [preact](https://preactjs.com/), which is the smallest JSX framework based on react.

> compare dist sizes: **react** 111.389 byte  <--> **preact** 9.513 byte

## Pipeline operator
which is give syntax sugar for .....

```jsx
const increment = value => value + 1;
const double = value => value * 2;

const result = "5"
  |> parseInt
  |> double
  |> double
  |> increment
  |> double
;

// it is equal:

const result = double(increment(double(double(parseInt("5")))));
```

## Important fragment of build script
```{"pragma": "h"}``` option turn ```@babel/preset-env``` to preact.

```json
{
  "presets": ["@babel/preset-env", 
    ["@babel/preset-react", {"pragma": "h"}]
  ],
  "plugins": [
    [ "@babel/plugin-proposal-pipeline-operator", {"proposal": "minimal"}]
  ]
}
```

### Install
```yarn```

### Build
```yarn build```

### Develop
```yarn start```

### according to 
- <https://github.com/jantimon/html-webpack-plugin>
- <https://babeljs.io/docs/en/babel-preset-react>
- <https://preactjs.com/guide/switching-to-preact>
- <https://en.wikipedia.org/wiki/Boilerplate_code>
- <https://medium.com/@prudywsh/babel-7-pipeline-operator-in-javascript-a7724212b8ba>