"use strict";
//function getHoroscope() {}

const getHoroscope = function () {
  //Get Values day, month, year
  let day = Number(document.getElementById("day").value);
  let month = Number(document.getElementById("month").value);
  let year = Number(document.getElementById("year").value);

  //Validate day, month, year,
  let isValidDate = validateDate(day, month, year);
  if (isValidDate) {
    //Get correct Horoscope
    let horoscopeName = getHoroscopeName(day, month);
    displayHoroscopeName(horoscopeName);
    //Display correct horoscope
  } else {
    //Display error if exists
    displayError();
  }
};

const validateDate = function (day, month, year) {
  if (isNaN(day) || isNaN(month) || isNaN(year)) return false;
  if (
    day < 1 ||
    month < 1 ||
    year < 1900 ||
    month > 12 ||
    year > 2100 ||
    day > 31
  )
    return false;
  if (day > 30 && (month == 4 || month == 6 || month == 9 || month == 11)) {
    return false;
  }
  if (day > 28 && month == 2 && year % 4 != 0) {
    return false;
  }
  if (day > 29 && month == 2 && year % 4 == 0) {
    return false;
  }
  return true;
};

const displayError = function () {
  document.getElementById("result").innerHTML =
    "<strong style='color:red'>Please enter a valid date</strong>";
};

const displayHoroscopeName = function (name) {
  document.getElementById("result").innerHTML =
    "<strong style='color:green'>" + name + "</strong>";
};

const getHoroscopeName = function (day, month) {
  // Aries (Ram): March 21–April 19
  if ((day >= 21 && month == 3) || (day <= 19 && month == 4)) {
    return "Aries";
  } else if ((day >= 20 && month == 4) || (day <= 20 && month == 5)) {
    // Taurus (Bull): April 20–May 20
    return "Taurus";
  } else if ((day >= 21 && month == 5) || (day <= 21 && month == 6)) {
    //Gemini (Twins): May 21–June 21
    return "Gemini";
  } else if ((day >= 22 && month == 6) || (day <= 22 && month == 7)) {
    //Cancer (Crab): June 22–July 22
    return "Cancer";
  } else if ((day >= 23 && month == 7) || (day <= 22 && month == 8)) {
    //Leo (Lion): July 23–August 22
    return "Leo";
  } else if ((day >= 23 && month == 7) || (day <= 22 && month == 8)) {
    //Leo (Lion): July 23–August 22
    return "Leo";
  } else if ((day >= 23 && month == 8) || (day <= 22 && month == 9)) {
    //Virgo (Virgin): August 23–September 22

    return "Virgo";
  } else if ((day >= 23 && month == 9) || (day <= 22 && month == 10)) {
    // Libra (Balance): September 23–October 23
    return "Libra";
  } else if ((day >= 24 && month == 10) || (day <= 21 && month == 11)) {
    //  Scorpius (Scorpion): October 24–November 21
    return "Scorpius";
  } else if ((day >= 22 && month == 11) || (day <= 21 && month == 12)) {
    // Sagittarius (Archer): November 22–December 21
    return "Sagittarius";
  } else if ((day >= 22 && month == 10) || (day <= 19 && month == 1)) {
    //  Capricornus (Goat): December 22–January 19
    return "Capricornus";
  } else if ((day >= 20 && month == 1) || (day <= 18 && month == 2)) {
    //  Aquarius (Water Bearer): January 20–February 18
    return "Aquarius";
  } else if ((day >= 19 && month == 2) || (day <= 20 && month == 3)) {
    //  Pisces (Fish): February 19–March 20
    return "Pisces";
  } else {
    return "not valid";
  }
};

const calculateTax = function (amount) {
  return amount * 0.14;
};
//const getHoroscope = () => {};
