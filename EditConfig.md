# .editconfig IDE Settings

- [Define .editorconfig](https://editorconfig.org/)  
- [Example .editorconfig for CVSCode](https://github.com/RehanSaeed/EditorConfig/blob/main/.editorconfig)  

**Note For Windows Users**: To create an .editorconfig file within Windows Explorer, you need to create a file named .editorconfig. (note the trailing dot), which Windows Explorer will automatically rename to .editorconfig for you.  

**Note**: Only forward slashes (/, not backslashes) are used as path separators and octothorpes (#) or semicolons (;) are used for comments.  

#### Wildcard Patterns
Special characters recognized in section names for wildcard matching:
| Character | Dexcription |  
| --- | --- |  
| * | Matches any string of characters, except path separators (/) |  
| ** | Matches any string of characters |  
| ? | Matches any single character |  
| [name] | Matches any single character in name |  
| [!name] | Matches any single character not in name |  
| {s1,s2,s3} | Matches any of the strings given (separated by commas) (Available since EditorConfig Core 0.11.0) |  
| {num1..num2} | Matches any integer numbers between num1 and num2, where num1 and num2 can be either positive or negative |  
Special characters can be escaped with a backslash so they won't be interpreted as wildcard patterns.

Simple Sample .editorconfig  
```
root = true

# Defaults for All Files
[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
end_of_line = lf
insert_final_newline = true

# For Markdown Files
[*.md]
trim_trailing_whitespace = false

# Settings for Programing languages
[*.{js,py,ts,vb}]
charset = utf-8
```

## .editorconfig file supports the following file types:

| Language | Files Extensions |  
| --- | --- |  
| C# | .cs, .csx, .cake |  
| CSS | .css, .sass, .scss, .less, .pcss |  
| HTML | .htm, .html |  
| JavaScript | .js, .jsm, .vue |  
| JSON | .json, .json5 |  
| Makefile | makefile |  
| Markdown | .md |  
| Script | .sh, .ps1, .psm1, .bat, .cmd |  
| SVG | .svg |  
| Typecript | .ts, .tsx, .vue |  
| Visual Basic | .vb, vbx |  
| Visual Studio | .sln, .csproj, .vbproj, .vcxproj, .vcxproj.filters, .proj, .projitems, .shproj |  
| XML | .xml, .config, .props, .targets, .nuspec, .resx, .ruleset |  
| YAML | .yml, .yaml |  

