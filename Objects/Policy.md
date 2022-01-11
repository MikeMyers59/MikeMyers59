# Policy Object

## Declare a Policy Object
```vbscript
Dim objPolicy as Object, ProfileType as Array
Set objPolicy = CreateObject("HNetCfg.FwPolicy2")
  ProfileType = Array("Domain", "Private", "Public")
  objPolicy.CurrentProfileTypes
Set objPolicy = Nothing
```

## Declare a Rule
```vscript
Dim rule as Object, RulesObject as Object
Set RulesObject = objPolicy.Rules
  rule.Name)
  rule.Enabled)
  rule.Description)
  rule.ApplicationName)
  rule.ServiceName)
  For Each rule In Rulesobject
  Next
```

