# Debugging

When printf-debugging isn't good enough: use a debugger.

Debuggers let you interact with the execution of a program, letting you do
things like:

- halt execution of the program when it reaches a certain line
- single-step through the program
- inspect values of variables
- many more advanced features

## GDB/LLDB

[GDB](https://www.gnu.org/software/gdb/) and [LLDB](https://lldb.llvm.org/).
Supports many C-like languages.

Let's look at [example.c](/2019/files/example.c). Compile with debug flags:
`gcc -g -o example example.c`.

Open GDB:

`gdb example`

Some commands:

- `run`
- `b {name of function}` - set a breakpoint
- `b {file}:{line}` - set a breakpoint
- `c` - continue
- `step` / `next` / `finish` - step in / step over / step out
- `p {variable}` - print value of variable
- `watch {expression}` - set a watchpoint that triggers when the value of the expression changes
- `rwatch {expression}` - set a watchpoint that triggers when the value is read
- `layout`

