configuring
start configuring eslint

```bash
npm init @eslint/config
```

---

eslint-plugin-react-hooks

```bash
npm install eslint-plugin-react-hooks --save-dev
```

Custom Configuration

```json
{
  "plugins": [
    // ...
    "react-hooks"
  ],
  "rules": {
    // ...
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
```

Prettier

```bash
npm install --save-dev --save-exact prettier
```

eslint-config-prettier + eslint-plugin-prettier

```bash
npm install --save-dev eslint-config-prettier eslint-plugin-prettier
```

```json
{
  "extends": ["plugin:prettier/recommended", "prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

```bash

```

```bash

```

### Tests

- Unitary tests:

  - Components, functions

- Integration tests:

  - How components and functions should behave together
  - API mocking

- E2E (end-to-end) tests:
  - Simulates simple user interaction
