const button = document.getElementById("search-button");

function changeStreet() {
    let city = document.getElementById("cityname");
    let address = document.getElementById("streetname");
    let frame = document.getElementById("mapFrame")
    if ((city.value === "") || (address.value === "")) {
        frame.src = "https://www.google.com/maps?q=Yliopistonkatu36Lappeenranta&output=embed";
    } 
    else {
        frame.src = "https://www.google.com/maps?q="+address.value+city.value+"&output=embed";
    }
}

button.addEventListener("click", changeStreet)