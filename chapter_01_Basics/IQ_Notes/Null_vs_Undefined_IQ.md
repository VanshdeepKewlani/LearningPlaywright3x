# Null vs Undefined in JavaScript

---

## Comparison Table

| Aspect | `null` | `undefined` |
|--------|--------|-------------|
| **Type** | `object` (historical JS bug) | `undefined` |
| **Meaning** | Intentional absence of a value — "nothing" | Unintentional absence — "not yet assigned" |
| **Who sets it?** | The developer explicitly assigns it | JavaScript assigns it by default |
| **When does it appear?** | You write `let x = null;` | Variable declared but not initialized, missing object property, function with no `return` |
| **Intent** | ✅ Deliberate / intentional | ❌ Unintentional / default |
| **`typeof` result** | `"object"` | `"undefined"` |
| **Loose equality (`==`)** | `null == undefined` → `true` | `undefined == null` → `true` |
| **Strict equality (`===`)** | `null === undefined` → `false` | `undefined === null` → `false` |
| **JSON serialization** | `JSON.stringify({a: null})` → `'{"a":null}'` | `JSON.stringify({a: undefined})` → `'{}'` (key omitted) |
| **Arithmetic** | `null + 1` → `1` (coerced to `0`) | `undefined + 1` → `NaN` |
| **Default function param** | `null` is passed as-is (no default applied) | `undefined` triggers the default parameter value |
| **Boolean coercion** | `Boolean(null)` → `false` | `Boolean(undefined)` → `false` |

---

## When Does `undefined` Appear?

| Scenario | Code | Value |
|---------|------|-------|
| Declared, not initialized | `let x;` | `undefined` |
| Missing object property | `obj.nonExistent` | `undefined` |
| Function with no return | `function f(){}` → `f()` | `undefined` |
| Array hole | `[1, , 3][1]` | `undefined` |
| Function param not passed | `function f(a){}` → `f()` | `undefined` |

---

## When Does `null` Appear?

| Scenario | Code | Value |
|---------|------|-------|
| Explicitly assigned | `let x = null;` | `null` |
| DOM method (no match) | `document.getElementById("nope")` | `null` |
| RegExp exec (no match) | `"a".match(/b/)` | `null` |
| Intentional reset | `user = null;` (clear reference) | `null` |

---

## Visual: The Assignment Spectrum

```
                    undefined                         null
                         |                              |
    not declared ───── not assigned ───── assigned ───── explicitly set to nothing
                         |                              |
                    "JS did this"                 "I did this"
```

---

## Checking for null / undefined

```javascript
// Loose check (catches both)
if (value == null) { /* null OR undefined */ }

// Strict checks
if (value === null)      { /* only null */ }
if (value === undefined)  { /* only undefined */ }

// Truthy check (catches both + other falsy values)
if (!value)              { /* null, undefined, 0, "", false, NaN */ }

// Optional chaining (safe access)
let result = obj?.prop?.nested;  // returns undefined instead of throwing
```

---

## Key Takeaways

1. **`undefined`** is JavaScript's default "I don't know this value yet."
2. **`null`** is the developer's explicit "I know this value, and it's nothing."
3. Always use `===` (strict equality) to tell them apart.
4. Use `== null` only when you want to check for *both* `null` and `undefined` together.
5. Prefer `null` when you intentionally want to represent "no value" in your data.
