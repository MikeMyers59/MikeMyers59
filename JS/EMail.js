<!--  Start of E-Mail Form JavaScript
  if (navigator.appVersion.lastIndexOf('Win') != -1) {
      dropline = "\r\n"  } else { dropline = "\n" }

function emailmsg(form) {
document.ccform.Message.value = (
   '  ' + dropline + dropline
  + 'Name     : ' + document.ccform.name.value + dropline
  + 'Phone    : ' + document.ccform.phone.value + dropline
  + 'Subject  : ' + document.ccform.subject.value + dropline
  + 'E-mail    : ' + document.ccform.email.value + dropline
  + 'Message: ' + document.ccform.message.value
  + dropline  + dropline
  + ' FIELD VALUES: ' + dropline
  + '  ' + dropline
);
}
// -->