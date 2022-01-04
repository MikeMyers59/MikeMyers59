# Settings.json 

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

