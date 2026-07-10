# Source Code vs Bytecode vs Binary Code

**Example File:** `01_HelloWorld.js`

```javascript
console.log("Hello The Testing Academy!");
```

---

## Comparison Table

| Aspect | Source Code | Bytecode | Binary Code (Machine Code) |
|--------|-------------|----------|----------------------------|
| **What is it?** | Human-readable instructions written in a programming language | Intermediate representation between source code and machine code | Raw instructions the CPU executes directly (0s and 1s) |
| **Example (for our file)** | `console.log("Hello The Testing Academy!");` | V8 Ignition bytecode like: `LdaSmi [0]`, `CallNoFeedback [0]` | `10110000 01000001 11110000 ...` (hex: `B0 41 F0 ...`) |
| **Readable by humans?** | ✅ Yes — plain English-like syntax | ❌ No — low-level opcodes and operands | ❌ No — raw bits/hex |
| **Readable by CPU?** | ❌ No | ❌ No | ✅ Yes |
| **Readable by a Virtual Machine (VM)?** | ❌ No (needs compilation first) | ✅ Yes (e.g., JVM, V8, CLR) | ✅ Yes (directly) |
| **Target audience** | Developers / humans | Virtual Machines / Runtimes | CPU hardware |
| **How is it produced?** | Written manually in a text editor | Compiled from source code by a compiler (e.g., `javac`, V8 Ignition, Python `compile()`) | Assembled/linked from assembly or bytecode by an assembler/JIT compiler |
| **How is it executed?** | Interpreted or compiled by an engine | Interpreted by a VM or JIT-compiled to native code | Executed directly on the CPU |
| **Portability** | ✅ Highly portable — same source runs anywhere the runtime exists | ✅ Portable — runs on any platform with the right VM | ❌ Not portable — tied to a specific CPU architecture (x86, ARM, etc.) |
| **Performance** | Slowest (needs parsing/compilation each run) | Faster than source; slower than native (VM overhead) | Fastest — direct hardware execution |
| **Examples** | `01_HelloWorld.js`, `main.py`, `index.ts` | `.class` (Java), `.pyc` (Python), V8 Ignition bytecode, CIL (C#) | `.exe`, `.dll`, `.so`, `.o`, `.elf` |
| **Tooling examples** | VS Code, Notepad++, WebStorm | `javac`, V8 (Ignition), Python `compile()`, `dotnet build` | GCC, Clang, MSVC, NASM, Rust `rustc` |
| **Can you reverse-engineer it?** | ✅ Trivially — it's the original code | ⚠️ Partially — decompilers can recover approximate source | ❌ Harder — decompilers produce assembly, not original high-level code |
| **Size on disk** | Small (1 line = ~48 bytes) | Medium (V8 bytecode ≈ 100–200 bytes for this line) | Larger (compiled executable ≈ several KB to MB) |

---

## Visual Flow: From Source → Execution (V8 Engine)

```
┌──────────────────────────────┐
│  Source Code (.js)           │
│  console.log("Hello...");    │  ← You write this
└──────────┬───────────────────┘
           │ Parser
           ▼
┌──────────────────────────────┐
│  AST (Abstract Syntax Tree)  │  ← Structural representation
└──────────┬───────────────────┘
           │ V8 Ignition (Interpreter)
           ▼
┌──────────────────────────────┐
│  Bytecode                    │  ← Intermediate form
│  LdaSmi [0]                  │
│  CallNoFeedback [0]          │
└──────────┬───────────────────┘
           │ V8 TurboFan (JIT Compiler)
           ▼
┌──────────────────────────────┐
│  Binary Code (Machine Code)  │  ← CPU executes this
│  48 65 6C 6C 6F ...          │
└──────────────────────────────┘
```

> **Note:** V8 (Node.js / Chrome) does **not** produce a separate `.bytecode` or `.exe` file on disk (unless explicitly dumped). The bytecode and machine code live **in memory** at runtime.

---

## Key Takeaways

1. **Source code** is what you write — it's for humans.
2. **Bytecode** is an intermediate step — it's for the virtual machine (interpreter/JIT).
3. **Binary code** is what the CPU actually runs — it's for the hardware.
4. A single line of JavaScript goes through **all three stages** every time you run it.
