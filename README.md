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

### `04_chapter_Literal`
Literals in JavaScript — strings, numbers, booleans, null, undefined, and `typeof`.

| File | Topic |
|------|-------|
| [`07_Literal.js`](./04_chapter_Literal/07_Literal.js) | String, boolean, numeric, null, and undefined literals with `typeof` |
| [`08_null_undefined.js`](./04_chapter_Literal/08_null_undefined.js) | `null` vs `undefined` — meaning, who sets them, and `typeof` quirk |
| [`09_Null_IQ.js`](./04_chapter_Literal/09_Null_IQ.js) | Quick IQ test: explicit `null` assignment |
| [`10_Literal.js`](./04_chapter_Literal/10_Literal.js) | Numeric literals: decimal, hex, octal, scientific notation |
| [`11_Number.js`](./04_chapter_Literal/11_Number.js) | All number types: integer, binary, octal, hex, float, exponential |
| [`12_Number_Part2.js`](./04_chapter_Literal/12_Number_Part2.js) | Numeric separators (`_`), BigInt, Infinity, NaN |

### `05_chapter_Operator`
Operators in JavaScript — assignment, arithmetic, comparison, logical, ternary, type, increment/decrement, null coalescing, and coercion gotchas.

| File | Topic |
|------|-------|
| [`13_DataType.js`](./05_chapter_Operator/13_DataType.js) | JS data types overview |
| [`14_Assignment_Operator.js`](./05_chapter_Operator/14_Assignment_Operator.js) | `=`, `+=`, `-=`, `*=`, `/=`, `%=` |
| [`15_Arithmetic_Opeartor.js`](./05_chapter_Operator/15_Arithmetic_Opeartor.js) | `+`, `-`, `*`, `/`, `%`, `**` |
| [`16_Comparsion_Operator.js`](./05_chapter_Operator/16_Comparsion_Operator.js) | `==` vs `===`, `!=` vs `!==`, `>`, `<`, `>=`, `<=` |
| [`17_Logical_Operators.js`](./05_chapter_Operator/17_Logical_Operators.js) | `&&`, `\|\|`, `!` |
| [`18_Confusing_Comparsion.js`](./05_chapter_Operator/18_Confusing_Comparsion.js) | `==` coercion: `"" == 0`, `"0" == 0`, broken transitivity |
| [`18_Confusing_Comparsion_P2.js`](./05_chapter_Operator/18_Confusing_Comparsion_P2.js) | `null == undefined`, `null >= 0` coercion trap |
| [`20_Question.js`](./05_chapter_Operator/20_Question.js) | Loose vs strict equality practice (`!=` vs `!==`) |
| [`21_String_Op.js`](./05_chapter_Operator/21_String_Op.js) | String concatenation with `+` and `+=` |
| [`22_Ternary_Op.js`](./05_chapter_Operator/22_Ternary_Op.js) | Ternary operator: `condition ? value : value` |
| [`23_IQ.js`](./05_chapter_Operator/23_IQ.js) | Ternary IQ: status code pass/fail check |
| [`24_IQ2.js`](./05_chapter_Operator/24_IQ2.js) | Ternary IQ: environment-based base URL |
| [`25_IQ3.js`](./05_chapter_Operator/25_IQ3.js) | Ternary IQ: CI vs headed browser mode |
| [`26_IQ4.js`](./05_chapter_Operator/26_IQ4.js) | Ternary IQ: response time SLA check + template literal |
| [`27_IQ5.js`](./05_chapter_Operator/27_IQ5.js) | Ternary IQ: condition to boolean mapping |
| [`28_Nested_Terny_Op.js`](./05_chapter_Operator/28_Nested_Terny_Op.js) | Nested ternary: age → goa → drink logic |
| [`29_IQ_NT.js`](./05_chapter_Operator/29_IQ_NT.js) | Nested ternary IQ: HTTP status code categories |
| [`30_NT_IQ2.js`](./05_chapter_Operator/30_NT_IQ2.js) | Nested ternary IQ: temperature feel ladder |
| [`31_Type_Op.js`](./05_chapter_Operator/31_Type_Op.js) | `typeof` operator for all data types |
| [`32_In_De_Op.js`](./05_chapter_Operator/32_In_De_Op.js) | Pre/post increment (`++a`, `a++`) |
| [`33_Ad_Incre.js`](./05_chapter_Operator/33_Ad_Incre.js) | Advanced increment: `++a + a` |
| [`34_Incre_Part2.js`](./05_chapter_Operator/34_Incre_Part2.js) | Mixed pre/post increment: `++a + a++`, `i++ + ++i` |
| [`35_Decrement.js`](./05_chapter_Operator/35_Decrement.js) | Pre/post decrement (`--a`, `a--`) |
| [`36_Null_Coalescing.js`](./05_chapter_Operator/36_Null_Coalescing.js) | Nullish coalescing: `??` operator |

### `06_chapter_Statement`
Control flow statements in JavaScript — `if`, `else if`, `else`, and nested conditions.

| File | Topic |
|------|-------|
| [`37_IQ.js`](./06_chapter_Statement/37_IQ.js) | Basic `if-else` — age check |
| [`38_IQ2.js`](./06_chapter_Statement/38_IQ2.js) | Nested `if-else` — age + drinking eligibility |
| [`38_Multiple_Condition.js`](./06_chapter_Statement/38_Multiple_Condition.js) | `else if` ladder — grade calculator (A through F) |

### `00_chaptet_GENAI`
Supplementary reference content.

| File | Topic |
|------|-------|
| [`RICEPOT_SeleniumFramworkCreation.md`](./00_chaptet_GENAI/RICEPOT_SeleniumFramworkCreation.md) | Selenium framework creation notes |

---

## IQ_Notes

Concept breakdowns saved as comparison tables for quick reference.

| File | Topic |
|------|-------|
| [`SourceCode_ByteCode_Binary_IQ.md`](./IQ_Notes/SourceCode_ByteCode_Binary_IQ.md) | Source code vs bytecode vs binary code |
| [`Source_Code_ByteCODE_Binary_IQ.md`](./IQ_Notes/Source_Code_ByteCODE_Binary_IQ.md) | (Upstream variant) Source code vs bytecode vs binary code |
| [`01_Identifier_Rules.md`](./IQ_Notes/01_Identifier_Rules.md) | JS identifier rules reference |
| [`02_Keyword_Notes.md`](./IQ_Notes/02_Keyword_Notes.md) | JavaScript reserved keywords |
| [`03_commands_mac.md`](./IQ_Notes/03_commands_mac.md) | Mac terminal commands reference |
| [`03_commands_win.md`](./IQ_Notes/03_commands_win.md) | Windows terminal commands reference |
| [`README.md`](./IQ_Notes/README.md) | IQ_Notes index |
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
