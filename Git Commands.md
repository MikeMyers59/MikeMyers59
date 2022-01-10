#  Git Commands

- https://github.com/FourMInfo/DevOps-Space/wiki/Git-and-Github
- https://github.com/tja4472/wiki/wiki/Git-Hub-Pull-Request
- https://github.com/markcheret/footnotes/wiki/Git-Tips
- [Git Cheatsheet](https://training.github.com/downloads/github-git-cheat-sheet/)

| Git Command | Description |  
| --- | --- |  
| git config --global user.name <your-name> | Set User Name Setting |  
| git config --global user.email <your-email> | Set EMail setting |  
| git config --list | List Configuration settings |  
| git init | Intialize a new repository |  
| git status | Check git status |  
| git add . | Move all files/folders to staging area |  
| git add <FileFolderName> | Move file/folder to staging area |  
| git reset | Unstage all |  
| git reset <FileFolderName> | Unstage file/folder |  
| git commit -m <CommitTitle> | Commit all staged files/folder into remote repository |  
| git push -u origin main | Copy local repository files/folders to GitHub repository |  
| git remote add origin https://github.com/<UserName>/<RepositoryName>.git | Connect Git wit GitHub |  
| git branch <BranchName> | Create a branch |   
| git checkout <BranchName> | Switch to working branch |  
| git pull | Copy any updates from the GitHub repository to the local repository |  
| git push --set-upstream origin <BranchName> | Send your new branch to GitHub |  
| git branch -d <BranchName> | Clean up, delete obsolete branch |  
| git clone https://github.com/<ProjectURL> | Copy a community repository into your own space |  

### Typical Actions to Save new information
```git
git add .
git commit -m <YourCommitMessage> 
git push
```

### Merge a Branch into Main (Master)
```git
git checkout <BranchName> 
git merge main
```

