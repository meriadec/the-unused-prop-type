# the-unused-prop-type problem

*purpose* of this repo is to illustrate a problem I have with specific react + typescript + eslint configuration.


- **`working`** : js + react + eslint + eslint-plugin-react
- **`not-working`** : typescript + eslint + eslint-plugin-react

both folder share the **exact same eslint configuration**, see [config from "working" folder](working/.eslintrc.js) and [config from "not-working" folder](not-working/.eslintrc.js)


### example 1: working :tada:

```javascript
import React from "react";
import PropTypes from "prop-types";

const Demo = props => {
  return <div>{props.foo}</div>;
};

Demo.propTypes = {
  foo: PropTypes.string,
  bar: PropTypes.string // <-- unused prop
};

export default Demo;
```

##### output of `yarn lint`

```
<path>/Demo.js
  10:8  error  'bar' PropType is defined but prop is never used  react/no-unused-prop-types

✖ 1 problem (1 error, 0 warnings)
```

### example 2: not-working :rage:

```typescript
import React from "react";

type Props = {
  foo: string;
  bar: string; // <-- unused prop
};

const Demo = (props: Props): React.ReactNode => {
  return <div>{props.foo}</div>;
};

export default Demo;
```

##### output of `yarn lint`

```
(No error!)
```
