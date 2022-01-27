#  Git Commands

| Git Command | Description |  
| --- | --- |  
| git graph |  |  

### Hold Area
```bash
git config --global user.name "Alyssa P. Hacker"
git config --global user.email hacker@hackmit.or
git config --global ui.color auto
git config --global alias.graph "log --graph --decorate --all"
```

git help <command>: get help for a git command
git init: creates a new git repo, with data stored in the .git directory
git status: tells you what's going on
git add <filename>: adds files to staging area
git commit: creates a new commit
    Write good commit messages!
    Even more reasons to write good commit messages!
git log: shows a flattened log of history
git log --all --graph --decorate: visualizes history as a DAG
git diff <filename>: show changes you made relative to the staging area
git diff <revision> <filename>: shows differences in a file between snapshots
git checkout <revision>: updates HEAD and current branch

