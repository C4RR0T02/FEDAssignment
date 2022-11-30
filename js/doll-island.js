//code for the DateTime - I set the booking as 6 months
function DateTime() {

    
    //stuff for the date
    var today = new Date(); //defaults to get now
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (mm < 10) {
        mm = '0' + mm;

    }

    if (dd < 10) {
        dd = '0' + dd;
    }
    
    var sixmonths = new Date().setMonth(today.getMonth() + 6);
    var tmpdate = new Date(sixmonths);

    var newtmpmonth = tmpdate.getMonth() + 1;
    var newtmpdate = tmpdate.getDate();

    if (newtmpmonth < 10) {
        newtmpmonth = '0' + newtmpmonth;
    }

    if (newtmpdate < 10) {
        newtmpdate = '0' + newtmpdate;
    }

    var today = yyyy + '-' + mm + '-' + dd;
    var final = tmpdate.getFullYear() + '-' + newtmpmonth + '-' + newtmpdate;

    document.getElementById('dated').setAttribute('min', today);
    document.getElementById('dated').setAttribute('max', final);

}

function CalculateCost() {
    let total =0;
    var noadult = document.getElementById("noadult").value;
    var fee = 75;
    total += fee * noadult;

    //calculate child total
    var nochild = document.getElementById("nochild").value;
    var childtot = (fee -25) * nochild;

    total += childtot;

    var part2 = 'Total price for ' + noadult + ' adult(s) and ' + nochild + ' child(ren) is $' + total;
    document.getElementById('Rprice').innerHTML = part2;


}

function DisplayDate() {
    var date = document.getElementById("dated").value;
    var part3 = 'Selected Date of Tour is ' + date;

    var time = document.getElementsByName('timeslot');

    let timing = '';

    for (var i = 0; i < time.length; i++) {
        if (time[i].checked == true) {
            if (i == 0) {
                timing = '10am-12pm';
            }
            else {
                timing = '1pm-3pm';
            }
        }
    }

    document.getElementById('Rdate').innerHTML = part3 + ' , at ' + timing;
}



function clearMessage() {
    document.getElementById("Rprice").innerHTML = 'Number of people not selected';
    document.getElementById("Rdate").innerHTML = ' ';
    document.getElementById("Rthank").innerHTML = ' ';

    //reset
    document.getElementById('dated').disabled = false;
    document.getElementById('noadult').disabled = false;
    document.getElementById('nochild').disabled = false;
    document.getElementById('name').disabled = false;
    document.getElementById('email').disabled = false;
}

function Thank() {
    var name = document.getElementById('name').value;
    var part4 = 'Thank you for your booking, ' + name;
    document.getElementById('Rthank').innerHTML = part4;

    //disabling
    document.getElementByClassName('radio').disabled = true;
    document.getElementById('dated').disabled = true;
    document.getElementById('noadult').disabled = true;
    document.getElementById('nochild').disabled = true;
    document.getElementById('name').disabled = true;
    document.getElementById('email').disabled = true;
    document.getElementById('phone').disabled = true;
}

function showFinalMessage() {
    var name = document.getElementById("name").value;
    document.getElementById("Rthank").innerHTML = 'Thank you for booking with us, ' + name +'! You will receive an email confirmation in the next 2-3 working days. If you wish to canncel your booking, please contact us at paratravels@gmail.com. See you soon!';
}

function clearMessage() {
    document.getElementById("Rprice").innerHTML = 'Number of people not selected';
    document.getElementById("Rdate").innerHTML = 'No date selected';
    document.getElementById("Rthank").innerHTML = ' ';
}