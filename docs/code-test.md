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

## yaml

```yaml
name: 'Chair'
quantity: 12
price: 899
instock: false
description: null
attrs:
  sizes:
    - 12
    - 13
    - 14
  origin: 'Yiwu'
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
  font-family: Helvetica, sans-serif;
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

## scss

```scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
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

class Foobar extends Foo {
  constructor() {
    super();
    this.state = 'idle';
  }
}
```

## jsx

```jsx
import React from 'react';

/**
 * Foobar
 * @see https://foobar.com/
 */
function Foobar({ children, className }) {
  const [state, setState] = useState();
  return <div className={className} data-testid="foobar">{children}<div>;
}
```

## typescript

```ts
/* Comment */

import foo from './foo';
import { bar } from './bar';
import foo, { bar } from './foobar';

interface Options {
  validator: () => void;
}

// TypeScript
async function foobar(options?: Options): Promise<string> {
  if (!foo) return bar;
  if (!bar) return foo;
  return `${foo}, ${bar}`;
}

class Foobar extends Foo<Options> {
  private state = null;

  constructor() {
    super();
    this.state = 'idle';
  }
}
```

## tsx

```tsx
import React from 'react';

interface Props = {
  children: React.ReactNode,
  className?: string;
}

/**
 * Foobar
 * @see https://foobar.com/
 */
function Foobar({ children, className }: Props) {
  const [state, setState] = useState();
  return <div className={className} data-testid="foobar">{children}<div>;
}
```
