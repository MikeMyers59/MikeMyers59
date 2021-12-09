# Process Certificates

## [Certificate Request](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/certreq_1)
uses:  
-	to request certificates from a certification authority (CA),   
-	to retrieve a response to a previous request from a CA,   
-	to create a new request from an .inf file,   
-	to accept and install a response to a request,   
-	to construct a cross-certification or qualified subordination request from an existing CA certificate or request, and   
-	to sign a cross-certification or qualified subordination request.  

```dos
  CERTREQ -ACCEPT <YourCertName>.p7b
  set certreq_exit_code=%ERRORLEVEL%
  ECHO [CERTREQ] exit code: %certreq_exit_code%
```
  
## [Certificate Manager](https://docs.microsoft.com/en-us/dotnet/framework/tools/certmgr-exe-certificate-manager-tool)
```dos
  CertMgr [/add|/del|/put] [Switches] [/s [/r RegistryLocation ] ] SourceName [/s [/r RegistryLocation] ] [DestinationName]
```

## Certificate Utility
| Action | Example | 
| ---- | ---- | 
| Machine certificates | ```certutil -v -store -silent My ``` | 
| User certificates | ```certutil -v -store -silent -user My ``` | 
| Root certificates (machine store) | ```certutil -v -store -silent root ``` | 
| Root certificates (enterprise store) | ```certutil -v -enterprise -store -silent NTAuth ``` | 
| Root certificates (user store) | ```certutil -v -user -store -silent root ``` | 

