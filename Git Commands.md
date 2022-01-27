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

### Basic Git
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

### Branching
git branch: shows branches
git branch <name>: creates a branch
git checkout -b <name>: creates a branch and switches to it
    same as git branch <name>; git checkout <name>
git merge <revision>: merges into current branch
git mergetool: use a fancy tool to help resolve merge conflicts
git rebase: rebase set of patches onto a new base

### Remotes
git remote: list remotes
git remote add <name> <url>: add a remote
git push <remote> <local branch>:<remote branch>: send objects to remote, and update remote reference
git branch --set-upstream-to=<remote>/<remote branch>: set up correspondence between local and remote branch
git fetch: retrieve objects/references from a remote
git pull: same as git fetch; git merge
git clone: download repository from remote

### Undo
git commit --amend: edit a commit's contents/message
git reset HEAD <file>: unstage a file
git checkout -- <file>: discard changes

### Advanced Git
git config: Git is highly customizable
git clone --depth=1: shallow clone, without entire version history
git add -p: interactive staging
git rebase -i: interactive rebasing
git blame: show who last edited which line
git stash: temporarily remove modifications to working directory
git bisect: binary search history (e.g. for regressions)
.gitignore: specify intentionally untracked files to ignore

## Resources

- [Pro Git](https://git-scm.com/book/en/v2) is **highly recommended reading**.
Going through Chapters 1--5 should teach you most of what you need to use Git
proficiently, now that you understand the data model. The later chapters have
some interesting, advanced material.
- [Oh Shit, Git!?!](https://ohshitgit.com/) is a short guide on how to recover
from some common Git mistakes.
- [Git for Computer
Scientists](https://eagain.net/articles/git-for-computer-scientists/) is a
short explanation of Git's data model, with less pseudocode and more fancy
diagrams than these lecture notes.
- [Git from the Bottom Up](https://jwiegley.github.io/git-from-the-bottom-up/)
is a detailed explanation of Git's implementation details beyond just the data
model, for the curious.
- [How to explain git in simple
words](https://smusamashah.github.io/blog/2017/10/14/explain-git-in-simple-words)
- [Learn Git Branching](https://learngitbranching.js.org/) is a browser-based
game that teaches you Git.

