<!-- hide this script tag's contents from old browsers

// generic positive number decimal formatting function
function formatNumber (expr, decplaces) {
	// raise incoming value by power of 10 times the
	// number of decimal places; round to an integer; convert to string
	var str = "" + Math.round (eval(expr) * Math.pow(10,decplaces))
	// pad small value strings with zeros to the left of rounded number
	while (str.length <= decplaces) {
		str = "0" + str
	}
	// establish location of decimal point
	var decpoint = str.length - decplaces
	// assemble final result from: (a) the string up to the position of
	// the decimal point; (b) the decimal point; and (c) the balance
	// of the string. Return finished product.
	return str.substring(0,decpoint) + "." + str.substring(decpoint,str.length);
}

// turn incoming expression into a dollar value
function dollarize (expr) {
	return "$" + formatNumber (expr,2)
}

function isPositiveNumber(inputVal) {
	var oneDecimal = false;
	inputStr = inputVal.toString();
	for (var i = 0; i < inputStr.length; i++) {
		var oneChar = inputStr.charAt(i);
		if (oneChar == "." && !oneDecimal) {
			oneDecimal = true;
			continue;
		}
		if (oneChar < "0" || oneChar > "9") {
			return false;
		}
	}
	return true;
}


function checkNumber(input, min, max, msg)
{
    msg = msg + " field has invalid data: " + input.value;

    var str = input.value;
    if (!isPositiveNumber(str)){
            alert(msg);
            return false;
    }

    var num = 0 + str;
    if (num < min || max < num) {
        alert(msg + " not in range [" + min + ".." + max + "]");
        return false;
    }
    input.value = str;
    return true;
}
function computeField(input)
{
    if (input.value != null && input.value.length != 0) {

    if (!isPositiveNumber(input.value)){
            alert(input.name + " field has invalid data: " + input.value);
            return;
    }

       computeForm(input.form); }
}
function computeForm(form)
{
    if ((form.payments.value == null || form.payments.value.length == 0) ||
        (form.interest.value == null || form.interest.value.length == 0) ||
        (form.principal.value == null || form.principal.value.length == 0)) {
        return;
    }
    if (!checkNumber(form.payments, 1, 600, "Term of Loan") ||
        !checkNumber(form.interest, .001, 99, "Annual Interest Rate") ||
        !checkNumber(form.principal, 100, 1000000, "Loan  Amount")) {
        form.payment.value = "Invalid";
        return;
    }
    var i = form.interest.value;
    if (i > 1.0) {
        i = i / 100.0;
//        form.interest.value = i;
    }
    i /= 12;
    var pow = 1;
    for (var j = 0; j < (form.payments.value); j++)
        pow = pow * (1 + i);
    var monthpay = (form.principal.value * pow * i) / (pow - 1)
    form.payment.value = dollarize(parseFloat(monthpay))
        
}

function clearForm(form)
{
    form.payments.value = "";
    form.interest.value = "";
    form.principal.value = "";
    form.payment.value = "";
}

// -->