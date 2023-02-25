# Code Test

## json

```json
{
  "name": "Chair",
  "quantity": 12,
  "price": 899,
  "instock": false,
  "description": null
}
```

## markup

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/logo.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Title</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/index.tsx"></script>
  </body>
</html>
```

## css

```css
/* Comment */

@import url('../what.css');

body {
  color: #ffffff;
  background-color: rgba(255, 255, 255, 1);
  font-size: 12px;
}

@media screen and (min-width: 1200px) {
  .main-content > .card:first-child {
    height: 100vh;
  }
}
```

## javascript

```js
/* Comment */

import foo from './foo';
import { bar } from './bar';
import foo, { bar } from './foobar';

const foo = 'bar';
const foo = null;
var foo = undefined;
var foo = Infinity;
let foo = ((1 + 2) * 6) / 4;
let foo = false;
let foo = (true && false) || (true && 6 >= 5);

function foobar(foo, bar) {
  if (!foo) return bar;
  if (!bar) return foo;
  return `${foo}, ${bar}`;
}
```

## jsx

```jsx
import React from 'react';

/**
 * Foobar
 * @see https://foobar.com/
 */
function Foobar(foo, bar) {
  if (!foo) return bar;
  if (!bar) return foo;
  return `${foo}, ${bar}`;
}
```
