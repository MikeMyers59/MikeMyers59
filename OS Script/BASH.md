# BASH

## Aliases & Functions

As you can imagine it can become tiresome typing long commands that involve many flags or verbose options. Nevertheless, most shells support **aliasing**. For instance, an alias in bash has the following structure (note there is no space around the `=` sign):

```bash
alias alias_name="command_to_alias"
```

<!-- We can alias common flags for our commands like `alias ll=ls -ltAh`. Alias can be composed  -->

Alias have many convenient features

```bash
# Alias can summarize good default flags
alias ll="ls -lh"

# Save a lot of typing for common commands
alias gc="git commit"

# Alias can overwrite existing commands
alias mv="mv -i"
alias mkdir="mkdir -p"

# Alias can be composed
alias la="ls -A"
alias lla="la -l"

# To ignore an alias run it prepended with \
\ls
# Or can be disabled using unalias
unalias la

```
<!--
To get rid of an alias you can run `unalias alias_name` or to ignore alias when running a command you can prepend the command with a backward slash `\alias_name`. This is convenient when an alias is overwriting an existing name. -->


However in many scenarios aliases can be limiting, specially when you are trying to write chain commands together that take the same arguments. An alternative exists which is **functions** which are a midpoint between aliases and custom shell scripts.

Here is an example function that makes a directory and move into it.

```bash
mcd () {
    mkdir -p $1
    cd $1
}
```

Alias and functions will not persist shell sessions by default. To make an alias persistent you need to include it a one the shell startup script files like `.bashrc` or `.zshrc`. My suggestion is to write them separately in a `.alias` and `source` that file from your different shell config files.

<!-- Lastly, if you decide to alias any of these tools with the "improved" version, e.g. `alias bat=cat` it is useful to know that you can tell bash to ignore aliases by doing `\cat` and ignore both aliases and functions by doing `command cat` -->

## Shells & Frameworks

During shell and scripting we covered the `bash` shell since it is by far the most ubiquitous shell and most systems have it as the default option. Nevertheless, it is not the only option.

For example the `zsh` shell is a superset of `bash` and provides many convenient features out of the box such as:

- Smarter globbing, `**`
- Inline globbing/wildcard expansion
- Spelling correction
- Better tab completion/selection
- Path expansion (`cd /u/lo/b` will expand as `/usr/local/bin`)

