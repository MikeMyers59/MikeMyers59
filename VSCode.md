# VSCode: Visual Studio Code

## Common Extensions  

- [Extensions for the Visual Studio](https://marketplace.visualstudio.com/)  
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)  
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)  
- [Markdown Lint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)  
- [Markdown Shortcuts](https://marketplace.visualstudio.com/items?itemName=mdickin.markdown-shortcuts)  
- [Prettier Standard](https://marketplace.visualstudio.com/items?itemName=numso.prettier-standard-vscode)  
- [Rainbow Brackets](https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets)  
- [Rainbow Highlighter](https://marketplace.visualstudio.com/items?itemName=cobaltblu27.rainbow-highlighter)  

## Configuration: `.vscodeignore`, `/.vscode/settings.json`, & `/.vscode/extensions.json`

#### extensions.json
```json
{
  "recommendations": [
    "christian-kohler.path-intellisense",
    "editorconfig.editorconfig",
    "formulahendry.auto-rename-tag",
    "pkief.material-icon-theme",
    "eg2.vscode-npm-script",
    "felixfbecker.php-pack",
    "esbenp.prettier-vscode",
    "stylelint.vscode-stylelint",
    "ecmel.vscode-html-css"
  ]
}
```

#### settings.json
```json
{
  // Switched off, because you need to learn JavaScript
  // "javascript.format.enable": false,
  "css.validate": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnPaste": { *false* | true },
  "editor.formatOnSave":  { *false* | true },
  "editor.insertSpaces":  { *false* | true },
  "editor.wordWrap": "on",
  "editor.tabSize": 2,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue"
  ]
  "files.autoSave": "onFocusChange",
  "files.associations": {
    "*.inc": "html"
  }
  "html.format.wrapLineLength": 0,
  "less.validate": false,
  "prettier-config.tip":  { false | *true* },
  "prettier.enable": { false | *true* },
  "scss.validate": { false | *true* },
  "stylelint.enable": { false | *true* }
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
    "editor.formatOnSave": true
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "window.zoomLevel": 0,
  "editor.autoIndent": true,
  "workbench.colorTheme": "Solarized Light",
  "editor.fontFamily": "Fira Code",
  "editor.fontSize": 14,
  "editor.fontLigatures": true,
  "terminal.integrated.fontFamily": "Fira Code",
  "terminal.integrated.fontSize": 12,
  "terminal.integrated.fontLigatures": true,  
  "macros": {
    "execCurLn": [
      "expandLineSelection",
      "workbench.action.terminal.runSelectedText",
      "cancelSelection"
    ]
  }
}
```

### VSCode Ignore
```
.vscode/**
.vscode-test/**
test/**
.gitignore
.yarnrc
vsc-extension-quickstart.md
**/jsconfig.json
**/*.map
**/.eslintrc.json
.editorconfig
*.vsix

.prettierignore
.prettierrc.js
```

## Keyboard Shortcuts

- [Keyboard shortcuts (Windows)](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)

| Action | Shortcut |  
| --- | --- | 
| Switch Panel Menu | `CTRL + Q` |  
| Close Window | `CTRL + W` |  
| Switch Window Menu | `CTRL + TAB` |  
| Show all commands | `CTRL + SHIFT + P` | 
| Open folder | `CTRL + K, CTRL + O` | 
| Toggle terminal | `CTRL + \`` | 
| Preview Markdown | `CTRL + SHIFT + V` | 
| Open keyboard shortcuts | `CTRL + K, CTRL + S` | 
| Switch groups (also `Ctl + 1`, `Ctl + 2`, etc.) | `CTRL + K, CTRL + LEFT/RIGHT ARROW` | 
| Merge file group | `CTRL + SHIFT + LEFT ARROW` | 
| Jump to matching bracket | `CTRL + SHIFT + \` | 
| Super replace | `CTRL + D` | 
| Go to file | `CTRL + P` |  
| Open Comand Palette | `F1` | 
| Start Debugging session | `F5` | 
| Run Build Task | `CTRL + SHIFT + B` | 
| Auto Completion | `CTRL + SPACE` | 
| Open CLI in VSCode | `CTRL + ~` |  
| Copy <BR> Cut <BR> Paste | `CTRL + C` <BR> `CTRL + X` <BR> `CTRL + P` |  

## Resources

- https://github.com/FourMInfo/DevOps-Space/wiki/VSCode


## Themes

- VS Code Themes](https://vscodethemes.com/)  

