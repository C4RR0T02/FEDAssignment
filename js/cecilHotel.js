// JavaScript source code

window.onload = function () {
    const todaydate = new Date(Date.now());
    const enddate = new Date();
    enddate.setMonth(todaydate.getMonth() + 1);
    const dateElement = document.getElementById("tourdate");
    dateElement.setAttribute("min", todaydate.toISOString().split("T")[0]);
    dateElement.setAttribute("max", enddate.toISOString().split("T")[0]);
}

function displayTotalPrice() {
    var noofadult = document.getElementById("adults").value;
    var noofchildren = document.getElementById("child").value;
    var datechosen = document.getElementById("tourdate").value;
    if (datechosen.getDay < 6) {
        price = noofadult * 300 + noofchildren * 150;
    }
    else {
        price = (parseInt(noofadult) + parseInt(noofchildren)) * 350;
    }
    return price;
}

function equipmentrental() {
    var numberOfEquipment = 0;
    var equipment = document.getElementsByName("equipment");
    for (var i = 0; i < equipment.length; i++) {
        if (equipment[i].checked == true) {
            numberOfEquipment++;
        }
    }
    return numberOfEquipment;
}

function determineCost() {
    var pricefortour = displayTotalPrice();
    var numberofequipment = equipmentrental();
    var divobj = document.getElementById("totalcost");
    if (numberofequipment == 0) {
        totalprice = pricefortour
        divobj.innerHTML = "Total price of tour is $" + totalprice;
    }
    else {
        totalprice = pricefortour + (numberofequipment * 5)
        divobj.innerHTML = "Total price of tour (inclusive of equipment) is $" + totalprice;
    }
}

function getDate() {
    var divobj = document.getElementById("dateSelected");
    divobj.style.display = "block";
    divobj.innerHTML = "Date selected is " + document.getElementById("tourdate").value;
}

//function equipmentrental1() {
//    var equipment = document.getElementsByName("equipment").values;
//    var divobj = document.getElementById("equipment");
//    var concat = "These are the selected equipments, ";
//    var i = 0;
//    if (equipment.length >= 1) {
//        for (var i = 0; i < equipment.length; i++) {
//            if (equipment[i].checked == true) {
//                concat = concat + ", " + equipment[i].value;
//            }
//        }
//    }
//    else {
//        concat = "No equipment selected";
//    }
//    divobj.innerHTML = concat;
//}

function submitForm() {
    var Name = document.getElementById("name").value;
    var divobj = document.getElementById("finalMessage");
    divobj.style.display = 'block';
    divobj.innerHTML = "Thank you for your booking, " + Name;
    document.getElementById("details").disabled = true;
    document.getElementById("equipmentinformation").disabled = true;
}

function resetForm() {
    document.getElementById("bookingform").reset();
    document.getElementById("dateSelected").innerHTML = ' ';
    document.getElementById("totalcost").innerHTML = ' ';
}