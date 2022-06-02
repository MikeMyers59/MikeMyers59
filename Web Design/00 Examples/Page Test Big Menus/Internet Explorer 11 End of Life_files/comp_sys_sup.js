/**
*    getLicenseData - Function for getting and displaying license data for software titles that use the flex license servers.
*    Accepts the following parameters:
*        string @printElementID - HTML element ID of div you would like to insert license data into
*        string @licenseFile - the URL string of the license file you would like to read
*        string @licenseType (optional) - the type of license report.  most use default.  abaqus and gridworks / hyperworks use 'sessions' and de browser uses 'nohost.'
*        string @noHostCount (optional) - the URL string of the asof/count data for 'nohost'/debrowser
*/
function getLicenseData(printElementID, licenseFile, licenseType, noHostCount) {
    if (typeof printElementID != 'string') { return false; }
    if (typeof licenseFile != 'string') { return false; }
    if (typeof licenseType === 'undefined') { licenseType = 'default'; }
    if (typeof noHostCount === 'undefined') { noHostCount = 'N/A'; }
    
                
		jQuery.ajax({
			type: 'GET',
			url: licenseFile,
			cache: false,
			async: true,
			dataType: 'text',
			error: function(jqXHR, textStatus, errorThrown){
                $('#' + printElementID).html('<p>Unable to obtain license file.</p>');
				return false;
			}
		}).done(function(data)
		{
			var parse = data.split('\n'),
                parseLength = parse.length,
                licenseSummaryData = 'No records found',
                licensePrintData = '';
            
            /* 
                default print format 
                displays count, checkout time, username, and host (asset)
            */
            function printDefault() {
                for (var i=0; i < parseLength - 1; i++) {
                    var row = parse[i].split('|'),
                        count = row[14],
                        checkoutTime = row[12],
                        username = row[4],
                        host = row[5];

                    
                    if (i == 0) { // if the first row print as headers
                      licensePrintData = licensePrintData + '<thead><tr><th>' + count + '</th>' + '<th>' + checkoutTime + '</th>' + '<th>' + username + '</th>' + '<th>' + host + '</th></tr></thead>';
                    }
                    else {
                        licensePrintData = licensePrintData + '<tr><td>' + count + '</td>' + '<td>' + checkoutTime + '</td>' + '<td>' + '<a href="/ed/?windows_id=' + username + '">' + username + '</a>' + '</td>' + '<td>' + host + '</td></tr>';
                    }
                    licenseSummaryData = count + ' licenses checked out as of ' + row[0];
                }
                $('#' + printElementID).html('<h3>' + licenseSummaryData + '</h3>' + '<table class="alt-rows license-table" id="'+ printElementID + 'Table">' + licensePrintData + '</table>');     
                $('#' + printElementID + 'Table').dataTable({"bPaginate": false, "bAutoWidth": false, "bFilter": false, "bInfo": false});       
            }
            /* 
                sessions print format 
                displays count, checkout time, username, and host (asset), and number of licenses out.  used for titles that have a number of 'tokens' that people checkout.
            */
            function printSessions() {
                var licenseTotal = 0;
                for (var i=0; i < parseLength - 1; i++) {
                    var row = parse[i].split('|'),
                        count = row[14],
                        checkoutTime = row[12],
                        username = row[4],
                        host = row[5],
                        licensesOut = row[13];

                    if (i == 0) { // if the first row print as headers
                      licensePrintData = licensePrintData + '<thead><tr><th>' + count + '</th>' + '<th>' + checkoutTime + '</th>' + '<th>' + username + '</th>' + '<th>' + host + '</th>' + '<th>' + licensesOut + '</th></tr></thead>';
                    }
                    else {
                        licensePrintData = licensePrintData + '<td>' + count + '</td>' + '<td>' + checkoutTime + '</td>' + '<td>' + '<a href="/ed/?windows_id=' + username + '">' + username + '</a>' + '</td>' + '<td>' + host + '</td>' + '<td>' + licensesOut + '</td></tr>';
                        licenseTotal = licenseTotal + parseInt(licensesOut, 10);
                    }
                    licenseSummaryData = count + ' user sessions and ' + licenseTotal + ' licenses in use as of ' + row[0];
                }
                $('#' + printElementID).html('<h3>' + licenseSummaryData + '</h3>' + '<table class="alt-rows license-table" id="'+ printElementID + 'Table">' + licensePrintData + '</table>');   
                $('#' + printElementID + 'Table').dataTable({"bPaginate": false, "bAutoWidth": false, "bFilter": false, "bInfo": false});        
            }    
            
            /* 
                default print format but without host displayed
            */
            function printNoHost() {
              
                // Retrieve count and as of data from separate file
                jQuery.ajax({
                  type: 'GET',
                  url: noHostCount,
                  cache: false,
                  async: true,
                  dataType: 'text',
                  error: function(jqXHR, textStatus, errorThrown){
                            $('#' + printElementID).html('<p>Unable to obtain license file.</p>');
                    return false;
                  }
                }).done(function(data)
                {
                  var countData = data.split('\n')[1].split('|'),
                      asOf = countData[0],
                      totalCount = countData[1];
                
                    for (var i=0; i < parseLength - 1; i++) {
                        var row = parse[i].split('|'),
                            checkoutTime = row[0],
                            username = row[1],
                            count = i;
                        if (i == 0) { // if the first row print as headers
                          licensePrintData = licensePrintData + '<thead><tr><th>Count</th>' + '<th>' + checkoutTime + '</th>' + '<th>' + username + '</th></tr></thead>';
                        }
                        else {
                            licensePrintData = licensePrintData + '</td>' + '<td>' + count + '</td>' + '<td>' + checkoutTime + '</td>' + '<td>' + '<a href="/ed/?windows_id=' + username + '">' + username + '</a>' + '</td></tr>';
                        }
                        licenseSummaryData = count + ' licenses checked out as of ' + asOf;
                    }
                    $('#' + printElementID).html('<h3>' + licenseSummaryData + '</h3>' + '<table class="alt-rows license-table" id="'+ printElementID + 'Table">' + licensePrintData + '</table>');   
                    $('#' + printElementID + 'Table').dataTable({"bPaginate": false, "bAutoWidth": false, "bFilter": false, "bInfo": false});                     
                });
            }            
            
            /*
                check if there are no checkout out licenses
                checking if length is equal to two because there is the header line and a newline in an 'empty' license file
                if there are checked out licenses, PRINT!
            */
            if (parseLength == 2) {
                licensePrintData = 'No records found';
                $('#' + printElementID).html('<h3>' + licenseSummaryData + '</h3>' + licensePrintData);      
            }
            else {
                if (licenseType == 'default') {
                    printDefault();
                }
                else if (licenseType == 'sessions') {
                    printSessions();
                }
                else if (licenseType == 'nohost') {
                    printNoHost();
                }
                else {
                    console.log('Invalid license type selected');
                }
             }
		});
}


