# BASH Terminal

Commands will often return output using `STDOUT`, errors through `STDERR`, and a Return Code to report errors in a more script-friendly manner.  
The return code or exit status is the way scripts/commands have to communicate how execution went.  
A value of 0 usually means everything went OK; anything different from 0 means an error occurred.  

Exit codes can be used to conditionally execute commands using `&&` (and operator) and `||` (or operator), both of which are [short-circuiting](https://en.wikipedia.org/wiki/Short-circuit_evaluation) operators. Commands can also be separated within the same line using a semicolon `;`.  

The `true` program will always have a 0 return code and the `false` command will always have a 1 return code.  

```bash
false || echo "Oops, fail"
# Oops, fail

true || echo "Will not be printed"
#

true && echo "Things went well"
# Things went well

false && echo "Will not be printed"
#

true ; echo "This will always run"
# This will always run

false ; echo "This will always run"
# This will always run
```

## Aliases
1. Create an alias `dc` that resolves to `cd` for when you type it wrongly.
2.  Run `history | awk '{$1="";print substr($0,2)}' | sort | uniq -c | sort -n | tail -n 10`  to get your top 10 most used commands and consider writing shorter aliases for them. Note: this works for Bash; if you're using ZSH, use `history 1` instead of just `history`.

## Arguments
BASH uses a variety of special variables to refer to arguments, error codes, and other relevant variables. Below is a list of some of them. A more comprehensive list can be found [here](https://tldp.org/LDP/abs/html/special-chars.html).  
- `$0` - Name of the script  
- `$1` to `$9` - Arguments to the script. `$1` is the first argument and so on.  
- `$@` - All the arguments  
- `$#` - Number of arguments  
- `$?` - Return code of the previous command  
- `$$` - Process identification number (PID) for the current script  
- `!!` - Entire last command, including arguments. A common pattern is to execute a command only for it to fail due to missing permissions; you can quickly re-execute the command with sudo by doing `sudo !!`  
- `$_` - Last argument from the last command. If you are in an interactive shell, you can also quickly get this value by typing `Esc` followed by `.` or `Alt+.`  

