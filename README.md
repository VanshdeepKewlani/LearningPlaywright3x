# Learning Playwright 3x

A structured journey through Playwright automation, starting from JavaScript fundamentals and building up to Playwright-specific concepts.

---

## Chapters

### `chapter_01_Basics`
JavaScript basics — variables, logging, and foundational syntax.

| File | Topic |
|------|-------|
| [`01_HelloWorld.js`](./chapter_01_Basics/01_HelloWorld.js) | First script: `console.log` |
| [`02_let_concept.js`](./chapter_01_Basics/02_let_concept.js) | `let` variable declaration and `console.log` |

### `chapter_02_JS_Concepts`
_(Coming soon — reserved for core JavaScript concepts.)_

### `03_chapter_identifier`
Identifier rules, naming conventions, and comment syntax in JavaScript.

| File | Topic |
|------|-------|
| [`03_identifier_Rules.js`](./03_chapter_identifier/03_identifier_Rules.js) | Valid vs invalid identifiers with `var` — letters, `$`, `_`, digits |
| [`04_Identifer_Rules_Part2.js`](./03_chapter_identifier/04_Identifer_Rules_Part2.js) | Naming conventions: camelCase, PascalCase, snake_case, SCREAMING_SNAKE_CASE, Hungarian Notation |
| [`05_Comments.js`](./03_chapter_identifier/05_Comments.js) | Single-line, multi-line, and JSDoc comment syntax |
| [`06_Identifier_IQ.js`](./03_chapter_identifier/06_Identifier_IQ.js) | Identifier rules recap + Unicode identifiers (`café`, `变量`) + naming conventions |

### `05_chapter_Operator`
Operators in JavaScript — assignment, arithmetic, comparison, logical, and type coercion gotchas.

| File | Topic |
|------|-------|
| [`13_DataType.js`](./05_chapter_Operator/13_DataType.js) | JS data types overview: string, number, boolean, bigint, undefined, null, Symbol, array, NaN |
| [`14_Assignment_Operator.js`](./05_chapter_Operator/14_Assignment_Operator.js) | `=`, `+=`, `-=`, `*=`, `/=`, `%=` assignment operators |
| [`15_Arithmetic_Opeartor.js`](./05_chapter_Operator/15_Arithmetic_Opeartor.js) | `+`, `-`, `*`, `/`, `%` (modulus), `**` (exponent) |
| [`16_Comparsion_Operator.js`](./05_chapter_Operator/16_Comparsion_Operator.js) | `==` vs `===`, `!=` vs `!==`, `>`, `<`, `>=`, `<=` |
| [`17_Logical_Operators.js`](./05_chapter_Operator/17_Logical_Operators.js) | `&&` (AND), `\|\|` (OR), `!` (NOT) |
| [`18_Confusing_Comparsion.js`](./05_chapter_Operator/18_Confusing_Comparsion.js) | `==` coercion gotchas: `"" == 0`, `"0" == 0`, and broken transitivity |
| [`18_Confusing_Comparsion_P2.js`](./05_chapter_Operator/18_Confusing_Comparsion_P2.js) | `null == undefined`, `null >= 0` coercion trap |

---

## IQ_Notes

Concept breakdowns saved as comparison tables for quick reference.

| File | Topic |
|------|-------|
| [`SourceCode_ByteCode_Binary_IQ.md`](./IQ_Notes/SourceCode_ByteCode_Binary_IQ.md) | Source code vs bytecode vs binary code |
| [`Identifier_vs_Literal_IQ.md`](./chapter_01_Basics/IQ_Notes/Identifier_vs_Literal_IQ.md) | Identifier vs literal in JavaScript |
| [`Null_vs_Undefined_IQ.md`](./chapter_01_Basics/IQ_Notes/Null_vs_Undefined_IQ.md) | Null vs undefined in JavaScript |

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/VanshdeepKewlani/LearningPlaywright3x.git

# Navigate to a chapter and run any script with Node
node chapter_01_Basics/01_HelloWorld.js
```
