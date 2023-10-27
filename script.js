let first_N = document.getElementById("firstName");
let last_N = document.getElementById("lastName");
let Country_N = document.getElementById("country");
let phone_N = document.getElementById("pnoneNo");
let state_N = document.getElementById("state");
let city_N = document.getElementById("city");
let village_N = document.getElementById("village");


function userDatas(){
    let firstName = prompt('Enter your First Name:');
    let lastName = prompt('Enter your Last Name:');
    let country = prompt('Enter your Country Name:');
    let PhoneNo = prompt('Enter your Phone Number:');
    let state = prompt('Eneter your State Name:');
    let city = prompt('Enter your City Name:');
    let village = prompt('Enter your Village Name:');


   let object = {
        firstName,
        lastName,
        country,
        PhoneNo,
        state,
        city,
        village,
    }

    localStorage.setItem("userDatas",JSON.stringify(object));

    first_N.textContent = `${object.firstName}`;
    last_N.textContent = `${object.lastName}`;
    Country_N.textContent = `${object.country}`;
    phone_N.textContent = `${object.PhoneNo}`;
    state_N.textContent = `${object.state}`;
    city_N.textContent = `${object.city}`;
    village_N.textContent = `${object.village}`;

}

userDatas();