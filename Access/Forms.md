# Access Forms

## Access Forms Object

Access Forms Object ![Access Forms Object](https://github.com/MikeMyers59/MikeMyers59/blob/main/00Pics/Access%20Forms%20Object.png)

## Forms Properties

#### Form Properties
| Property| Value|
| --- | --- |  
| Background Color | 16777181 (Light Blue) |  

#### Label Properties
| Property| Value|
| --- | --- |  
| Background Color | 16776960 (Bright Blue) |  
| Font | Times New Roman |  
| Font Size | 14 |  
| Border | Normal |  
| Special Effect | Shadowed |  

## Examples

#### Basic Form Closing
```VBA
Private Sub btnCloseForm_Click()
On Error GoTo Err_btnCloseForm_Click_Click
' Close Form, Return to calling form
    DoCmd.Close
' Make calling form Visible again
    Forms!frmMain.Visible = True
Exit_btnCloseForm_Click_Click:
    Exit Sub
Err_btnCloseForm_Click_Click:
    MsgBox Err.Description
    Resume Exit_btnCloseForm_Click_Click
End Sub
```

#### Hide the Access Window
Use a blank form as a block for the Access Window. The **DoCmd.Maximum** makes it cover the entire screen – and blocks the task bar view (a 2nd screen allows it to be accessed, as may virtual monitors!) The bypass key is operational to make any changes that may be necessary. The Main form is Modal to prevent access to the Start (blank) form. Navigation & Windows controls are removed to prevent any other access method! This effectively blocks access to the database objects except through the Main form.  

The Hide Access Window VBE Script ![Hide Access Window Script](https://github.com/MikeMyers59/MikeMyers59/blob/main/00Pics/Hide%20Access%20Window%20Script.jpg)

###### frmStart  
This is a BLANK Form.  
Property Settings:  
![frmStart Properties 1](https://github.com/MikeMyers59/MikeMyers59/blob/main/00Pics/frmStart%20Properties%201.png)  
![frmStart Properties 2](https://github.com/MikeMyers59/MikeMyers59/blob/main/00Pics/frmStart%20Properties%202.png)

###### frmMain  
The menu/start form  
Property Settings:  
![frmMain Properties 1](https://github.com/MikeMyers59/MikeMyers59/blob/main/00Pics/frmMain%20Properties%201.png)  
![frmMain Properties 2](https://github.com/MikeMyers59/MikeMyers59/blob/main/00Pics/frmMain%20Properties%202.png)  

#### Requery when Selected
```vba
Private Sub <frmControlName>_GotFocus()
   DoCmd.Requery
End Sub
```