/**
*    getAppGwUsage - Function for getting and displaying Application Gateway Pool usage from CSC provided file.
*    Uses csv.js for parsing of csv files. see /javascript/csv-js/
*    Accepts the following parameters:
*        string @printElementID - HTML element ID of div you would like to insert usage data into
*        string @usageFile - the URL string of the usage file you would like to read
*        number @expectedSessions - number of total sessions expected/assigned to resource pool
*    
*/
function getAppGwUsage(printElementID, usageFile, expectedSessions) {
    if (typeof printElementID != 'string') { return false; }
    if (typeof usageFile != 'string') { return false; }
    if (typeof expectedSessions != 'number') { return false; }

    jQuery.ajax({
        type: 'GET',
        url: usageFile,
        cache: false,
        async: true,
        dataType: 'text',
        error: function(jqXHR, textStatus, errorThrown) {
            $('#'+printElementID).html('<p>Unable to obtain usage data</p>');
            return false;
        }
    }).done(function(data) {
    
        var rows = CSV.parse(data),
            usageSummaryData = 'No records found',
            usagePrintData = '',
            available = 0,
            disconnected = 0,
            inUse = 0;
        
        for (var i=0; i < rows.length; i++) {
            var row = {};
            row.timeStamp = rows[i][0];
            row.fullName = rows[i][1];
            row.machineName = rows[i][2];
            row.sessionMinutes = rows[i][3];
            row.sessionState = rows[i][4];
            row.userID = rows[i][5];
            
            if (i == 0 ) { // if the first row print headers
                usagePrintData = usagePrintData + '<thead><tr><th>Time Stamp</th><th>Full Name</th><th>Machine Name</th><th>Session Length (Minutes)</th><th>Session State</th><th>User ID</th></tr></thead>';
            }
            else {
                usagePrintData = usagePrintData + '<tr><td>'+row.timeStamp+'</td><td>'+row.fullName+'</td><td>'+row.machineName+'</td><td>'+row.sessionMinutes+'</td><td>'+row.sessionState+'</td><td>'+row.userID+'</td></tr>';                
                switch(row.sessionState) {
                    case 'Available':
                        available++;
                        break;
                    case 'Disconnected':
                        disconnected++;
                        break;
                    case 'InUse':
                        inUse++;
                        break;
                    default:
                }
            }
        }
        $('#'+printElementID).html('<p class="centered-text"><strong>Available:</strong> '+available+' | <strong>InUse:</strong> '+inUse+' | <strong>Disconnected:</strong> '+disconnected+'</p><p class="centered-text"><strong>Total Sessions / Expected Sessions:</strong> '+(available+disconnected+inUse)+ '/'+expectedSessions +'</p><table class="alt-rows block-center" id="'+ printElementID + 'Table">' + usagePrintData + '</table>');   
        $('#'+printElementID + 'Table').dataTable({"bPaginate": false, "bAutoWidth": false, "bFilter": false, "bInfo": false});        
    });
}

