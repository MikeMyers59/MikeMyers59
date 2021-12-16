# PowerShell OS Scripting

## net 

#### Set/Remove Password Age
```dos
# Set Password Age Limit to 60 Days#
net accounts /maxpwage:60

# Remove Password Age Limit (Passwords never expire) #
net accounts /maxpwage:0
```

