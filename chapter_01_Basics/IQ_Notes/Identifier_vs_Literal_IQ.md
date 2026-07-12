# Identifier vs Literal in JavaScript

---

## Comparison Table

| Aspect | Identifier | Literal |
|--------|-----------|---------|
| **What is it?** | A name given to a variable, function, class, or property | A fixed value written directly in the source code |
| **Purpose** | To **name** something so you can refer to it later | To **represent** a concrete value |
| **Can it change?** | ✅ Yes — the binding can be reassigned (unless `const`) | ❌ No — literals are fixed, immutable values |
| **Examples from code** | `userName`, `totalPrice`, `MAX_SIZE`, `Person` | `"starts with letter"`, `99.99`, `true`, `100` |
| **Who writes it?** | The developer (you choose the name) | The developer (you write the value directly) |
| **Where does it live?** | In the identifier table / scope of the runtime | In the source text itself (sometimes interned at runtime) |
| **Rules / constraints** | Must follow identifier rules (see below) | No naming rules — just syntax rules per type |

---

## Identifier Rules (Recap)

An identifier **must**:
- Start with a letter (`a-z`, `A-Z`), underscore (`_`), or dollar sign (`$`)
- Subsequent characters can include digits (`0-9`)
- Can include Unicode letters (e.g., `é`, `变量`)
- Cannot be a **reserved keyword** (`class`, `const`, `function`, `let`, `var`, etc.)

| ✅ Valid | ❌ Invalid |
|----------|-----------|
| `userName` | `1stPlace` (starts with digit) |
| `$jquery` | `my-name` (hyphen `-` not allowed) |
| `_private` | `my name` (space not allowed) |
| `变量` | `class` (reserved keyword) |
| `MAX_SIZE` | `my@name` (`@` not allowed) |

---

## Literal Types in JavaScript

| Literal Type | Example(s) | Notes |
|-------------|-----------|-------|
| **String literal** | `"hello"`, `'hello'`, `` `hello` `` | Double quotes, single quotes, or backticks (template literal) |
| **Numeric literal** | `10`, `99.99`, `0xFF`, `1e3` | Integers, decimals, hex, scientific notation |
| **Boolean literal** | `true`, `false` | Only two possible values |
| **Null literal** | `null` | Represents "no value" intentionally |
| **Undefined literal** | `undefined` | Default value of uninitialized variables |
| **BigInt literal** | `100n`, `0x10n` | `n` suffix for integers beyond `Number.MAX_SAFE_INTEGER` |
| **Object literal** | `{}`, `{ key: "value" }` | Curly braces with key-value pairs |
| **Array literal** | `[]`, `[1, 2, 3]` | Square brackets with comma-separated values |
| **RegExp literal** | `/pattern/g` | Forward slashes delimit the pattern |

---

## Side-by-Side: Identifiers vs Literals in Real Code

```javascript
let   userName    =    "Pramod"   ;
^         ^                ^
keyword  identifier       string literal

const  MAX_SIZE   =    100       ;
^        ^               ^
keyword identifier      numeric literal

let    isLoggedIn =    true      ;
^          ^              ^
keyword  identifier     boolean literal
```

> The **identifier** is the name on the left of the `=`.  
> The **literal** is the raw value on the right.

---

## Key Insight

> **Identifiers name things. Literals are things.**

- You assign a **literal** to an **identifier**:  
  `let age = 25;` → `age` is the identifier, `25` is the literal.
- A literal cannot appear on the left side of an assignment:  
  `25 = age;` → ❌ `SyntaxError: Invalid assignment left-hand side`
- An identifier can appear on either side:  
  `let x = y;` → valid (both sides are identifiers once `y` is defined)
