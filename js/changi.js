// JavaScript source code
pricelist = {
    "1": 20,
    "2": 30,
    "3": 40,
    "4": 50,
    "Ex Military Building": 15,
    "Abandoned Room": 17,
    "Ritual Rooms": 20,
    "Randomly Assigned": 10
}
var nulldate = "";
Dates()
function Dates() {
    var currentdate = new Date();
    var currentstring = currentdate.toISOString().split("T");

    var onemth = new Date(currentdate.getFullYear(), currentdate.getMonth() + 1, currentdate.getDate()).toISOString().split("T")[0];

    var setdate = document.getElementById("date");
    setdate.setAttribute("min", currentstring[0]);
    setdate.setAttribute("max", onemth);

    var agere = document.getElementById("agereq");
    var datevalue = document.getElementById("date").value;
    nulldate = datevalue;
    if (datevalue != "") {
        var datearr = datevalue.split("-");
        var finaldate = datearr[2] + "-" + datearr[1] + "-" + datearr[0];

        agere.innerHTML = " " + finaldate;
    }
    else {
        agere.innerHTML = " ";
    }
}

function Food(e) {
    if (e.value == "Others") {
        document.getElementById("others").removeAttribute("hidden");
    }
    else {
        document.getElementById("others").setAttribute("hidden", true);
    }
}

document.getElementById("bookingform").addEventListener("submit", function (event) {
    event.preventDefault();
    /*---On Submit Form---*/
    var bg = document.getElementById("scary");
    bg.src = "media/och/formscary.mp3";
    bg.loop = false;
    /*---On Submit Form---*/

    var name = document.getElementById("name").value;
    var pax = document.getElementById("pax").value;
    var datevalue = document.getElementById("date").value;

    var datearr = datevalue.split("-");
    var days = document.getElementById("days").value

    var startdate = datearr[2] + "-" + datearr[1] + "-" + datearr[0];
    var initdate = new Date(datevalue)
    var newdate = new Date(initdate.getFullYear(), initdate.getMonth(), initdate.getDate() + parseInt(days)).toISOString().split("T")[0];
    var splitdate = newdate.split("-");
    var enddate = splitdate[2] + "-" + splitdate[1] + "-" + splitdate[0];

    var rooms = document.getElementById("rooms").value;
    var food = document.getElementById("food").value;
    var others = document.getElementById("others").value;

    var write = document.getElementById("confirm");
    write.style.backgroundImage = "url(../media/och/kidstaring.gif)";
    write.innerHTML = " ";
    write.innerHTML += "<p> Name: " + name + "</p>" +
        "<p> No. of Pax: " + pax + "</p>" +
        "<p> Date of Tour: " + startdate + " - " + enddate + "</p>" +
        "<p> Amt of days: " + days + "</p>" +
        "<p> Room: " + rooms + "</p>";
    if (food != "Others") {
        write.innerHTML += "<p>Food Preference: " + food +"</p>";
    }
    else {
        write.innerHTML += "<p>Food Preference: " + others+ "</p>";
    }

    var price = 0;
    daysprice = pricelist[days] * pax;
    roomprice = pricelist[rooms] * pax;
    price += daysprice + roomprice;

    write.innerHTML += "<p>The total price is $" + price + ".00</p>";
})