Moreover many shells can be improved with **frameworks**, some popular general frameworks like [prezto](https://github.com/sorin-ionescu/prezto) or [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh), and smaller ones that focus on specific features like for example [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting) or [zsh-history-substring-search](https://github.com/zsh-users/zsh-history-substring-search). Other shells like [fish](https://fishshell.com/) include a lot of these user-friendly features by default. Some of these features include:

- Right prompt
- Command syntax highlighting
- History substring search
- manpage based flag completions
- Smarter autocompletion
- Prompt themes

One thing to note when using these frameworks is that if the code they run is not properly optimized or it is too much code, your shell can start slowing down. You can always profile it and disable the features that you do not use often or value over speed.

## Terminal Emulators & Multiplexers

Along with customizing your shell it is worth spending some time figuring out your choice of **terminal emulator** and its settings. There are many many terminal emulators out there (here is a [comparison](https://anarc.at/blog/2018-04-12-terminal-emulators-1/)).

Since you might be spending hundreds to thousands of hours in your terminal it pays off to look into its settings. Some of the aspects that you may want to modify in your terminal include:

- Font choice
- Color Scheme
- Keyboard shortcuts
- Tab/Pane support
- Scrollback configuration
- Performance (some newer terminals like [Alacritty](https://github.com/jwilm/alacritty) offer GPU acceleration)

It is also worth mentioning **terminal multiplexers** like [tmux](https://github.com/tmux/tmux). `tmux` allows you to pane and tab multiple shell sessions. It also supports attaching and detaching which is a very common use-case when you are working on a remote server and want to keep you shell running without having to worry about disowning you current processes (by default when you log out your processes are terminated).  This way, with `tmux` you can jump into and out of complex terminal layouts. Similar to terminal emulators `tmux` supports heavy customization by editing the `~/.tmux.conf` file.


## Command-line utilities

The command line utilities that most UNIX based operating systems have by default are more than enough to do 99% of the stuff you usually need to do.


In the next few subsections I will cover alternative tools for extremely common shell operations which are more convenient to use. Some of these tools add new improved functionality to the command whereas others just focus on providing a simpler, more intuitive interface with better defaults.

### `fasd` vs `cd`

Even with improved path expansion and tab autocomplete, changing directories can become quite repetitive. [Fasd](https://github.com/clvv/fasd) (or [autojump](https://github.com/wting/autojump)) solves this issue by keeping track of recent and frequent folders you have been to and performing fuzzy matching.

Thus if I have visited the path `/home/user/awesome_project/code` running `z code` will `cd` to it. If I have multiple folders called code I can disambiguate by running `z awe code` which will be closer match. Unlike autojump,  fasd also provides commands that instead of performing `cd` just expand frequent and /or recent files,folders or both.


### `bat` vs `cat`

Even though `cat` does it job perfectly, [bat](https://github.com/sharkdp/bat) improves it by providing syntax highlighting, paging, line numbers and git integration.


### `exa`/`ranger` vs `ls`

`ls` is a great command but some of the defaults can be annoying such as displaying the size in raw bytes. [exa](https://github.com/ogham/exa) provides better defaults

If you are in need of navigating many folders and/or previewing many files, [ranger](https://github.com/ranger/ranger) can be much more efficient than `cd` and `cat` due to its wonderful interface. It is quite customizable and with a correct setup you can even [preview images](https://github.com/ranger/ranger/wiki/Image-Previews) in your terminal

### `fd` vs `find`

[fd](https://github.com/sharkdp/fd) is a simple, fast and user-friendly alternative to `find`. `find` defaults like having to use the `--name` flag (which is what you want to do 99% of the time) make it easier to use in an every day basis. It is also `git` aware and will skip files in your `.gitignore` and `.git` folder by default. It also has nice color coding by default.

### `rg/fzf` vs `grep`

`grep` is a great tool but if you want to grep through many files at once, there are better tools for that purpose. [ack](https://beyondgrep.com/), [ag](https://github.com/ggreer/the_silver_searcher) & [rg](https://github.com/BurntSushi/ripgrep) recursively search your current directory for a regex pattern while respecting your gitignore rules. They all work pretty similar but I favor `rg` due to how fast it can search my entire home directory.

Similarly, it can be easy to find yourself doing `CMD | grep PATTERN` over an over again. [fzf](https://github.com/junegunn/fzf) is a command line fuzzy finder that enables you to interactively filter the output of pretty much any command.

### `rsync` vs `cp/scp`

Whereas `mv` and `scp` are perfect for most scenarios, when copying/moving around large amounts of files, large files or when some of the data is already on the destination `rsync` is a huge improvement. `rsync` will skip files that have already been transferred and with the `--partial` flag it can resume from a previously interrupted copy.

### `trash` vs `rm`

`rm` is a dangerous command in the sense that once you delete a file there is no turning back. However, modern OS do not behave like that when you delete something in the file explorer, they just move it to the Trash folder which is cleared periodically.

Since how the trash is managed varies from OS to OS there is not a single CLI utility. In macOS there is [trash](https://hasseg.org/trash/) and in linux there is [trash-cli](https://github.com/andreafrancia/trash-cli/) among others.

### `mosh` vs `ssh`

`ssh ` is a very handy tool but if you have a slow connection, the lag can become annoying and if the connection interrupts you have to reconnect. [mosh](https://mosh.org/) is a handy tool that works allows roaming, supports intermittent connectivity, and provides intelligent local echo.

### `tldr` vs `man`

You can figure out what a commands does and what options it has using `man` and the `-h`/'--help' flag most of the time. However, in some cases it can be a bit daunting navigating these if they are detailed

The [tldr](https://github.com/tldr-pages/tldr) command is a community driven documentation system that's available from the command line and gives a few simple illustrative examples of what the command does and the most common argument options.


### `aunpack` vs `tar/unzip/unrar`

As [this xkcd](https://xkcd.com/1168/) references, it can be quite tricky to remember the options for `tar` and sometimes you need a different tool altogether such as `unrar` for .rar files.
The [atool](https://www.nongnu.org/atool/) package provides the `aunpack` command which will figure out the correct options and always put the extracted archives in a new folder.


## Exercises

1. Run `cat .bash_history | sort | uniq -c | sort -rn | head -n 10` (or `cat .zhistory | sort | uniq -c | sort -rn | head -n 10` for zsh)  to get top 10 most used commands and consider writing shorter aliases for them
1. Choose a terminal emulator and figure out how to change the following properties:
    - Font choice
    - Color scheme. How many colors does a standard scheme have? why?
    - Scrollback history size

1. Install `fasd` or some similar software and write a bash/zsh function called `v` that performs fuzzy matching on the passed arguments and opens up the top result in your editor of choice. Then, modify it so that if there are multiple matches you can select them with `fzf`.
1. Since `fzf` is quite convenient for performing fuzzy searches and the shell history is quite prone to those kind of searches, investigate how to bind `fzf` to `^R`. You can find some info [here](https://github.com/junegunn/fzf/wiki/Configuring-shell-key-bindings)
1. What does the `--bar` option do in `ack`?

## Working with the shell

Run a command a bunch of times:

```bash
for i in $(seq 1 5); do echo hello; done
```

There's a lot to unpack:

 - `for x in list; do BODY; done`
   - `;` terminates a command -- equivalent to newline
   - split `list`, assign each to `x`, and run body
   - splitting is "whitespace splitting", which we'll get back to
   - no curly braces in shell, so `do` + `done`
 - `$(seq 1 5)`
   - run the program `seq` with arguments `1` and `5`
   - substitute entire `$()` with the output of that program
   - equivalent to
     ```bash
     for i in 1 2 3 4 5
     ```
 - `echo hello`
   - everything in a shell script is a command
   - in this case, run the `echo` command, which prints its arguments
     with the argument `hello`.
   - all commands are searched for in `$PATH` (colon-separated)

We have variables:
```bash
for f in $(ls); do echo $f; done
```

Will print each file name in the current directory.
Can also set variables using `=` (no space!):

```bash
foo=bar
echo $foo
```

There are a bunch of "special" variables too:

 - `$1` to `$9`: arguments to the script
 - `$0` name of the script itself
 - `$#` number of arguments
 - `$$` process ID of current shell

To only print directories

```bash
for f in $(ls); do if test -d $f; then echo dir $f; fi; done
```

More to unpack here:

 - `if CONDITION; then BODY; fi`
   - `CONDITION` is a command; if it returns with exit status 0
     (success), then `BODY` is run.
   - can also hook in an `else` or `elif`
   - again, no curly braces, so `then` + `fi`
 - `test` is another program that provides various checks and
   comparisons, and exits with 0 if they're true (`$?`)
   - `man COMMAND` is your friend: `man test`
   - can also be invoked with `[` + `]`: `[ -d $f ]`
     - take a look at `man test` and `which "["`

But wait! This is wrong! What if a file is called "My Documents"?

 - `for f in $(ls)` expands to `for f in My Documents`
 - first do the test on `My`, then on `Documents`
 - not what we wanted!
 - biggest source of bugs in shell scripts

## Argument splitting

Bash splits arguments by whitespace; not always what you want!

 - need to use quoting to handle spaces in arguments
   `for f in "My Documents"` would work correctly
 - same problem somewhere else -- do you see where?
   `test -d $f`: if `$f` contains whitespace, `test` will error!
 - `echo` happens to be okay, because split + join by space
   but what if a filename contains a newline?! turns into space!
 - quote all use of variables that you don't want split
 - but how do we fix our script above?
   what does `for f in "$(ls)"` do do you think?

Globbing is the answer!

 - bash knows how to look for files using patterns:
   - `*` any string of characters
   - `?` any single character
   - `{a,b,c}` any of these characters
 - `for f in *`: all files in this directory
 - when globbing, each matching file becomes its own argument
   - still need to make sure to quote when _using_: `test -d "$f"`
 - can make advanced patterns:
   - `for f in a*`: all files starting with `a` in the current directory
   - `for f in foo/*.txt`: all `.txt` files in `foo`
   - `for f in foo/*/p??.txt`
     all three-letter text files starting with p in subdirs of `foo`

Whitespace issues don't stop there:

 - `if [ $foo = "bar" ]; then` -- see the issue?
 - what if `$foo` is empty? arguments to `[` are `=` and `bar`...
 - _can_ work around this with `[ x$foo = "xbar" ]`, but bleh
 - instead, use `[[`: bash built-in comparator that has special parsing
   - also allows `&&` instead of `-a`, `||` over `-o`, etc.

<!-- TODO: arrays? $@. ${array[@]} vs "${array[@]}". -->

## Composability

Shell is powerful in part because of composability. Can chain multiple
programs together rather than have one program that does everything.

The key character is `|` (pipe).

 - `a | b` means run both `a` and `b`
   send all output of `a` as input to `b`
   print the output of `b`

All programs you launch ("processes") have three "streams":

 - `STDIN`: when the program reads input, it comes from here
 - `STDOUT`: when the program prints something, it goes here
 - `STDERR`: a 2nd output the program can choose to use
 - by default, `STDIN` is your keyboard, `STDOUT` and `STDERR` are both
   your terminal. but you can change that!
   - `a | b` makes `STDOUT` of `a` `STDIN` of `b`.
   - also have:
     - `a > foo` (`STDOUT` of `a` goes to the file `foo`)
     - `a 2> foo` (`STDERR` of `a` goes to the file `foo`)
     - `a < foo` (`STDIN` of `a` is read from the file `foo`)
     - hint: `tail -f` will print a file as it's being written
 - why is this useful? lets you manipulate output of a program!
   - `ls | grep foo`: all files that contain the word `foo`
   - `ps | grep foo`: all processes that contain the word `foo`
   - `journalctl | grep -i intel | tail -n5`:
     last 5 system log messages with the word intel (case insensitive)
   - `who | sendmail -t me@example.com`
     send the list of logged-in users to `me@example.com`
   - forms the basis for much data-wrangling, as we'll cover later

Bash also provides a number of other ways to compose programs.

You can group commands with `(a; b) | tac`: run `a`, then `b`, and send
all their output to `tac`, which prints its input in reverse order.

A lesser-known, but super useful one is _process substitution_.
`b <(a)` will run `a`, generate a temporary file-name for its output
stream, and pass that file-name to `b`. For example:

```bash
diff <(journalctl -b -1 | head -n20) <(journalctl -b -2 | head -n20)
```
will show you the difference between the first 20 lines of the last boot
log and the one before that.

<!-- TODO: exit codes? -->

## Job and process control

What if you want to run longer-term things in the background?

 - the `&` suffix runs a program "in the background"
   - it will give you back your prompt immediately
   - handy if you want to run two programs at the same time
     like a server and client: `server & client`
   - note that the running program still has your terminal as `STDOUT`!
     try: `server > server.log & client`
 - see all such processes with `jobs`
   - notice that it shows "Running"
 - bring it to the foreground with `fg %JOB` (no argument is latest)
 - if you want to background the current program: `^Z` + `bg` (Here `^Z` means pressing `Ctrl+Z`)
   - `^Z` stops the current process and makes it a "job"
   - `bg` runs the last job in the background (as if you did `&`)
 - background jobs are still tied to your current session, and exit if
   you log out. `disown` lets you sever that connection. or use `nohup`.
 - `$!` is pid of last background process

<!-- TODO: process output control (^S and ^Q)? -->

What about other stuff running on your computer?

 - `ps` is your friend: lists running processes
   - `ps -A`: print processes from all users (also `ps ax`)
   - `ps` has *many* arguments: see `man ps`
 - `pgrep`: find processes by searching (like `ps -A | grep`)
   - `pgrep -af`: search and display with arguments
 - `kill`: send a _signal_ to a process by ID (`pkill` by search + `-f`)
   - signals tell a process to "do something"
   - most common: `SIGKILL` (`-9` or `-KILL`): tell it to exit *now*
     equivalent to `^\`
   - also `SIGTERM` (`-15` or `-TERM`): tell it to exit gracefully
     equivalent to `^C`


## Flags

Most command line utilities take parameters using **flags**. Flags usually come in short form (`-h`) and long form (`--help`). Usually running `CMD -h` or `man CMD` will give you a list of the flags the program takes.
Short flags can usually be combined, running `rm -r -f` is equivalent to running `rm -rf` or `rm -fr`.
Some common flags are a de facto standard and you will seem them in many applications:

* `-a` commonly refers to all files (i.e. also including those that start with a period)
* `-f` usually refers to forcing something, like `rm -f`
* `-h` displays the help for most commands
* `-v` usually enables a verbose output
* `-V` usually prints the version of the command

Also, a double dash `--` is used in built-in commands and many other commands to signify the end of command options, after which only positional parameters are accepted. So if you have a file called `-v` (which you can) and want to grep it `grep pattern -- -v` will work whereas `grep pattern -v` won't. In fact, one way to create such file is to do `touch -- -v`.

.