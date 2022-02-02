# Vim
Vi/Vim is a powerful text editor. It's a command-line program that's usually installed everywhere, which makes it convenient for editing files on a remote machine.

Vim also has graphical versions, such as GVim and [MacVim](https://macvim-dev.github.io/macvim/). These provide additional features such as 24-bit color, menus, and popups.

## Philosophy of Vim
- When programming, you spend most of your time reading/editing, not writing
    - Vim is a **modal** editor: different modes for inserting text vs manipulating text
- Vim is programmable (with Vimscript and also other languages like Python)
- Vim's interface itself is like a programming language
    - Keystrokes (with mnemonic names) are commands
    - Commands are composable
- Don't use the mouse: too slow
- Editor should work at the speed you think

## Introductory Vim

### Modes
Vim shows the current mode in the bottom left.
- Normal mode: for moving around a file and making edits
    - Spend most of your time here
- Insert mode: for inserting text
- Visual (visual, line, or block) mode: for selecting blocks of text

You change modes by pressing `<ESC>` to switch from any mode back to normal mode. From normal mode, enter insert mode with `i`, visual mode with `v`, visual line mode with `V`, and visual block mode with `<C-v>`.

You use the `<ESC>` key a lot when using Vim: consider remapping Caps Lock to Escape.

### Basics
Vim ex commands are issued through `:{command}` in normal mode.
- `:q` quit (close window)
- `:w` save
- `:wq` save and quit
- `:e {name of file}` open file for editing
- `:ls` show open buffers
- `:help {topic}` open help
    - `:help :w` opens help for the `:w` ex command
    - `:help w` opens help for the `w` movement

### Movement
Vim is all about efficient movement. Navigate the file in Normal mode.
- Disable arrow keys to avoid bad habits
    ```vim
    nnoremap <Left> :echoe "Use h"<CR>
    nnoremap <Right> :echoe "Use l"<CR>
    nnoremap <Up> :echoe "Use k"<CR>
    nnoremap <Down> :echoe "Use j"<CR>
    ```
- Basic movement: `hjkl` (left, down, up, right)
- Words: `w` (next word), `b` (beginning of word), `e` (end of word)
- Lines: `0` (beginning of line), `^` (first non-blank character), `$` (end of line)
- Screen: `H` (top of screen), `M` (middle of screen), `L` (bottom of screen)
- File: `gg` (beginning of file), `G` (end of file)
- Line numbers: `:{number}<CR>` or `{number}G` (line {number})
- Misc: `%` (corresponding item)
- Find: `f{character}`, `t{character}`, `F{character}`, `T{character}`
    - find/to forward/backward {character} on the current line
- Repeating N times: `{number}{movement}`, e.g. `10j` moves down 10 lines
- Search: `/{regex}`, `n` / `N` for navigating matches

### Selection
Visual modes:
- Visual
- Visual Line
- Visual Block

Can use movement keys to make selection.

### Manipulating text
Everything that you used to do with the mouse, you now do with keyboards (and powerful, composable commands).  
- `i` enter insert mode
    - but for manipulating/deleting text, want to use something more than
    backspace
- `o` / `O` insert line below / above
- `d{motion}` delete {motion}
    - e.g. `dw` is delete word, `d$` is delete to end of line, `d0` is delete
    to beginning of line
- `c{motion}` change {motion}
    - e.g. `cw` is change word
    - like `d{motion}` followed by `i`
- `x` delete character (equal do `dl`)
- `s` substitute character (equal to `xi`)
- visual mode + manipulation
    - select text, `d` to delete it or `c` to change it
- `u` to undo, `<C-r` to redo
- Lots more to learn: e.g. `~` flips the case of a character

### Resources
- `vimtutor` command-line program to teach you vim
- [Vim Adventures](https://vim-adventures.com/) game to learn Vim

## Customizing Vim
Vim is customized through a plain-text configuration file in `~/.vimrc` (containing Vimscript commands). There are probably lots of basic settings that you want to turn on.  
Look at people's dotfiles on GitHub for inspiration, but try not to copy-and-paste people's full configuration. Read it, understand it, and take what you need.  
Some customizations to consider:
- Syntax highlighting: `syntax on`
- Color schemes
- Line numbers: `set nu` / `set rnu`
- Backspacing through everything: `set backspace=indent,eol,start`

## Advanced Vim
Here are a few examples to show you the power of the editor. We can't teach you all of these kinds of things, but you'll learn them as you go. A good heuristic: whenever you're using your editor and you think "there must be a better way of doing this", there probably is: look it up online.  

### Search and replace
`:s` (substitute) command ([documentation](http://vim.wikia.com/wiki/Search_and_replace)).

- `%s/foo/bar/g`
    - replace foo with bar globally in file
- `%s/\[.*\](\(.*\))/\1/g`
    - replace named Markdown links with plain URLs

### Multiple windows
- `sp` / `vsp` to split windows
- Can have multiple views of the same buffer.

### Mouse support
- `set mouse+=a`
    - can click, scroll select

### Macros
- `q{character}` to start recording a macro in register `{character}`
- `q` to stop recording
- `@{character}` replays the macro
- Macro execution stops on error
- `{number}@{character}` executes a macro {number} times
- Macros can be recursive
    - first clear the macro with `q{character}q`
    - record the macro, with `@{character}` to invoke the macro recursively
    (will be a no-op until recording is complete)
- Example: convert xml to json ([file](/2019/files/example-data.xml))
    - Array of objects with keys "name" / "email"
    - Use a Python program?
    - Use sed / regexes
        - `g/people/d`
        - `%s/<person>/{/g`
        - `%s/<name>\(.*\)<\/name>/"name": "\1",/g`
        - ...
    - Vim commands / macros
        - `Gdd`, `ggdd` delete first and last lines
        - Macro to format a single element (register `e`)
            - Go to line with `<name>`
            - `qe^r"f>s": "<ESC>f<C"<ESC>q`
        - Macro to format a person
            - Go to line with `<person>`
            - `qpS{<ESC>j@eA,<ESC>j@ejS},<ESC>q`
        - Macro to format a person and go to the next person
            - Go to line with `<person>`
            - `qq@pjq`
        - Execute macro until end of file
            - `999@q`
        - Manually remove last `,` and add `[` and `]` delimiters

## Extending Vim
There are tons of plugins for extending vim. First, get set up with a plugin manager like  
- [vim-plug](https://github.com/junegunn/vim-plug),
- [Vundle](https://github.com/VundleVim/Vundle.vim), or
- [pathogen.vim](https://github.com/tpope/vim-pathogen).

Some plugins to consider:
- [ctrlp.vim](https://github.com/kien/ctrlp.vim): fuzzy file finder
- [vim-fugitive](https://github.com/tpope/vim-fugitive): git integration
- [vim-surround](https://github.com/tpope/vim-surround): manipulating "surroundings"
- [gundo.vim](https://github.com/sjl/gundo.vim): navigate undo tree
- [nerdtree](https://github.com/scrooloose/nerdtree): file explorer
- [syntastic](https://github.com/vim-syntastic/syntastic): syntax checking
- [vim-easymotion](https://github.com/easymotion/vim-easymotion): magic motions
- [vim-over](https://github.com/osyo-manga/vim-over): substitute preview

Lists of plugins:
- [Vim Awesome](https://vimawesome.com/)

## Vim-mode in Other Programs
For many popular editors (e.g. vim and emacs), many other tools support editor emulation.

- Shell
    - bash: `set -o vi`
    - zsh: `bindkey -v`
    - `export EDITOR=vim` (environment variable used by programs like `git`)
- `~/.inputrc`
    - `set editing-mode vi`

There are even vim keybinding extensions for web [browsers](http://vim.wikia.com/wiki/Vim_key_bindings_for_web_browsers), some popular ones are [Vimium](https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb?hl=en) for Google Chrome and [Tridactyl](https://github.com/tridactyl/tridactyl) for Firefox.

## Resources
- [Vim Tips Wiki](http://vim.wikia.com/wiki/Vim_Tips_Wiki)
- [Vim Advent Calendar](https://vimways.org/2018/): various Vim tips
- [Neovim](https://neovim.io/) is a modern vim reimplementation with more active development.
- [Vim Golf](http://www.vimgolf.com/): Various Vim challenges

