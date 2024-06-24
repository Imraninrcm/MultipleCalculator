// ***************************** Age calculator start *****************************//
let startDate = document.querySelector("#start-date");
let endDate = document.querySelector("#final-date");
let dateBtn = document.querySelector("#age");
let para = document.querySelector("#age1");

dateBtn.addEventListener("click", function () {
  let firstDate = startDate.value;
  let lastdate = endDate.value;
  if (lastdate === "" || firstDate === "") {
    alert("Please enter a valid date");
  } else if (lastdate < firstDate) {
    alert("You enterd a invalid date to calculate age");
  } else {
    try {
      para.innerText = "You are as of " + lastdate + ":  ";

      let ans = document.createElement("span");

      para.appendChild(ans);
      ans.innerText = `${age(firstDate, lastdate)[0]} days ${
        age(firstDate, lastdate)[1]
      } months ${age(firstDate, lastdate)[2]} years  \n ${
        age(firstDate, lastdate)[3]
      } Days \n ${age(firstDate, lastdate)[4]} Months \n ${
        age(firstDate, lastdate)[5]
      } Years \n ${age(firstDate, lastdate)[6]} Hours \n ${
        age(firstDate, lastdate)[7]
      } minites \n ${age(firstDate, lastdate)[8]} seconds`;
      ans.style.color = "#0335fc";
    } catch {
      alert("check the date you entered");
    }
  }
});
function age(Date1, Date2) {
  let day,
    month,
    year = 0;

  let dd1 = Number(Date1.slice(8, 10)); // Day of first date
  let dd2 = Number(Date2.slice(8, 10)); // Day of second date
  let mm1 = Number(Date1.slice(5, 7)); // Month of first date
  let mm2 = Number(Date2.slice(5, 7)); // Month of second date
  let yyyy1 = Number(Date1.slice(0, 4)); // Year of first date
  let yyyy2 = Number(Date2.slice(0, 4)); // Year of second date

  if (
    yyyy2 < yyyy1 ||
    (yyyy2 === yyyy1 && mm2 < mm1) ||
    (yyyy2 === yyyy1 && mm2 === mm1 && dd2 < dd1)
  ) {
    return ["Invalid date"];
  }

  if (dd2 < dd1) {
    dd2 += 30;
    mm2 -= 1;
  }

  if (mm2 < mm1) {
    mm2 += 12;
    yyyy2 -= 1;
  }

  day = dd2 - dd1;
  month = mm2 - mm1;
  year = yyyy2 - yyyy1;

  let total_day = day + month * 30 + year * 365;
  let total_month = Math.floor(total_day / 30);
  let total_year = Math.floor(total_month / 12);
  let total_hour = total_day * 24;
  let total_minute = total_hour * 60;
  let total_second = total_minute * 60;

  return [
    day,
    month,
    year,
    total_day,
    total_month,
    total_year,
    total_hour,
    total_minute,
    total_second,
  ];
}
// ***************************** Age calculator end *****************************//

// ***************************** Temp calculator start *****************************//
let TempScale1 = document.querySelector("#tempSelect1");
let TempScale2 = document.querySelector("#tempSelect2");
let tempValue = document.querySelector("#tempValue");
let tempAns = document.querySelector("#tempAns");
let tempAns2 = document.createElement("span");
tempAns.appendChild(tempAns2);
tempValue.addEventListener("input", tempCalculate);
TempScale1.addEventListener("click", tempCalculate);
TempScale2.addEventListener("click", tempCalculate);
function tempCalculate() {
  if (TempScale1.selectedIndex === TempScale2.selectedIndex) {
    if (TempScale2.selectedIndex === 0) {
      tempAns2.innerText = tempValue.value + " °C";
    } else if (TempScale2.selectedIndex === 1) {
      tempAns2.innerText = tempValue.value + " °F";
    } else if (TempScale2.selectedIndex === 2) {
      tempAns2.innerText = tempValue.value + " K";
    } else if (TempScale2.selectedIndex === 3) {
      tempAns2.innerText = tempValue.value + " °R";
    } else {
      tempAns2.innerText = tempValue.value + " °Ré";
    }
  } else {
    if (TempScale1.selectedIndex === 0) {
      if (TempScale2.selectedIndex === 1) {
        tempAns2.innerText = celciusToOther(tempValue.value)[0] + " °F";
      } else if (TempScale2.selectedIndex === 2) {
        tempAns2.innerText = celciusToOther(tempValue.value)[1] + " K";
      } else if (TempScale2.selectedIndex === 3) {
        tempAns2.innerText = celciusToOther(tempValue.value)[2] + " °R";
      } else if (TempScale2.selectedIndex === 4) {
        tempAns2.innerText = celciusToOther(tempValue.value)[3] + " °Ré";
      }
    } else if (TempScale1.selectedIndex === 1) {
      if (TempScale2.selectedIndex === 0) {
        tempAns2.innerText = fahreheitToOther(tempValue.value)[0] + " °C";
      } else if (TempScale2.selectedIndex === 2) {
        tempAns2.innerText = fahreheitToOther(tempValue.value)[1] + " K";
      } else if (TempScale2.selectedIndex === 3) {
        tempAns2.innerText = fahreheitToOther(tempValue.value)[2] + " °R";
      } else if (TempScale2.selectedIndex === 4) {
        tempAns2.innerText = fahreheitToOther(tempValue.value)[3] + " °Ré";
      }
    } else if (TempScale1.selectedIndex === 2) {
      if (TempScale2.selectedIndex === 0) {
        tempAns2.innerText = kelvinToOther(tempValue.value)[0] + " °C";
      } else if (TempScale2.selectedIndex === 1) {
        tempAns2.innerText = kelvinToOther(tempValue.value)[1] + " °F";
      } else if (TempScale2.selectedIndex === 3) {
        tempAns2.innerText = kelvinToOther(tempValue.value)[2] + " °R";
      } else if (TempScale2.selectedIndex === 4) {
        tempAns2.innerText = kelvinToOther(tempValue.value)[3] + " °Ré";
      }
    } else if (TempScale1.selectedIndex === 3) {
      if (TempScale2.selectedIndex === 0) {
        tempAns2.innerText = rankenToOthers(tempValue.value)[0] + " °C";
      } else if (TempScale2.selectedIndex === 1) {
        tempAns2.innerText = rankenToOthers(tempValue.value)[1] + " °F";
      } else if (TempScale2.selectedIndex === 2) {
        tempAns2.innerText = rankenToOthers(tempValue.value)[2] + " K";
      } else if (TempScale2.selectedIndex === 4) {
        tempAns2.innerText = rankenToOthers(tempValue.value)[3] + " °Ré";
      }
    } else if (TempScale1.selectedIndex === 4) {
      if (TempScale2.selectedIndex === 0) {
        tempAns2.innerText = reymorToOther(tempValue.value)[0] + " °C";
      } else if (TempScale2.selectedIndex === 1) {
        tempAns2.innerText = reymorToOther(tempValue.value)[1] + " °F";
      } else if (TempScale2.selectedIndex === 2) {
        tempAns2.innerText = reymorToOther(tempValue.value)[2] + " K";
      } else if (TempScale2.selectedIndex === 3) {
        tempAns2.innerText = reymorToOther(tempValue.value)[3] + " °R";
      }
    }
  }
  if (tempValue.value == null) {
    tempAns2.innerText = null;
  }
}
function celciusToOther(c) {
  let f = (9 * c) / 5 + 32;
  let k = Number(c) + 273.15;
  let r = (c * 9) / 5 + 491.67;
  let re = (c * 4) / 5;
  return [f, k, r, re];
}
function fahreheitToOther(f) {
  let c = ((f - 32) * 5) / 9;
  let k = (5 * f + 2297) / 9;
  let r = Number(f) + 459.67;
  let re = (4 * (f - 32)) / 9;
  return [c, k, r, re];
}
function kelvinToOther(k) {
  let c = k - 273;
  let f = (9 * (k - 273)) / 5 + 32;
  let r = (k * 9) / 5;
  let re = (4 * (k - 273)) / 5;
  return [c, f, r, re];
}
function rankenToOthers(r) {
  let c = ((r - 491.67) * 5) / 9;
  let f = r - 459.67;
  let k = (r * 5) / 9;
  let re = ((r - 491.67) * 4) / 9;
  return [c, f, k, re];
}
function reymorToOther(re) {
  let c = (re * 5) / 4;
  let f = (9 * re) / 4 + 32;
  let k = (5 * re) / 4 + 273;
  let r = (9 * re) / 4 + 491.67;
  return [c, f, k, r];
}
// ***************************** Temp calculator end *****************************//

// ***************************** Length calculator start *****************************//
let lengthSelect1 = document.querySelector("#lengthSelect1");
let lengthSelect2 = document.querySelector("#lengthSelect2");
let lengthValue = document.querySelector("#lengthValue");
let lengthAns = document.querySelector("#lengthAns");
let lengthAns2 = document.createElement("span");
lengthAns.appendChild(lengthAns2);
lengthValue.addEventListener("input", lengthCalculate);
lengthSelect1.addEventListener("click", lengthCalculate);
lengthSelect2.addEventListener("click", lengthCalculate);

function lengthCalculate() {
  if (lengthSelect1.selectedIndex === lengthSelect2.selectedIndex) {
    if (lengthSelect2.selectedIndex === 0) {
      lengthAns2.innerText = lengthValue.value + " Km";
    } else if (lengthSelect2.selectedIndex === 1) {
      lengthAns2.innerText = lengthValue.value + " m";
    } else if (lengthSelect2.selectedIndex === 2) {
      lengthAns2.innerText = lengthValue.value + " dm";
    } else if (lengthSelect2.selectedIndex === 3) {
      lengthAns2.innerText = lengthValue.value + " cm";
    } else if (lengthSelect2.selectedIndex === 4) {
      lengthAns2.innerText = lengthValue.value + " mm";
    } else if (lengthSelect2.selectedIndex === 5) {
      lengthAns2.innerText = lengthValue.value + " μm";
    } else if (lengthSelect2.selectedIndex === 6) {
      lengthAns2.innerText = lengthValue.value + " nm";
    } else if (lengthSelect2.selectedIndex === 7) {
      lengthAns2.innerText = lengthValue.value + " pm";
    } else if (lengthSelect2.selectedIndex === 8) {
      lengthAns2.innerText = lengthValue.value + " nmi";
    } else if (lengthSelect2.selectedIndex === 9) {
      lengthAns2.innerText = lengthValue.value + " mi";
    } else if (lengthSelect2.selectedIndex === 10) {
      lengthAns2.innerText = lengthValue.value + " yd";
    } else if (lengthSelect2.selectedIndex === 11) {
      lengthAns2.innerText = lengthValue.value + " ft";
    } else if (lengthSelect2.selectedIndex === 12) {
      lengthAns2.innerText = lengthValue.value + " in";
    } else if (lengthSelect2.selectedIndex === 13) {
      lengthAns2.innerText = lengthValue.value + " pc";
    } else if (lengthSelect2.selectedIndex === 14) {
      lengthAns2.innerText = lengthValue.value + " ld";
    } else if (lengthSelect2.selectedIndex === 15) {
      lengthAns2.innerText = lengthValue.value + " au";
    } else if (lengthSelect2.selectedIndex === 16) {
      lengthAns2.innerText = lengthValue.value + " ly";
    }
  } else {
    if (lengthSelect1.selectedIndex === 0) {
      if (lengthSelect2.selectedIndex === 1) {
        lengthAns2.innerText = kmToOther(lengthValue.value)[0] + " m";
      } else if (lengthSelect2.selectedIndex === 2) {
        lengthAns2.innerText = kmToOther(lengthValue.value)[1] + " dm";
      } else if (lengthSelect2.selectedIndex === 3) {
        lengthAns2.innerText = kmToOther(lengthValue.value)[2] + " cm";
      } else if (lengthSelect2.selectedIndex === 4) {
        lengthAns2.innerText = kmToOther(lengthValue.value)[3] + " mm";
      } else if (lengthSelect2.selectedIndex === 5) {
        lengthAns2.innerText = kmToOther(lengthValue.value)[4] + " μm";
      } else if (lengthSelect2.selectedIndex === 6) {
        lengthAns2.innerText = kmToOther(lengthValue.value)[5] + " nm";
      } else if (lengthSelect2.selectedIndex === 7) {
        lengthAns2.innerText = kmToOther(lengthValue.value)[6] + " pm";
      } else if (lengthSelect2.selectedIndex === 8) {
        lengthAns2.innerText = kmToOther(lengthValue.value)[7] + " nmi";
      } else if (lengthSelect2.selectedIndex === 9) {
        lengthAns2.innerText = kmToOther(lengthValue.value)[8] + " mi";
      } else if (lengthSelect2.selectedIndex === 10) {
        lengthAns2.innerText = kmToOther(lengthValue.value)[9] + " yd";
      } else if (lengthSelect2.selectedIndex === 11) {
        lengthAns2.innerText = kmToOther(lengthValue.value)[10] + " ft";
      } else if (lengthSelect2.selectedIndex === 12) {
        lengthAns2.innerText = kmToOther(lengthValue.value)[11] + " in";
      } else if (lengthSelect2.selectedIndex === 13) {
        lengthAns2.innerText = kmToOther(lengthValue.value)[12] + " pc";
      } else if (lengthSelect2.selectedIndex === 14) {
        lengthAns2.innerText = kmToOther(lengthValue.value)[13] + " ld";
      } else if (lengthSelect2.selectedIndex === 15) {
        lengthAns2.innerText = kmToOther(lengthValue.value)[14] + " au";
      } else if (lengthSelect2.selectedIndex === 16) {
        lengthAns2.innerText = kmToOther(lengthValue.value)[15] + " ly";
      }
    } else if (lengthSelect1.selectedIndex === 1) {
      if (lengthSelect2.selectedIndex === 0) {
        lengthAns2.innerText = mToOther(lengthValue.value)[0] + " km";
      } else if (lengthSelect2.selectedIndex === 2) {
        lengthAns2.innerText = mToOther(lengthValue.value)[1] + " dm";
      } else if (lengthSelect2.selectedIndex === 3) {
        lengthAns2.innerText = mToOther(lengthValue.value)[2] + " cm";
      } else if (lengthSelect2.selectedIndex === 4) {
        lengthAns2.innerText = mToOther(lengthValue.value)[3] + " mm";
      } else if (lengthSelect2.selectedIndex === 5) {
        lengthAns2.innerText = mToOther(lengthValue.value)[4] + " μm";
      } else if (lengthSelect2.selectedIndex === 6) {
        lengthAns2.innerText = mToOther(lengthValue.value)[5] + " nm";
      } else if (lengthSelect2.selectedIndex === 7) {
        lengthAns2.innerText = mToOther(lengthValue.value)[6] + " pm";
      } else if (lengthSelect2.selectedIndex === 8) {
        lengthAns2.innerText = mToOther(lengthValue.value)[7] + " nmi";
      } else if (lengthSelect2.selectedIndex === 9) {
        lengthAns2.innerText = mToOther(lengthValue.value)[8] + " mi";
      } else if (lengthSelect2.selectedIndex === 10) {
        lengthAns2.innerText = mToOther(lengthValue.value)[9] + " yd";
      } else if (lengthSelect2.selectedIndex === 11) {
        lengthAns2.innerText = mToOther(lengthValue.value)[10] + " ft";
      } else if (lengthSelect2.selectedIndex === 12) {
        lengthAns2.innerText = mToOther(lengthValue.value)[11] + " in";
      } else if (lengthSelect2.selectedIndex === 13) {
        lengthAns2.innerText = mToOther(lengthValue.value)[12] + " pc";
      } else if (lengthSelect2.selectedIndex === 14) {
        lengthAns2.innerText = mToOther(lengthValue.value)[13] + " ld";
      } else if (lengthSelect2.selectedIndex === 15) {
        lengthAns2.innerText = mToOther(lengthValue.value)[14] + " au";
      } else if (lengthSelect2.selectedIndex === 16) {
        lengthAns2.innerText = mToOther(lengthValue.value)[15] + " ly";
      }
    } else if (lengthSelect1.selectedIndex === 2) {
      if (lengthSelect2.selectedIndex === 0) {
        lengthAns2.innerText = dmToOther(lengthValue.value)[0] + " km";
      } else if (lengthSelect2.selectedIndex === 1) {
        lengthAns2.innerText = dmToOther(lengthValue.value)[1] + " m";
      } else if (lengthSelect2.selectedIndex === 3) {
        lengthAns2.innerText = dmToOther(lengthValue.value)[2] + " cm";
      } else if (lengthSelect2.selectedIndex === 4) {
        lengthAns2.innerText = dmToOther(lengthValue.value)[3] + " mm";
      } else if (lengthSelect2.selectedIndex === 5) {
        lengthAns2.innerText = dmToOther(lengthValue.value)[4] + " μm";
      } else if (lengthSelect2.selectedIndex === 6) {
        lengthAns2.innerText = dmToOther(lengthValue.value)[5] + " nm";
      } else if (lengthSelect2.selectedIndex === 7) {
        lengthAns2.innerText = dmToOther(lengthValue.value)[6] + " pm";
      } else if (lengthSelect2.selectedIndex === 8) {
        lengthAns2.innerText = dmToOther(lengthValue.value)[7] + " nmi";
      } else if (lengthSelect2.selectedIndex === 9) {
        lengthAns2.innerText = dmToOther(lengthValue.value)[8] + " mi";
      } else if (lengthSelect2.selectedIndex === 10) {
        lengthAns2.innerText = dmToOther(lengthValue.value)[9] + " yd";
      } else if (lengthSelect2.selectedIndex === 11) {
        lengthAns2.innerText = dmToOther(lengthValue.value)[10] + " ft";
      } else if (lengthSelect2.selectedIndex === 12) {
        lengthAns2.innerText = dmToOther(lengthValue.value)[11] + " in";
      } else if (lengthSelect2.selectedIndex === 13) {
        lengthAns2.innerText = dmToOther(lengthValue.value)[12] + " pc";
      } else if (lengthSelect2.selectedIndex === 14) {
        lengthAns2.innerText = dmToOther(lengthValue.value)[13] + " ld";
      } else if (lengthSelect2.selectedIndex === 15) {
        lengthAns2.innerText = dmToOther(lengthValue.value)[14] + " au";
      } else if (lengthSelect2.selectedIndex === 16) {
        lengthAns2.innerText = dmToOther(lengthValue.value)[15] + " ly";
      }
    } else if (lengthSelect1.selectedIndex === 3) {
      if (lengthSelect2.selectedIndex === 0) {
        lengthAns2.innerText = cmToOther(lengthValue.value)[0] + " km";
      } else if (lengthSelect2.selectedIndex === 1) {
        lengthAns2.innerText = cmToOther(lengthValue.value)[1] + " m";
      } else if (lengthSelect2.selectedIndex === 2) {
        lengthAns2.innerText = cmToOther(lengthValue.value)[2] + " dm";
      } else if (lengthSelect2.selectedIndex === 4) {
        lengthAns2.innerText = cmToOther(lengthValue.value)[3] + " mm";
      } else if (lengthSelect2.selectedIndex === 5) {
        lengthAns2.innerText = cmToOther(lengthValue.value)[4] + " μm";
      } else if (lengthSelect2.selectedIndex === 6) {
        lengthAns2.innerText = cmToOther(lengthValue.value)[5] + " nm";
      } else if (lengthSelect2.selectedIndex === 7) {
        lengthAns2.innerText = cmToOther(lengthValue.value)[6] + " pm";
      } else if (lengthSelect2.selectedIndex === 8) {
        lengthAns2.innerText = cmToOther(lengthValue.value)[7] + " nmi";
      } else if (lengthSelect2.selectedIndex === 9) {
        lengthAns2.innerText = cmToOther(lengthValue.value)[8] + " mi";
      } else if (lengthSelect2.selectedIndex === 10) {
        lengthAns2.innerText = cmToOther(lengthValue.value)[9] + " yd";
      } else if (lengthSelect2.selectedIndex === 11) {
        lengthAns2.innerText = cmToOther(lengthValue.value)[10] + " ft";
      } else if (lengthSelect2.selectedIndex === 12) {
        lengthAns2.innerText = cmToOther(lengthValue.value)[11] + " in";
      } else if (lengthSelect2.selectedIndex === 13) {
        lengthAns2.innerText = cmToOther(lengthValue.value)[12] + " pc";
      } else if (lengthSelect2.selectedIndex === 14) {
        lengthAns2.innerText = cmToOther(lengthValue.value)[13] + " ld";
      } else if (lengthSelect2.selectedIndex === 15) {
        lengthAns2.innerText = cmToOther(lengthValue.value)[14] + " au";
      } else if (lengthSelect2.selectedIndex === 16) {
        lengthAns2.innerText = cmToOther(lengthValue.value)[15] + " ly";
      }
    } else if (lengthSelect1.selectedIndex === 4) {
      if (lengthSelect2.selectedIndex === 0) {
        lengthAns2.innerText = mmToOther(lengthValue.value)[0] + " km";
      } else if (lengthSelect2.selectedIndex === 1) {
        lengthAns2.innerText = mmToOther(lengthValue.value)[1] + " m";
      } else if (lengthSelect2.selectedIndex === 2) {
        lengthAns2.innerText = mmToOther(lengthValue.value)[2] + " dm";
      } else if (lengthSelect2.selectedIndex === 3) {
        lengthAns2.innerText = mmToOther(lengthValue.value)[3] + " cm";
      } else if (lengthSelect2.selectedIndex === 5) {
        lengthAns2.innerText = mmToOther(lengthValue.value)[4] + " μm";
      } else if (lengthSelect2.selectedIndex === 6) {
        lengthAns2.innerText = mmToOther(lengthValue.value)[5] + " nm";
      } else if (lengthSelect2.selectedIndex === 7) {
        lengthAns2.innerText = mmToOther(lengthValue.value)[6] + " pm";
      } else if (lengthSelect2.selectedIndex === 8) {
        lengthAns2.innerText = mmToOther(lengthValue.value)[7] + " nmi";
      } else if (lengthSelect2.selectedIndex === 9) {
        lengthAns2.innerText = mmToOther(lengthValue.value)[8] + " mi";
      } else if (lengthSelect2.selectedIndex === 10) {
        lengthAns2.innerText = mmToOther(lengthValue.value)[9] + " yd";
      } else if (lengthSelect2.selectedIndex === 11) {
        lengthAns2.innerText = mmToOther(lengthValue.value)[10] + " ft";
      } else if (lengthSelect2.selectedIndex === 12) {
        lengthAns2.innerText = mmToOther(lengthValue.value)[11] + " in";
      } else if (lengthSelect2.selectedIndex === 13) {
        lengthAns2.innerText = mmToOther(lengthValue.value)[12] + " pc";
      } else if (lengthSelect2.selectedIndex === 14) {
        lengthAns2.innerText = mmToOther(lengthValue.value)[13] + " ld";
      } else if (lengthSelect2.selectedIndex === 15) {
        lengthAns2.innerText = mmToOther(lengthValue.value)[14] + " au";
      } else if (lengthSelect2.selectedIndex === 16) {
        lengthAns2.innerText = mmToOther(lengthValue.value)[15] + " ly";
      }
    } else if (lengthSelect1.selectedIndex === 5) {
      if (lengthSelect2.selectedIndex === 0) {
        lengthAns2.innerText = microMToOther(lengthValue.value)[0] + " km";
      } else if (lengthSelect2.selectedIndex === 1) {
        lengthAns2.innerText = microMToOther(lengthValue.value)[1] + " m";
      } else if (lengthSelect2.selectedIndex === 2) {
        lengthAns2.innerText = microMToOther(lengthValue.value)[2] + " dm";
      } else if (lengthSelect2.selectedIndex === 3) {
        lengthAns2.innerText = microMToOther(lengthValue.value)[3] + " cm";
      } else if (lengthSelect2.selectedIndex === 4) {
        lengthAns2.innerText = microMToOther(lengthValue.value)[4] + " mm";
      } else if (lengthSelect2.selectedIndex === 6) {
        lengthAns2.innerText = microMToOther(lengthValue.value)[5] + " nm";
      } else if (lengthSelect2.selectedIndex === 7) {
        lengthAns2.innerText = microMToOther(lengthValue.value)[6] + " pm";
      } else if (lengthSelect2.selectedIndex === 8) {
        lengthAns2.innerText = microMToOther(lengthValue.value)[7] + " nmi";
      } else if (lengthSelect2.selectedIndex === 9) {
        lengthAns2.innerText = microMToOther(lengthValue.value)[8] + " mi";
      } else if (lengthSelect2.selectedIndex === 10) {
        lengthAns2.innerText = microMToOther(lengthValue.value)[9] + " yd";
      } else if (lengthSelect2.selectedIndex === 11) {
        lengthAns2.innerText = microMToOther(lengthValue.value)[10] + " ft";
      } else if (lengthSelect2.selectedIndex === 12) {
        lengthAns2.innerText = microMToOther(lengthValue.value)[11] + " in";
      } else if (lengthSelect2.selectedIndex === 13) {
        lengthAns2.innerText = microMToOther(lengthValue.value)[12] + " pc";
      } else if (lengthSelect2.selectedIndex === 14) {
        lengthAns2.innerText = microMToOther(lengthValue.value)[13] + " ld";
      } else if (lengthSelect2.selectedIndex === 15) {
        lengthAns2.innerText = microMToOther(lengthValue.value)[14] + " au";
      } else if (lengthSelect2.selectedIndex === 16) {
        lengthAns2.innerText = microMToOther(lengthValue.value)[15] + " ly";
      }
    } else if (lengthSelect1.selectedIndex === 6) {
      if (lengthSelect2.selectedIndex === 0) {
        lengthAns2.innerText = nmToOther(lengthValue.value)[0] + " km";
      } else if (lengthSelect2.selectedIndex === 1) {
        lengthAns2.innerText = nmToOther(lengthValue.value)[1] + " m";
      } else if (lengthSelect2.selectedIndex === 2) {
        lengthAns2.innerText = nmToOther(lengthValue.value)[2] + " dm";
      } else if (lengthSelect2.selectedIndex === 3) {
        lengthAns2.innerText = nmToOther(lengthValue.value)[3] + " cm";
      } else if (lengthSelect2.selectedIndex === 4) {
        lengthAns2.innerText = nmToOther(lengthValue.value)[4] + " mm";
      } else if (lengthSelect2.selectedIndex === 5) {
        lengthAns2.innerText = nmToOther(lengthValue.value)[5] + " μm";
      } else if (lengthSelect2.selectedIndex === 7) {
        lengthAns2.innerText = nmToOther(lengthValue.value)[6] + " pm";
      } else if (lengthSelect2.selectedIndex === 8) {
        lengthAns2.innerText = nmToOther(lengthValue.value)[7] + " nmi";
      } else if (lengthSelect2.selectedIndex === 9) {
        lengthAns2.innerText = nmToOther(lengthValue.value)[8] + " mi";
      } else if (lengthSelect2.selectedIndex === 10) {
        lengthAns2.innerText = nmToOther(lengthValue.value)[9] + " yd";
      } else if (lengthSelect2.selectedIndex === 11) {
        lengthAns2.innerText = nmToOther(lengthValue.value)[10] + " ft";
      } else if (lengthSelect2.selectedIndex === 12) {
        lengthAns2.innerText = nmToOther(lengthValue.value)[11] + " in";
      } else if (lengthSelect2.selectedIndex === 13) {
        lengthAns2.innerText = nmToOther(lengthValue.value)[12] + " pc";
      } else if (lengthSelect2.selectedIndex === 14) {
        lengthAns2.innerText = nmToOther(lengthValue.value)[13] + " ld";
      } else if (lengthSelect2.selectedIndex === 15) {
        lengthAns2.innerText = nmToOther(lengthValue.value)[14] + " au";
      } else if (lengthSelect2.selectedIndex === 16) {
        lengthAns2.innerText = nmToOther(lengthValue.value)[15] + " ly";
      }
    } else if (lengthSelect1.selectedIndex === 7) {
      if (lengthSelect2.selectedIndex === 0) {
        lengthAns2.innerText = pmToOther(lengthValue.value)[0] + " km";
      } else if (lengthSelect2.selectedIndex === 1) {
        lengthAns2.innerText = pmToOther(lengthValue.value)[1] + " m";
      } else if (lengthSelect2.selectedIndex === 2) {
        lengthAns2.innerText = pmToOther(lengthValue.value)[2] + " dm";
      } else if (lengthSelect2.selectedIndex === 3) {
        lengthAns2.innerText = pmToOther(lengthValue.value)[3] + " cm";
      } else if (lengthSelect2.selectedIndex === 4) {
        lengthAns2.innerText = pmToOther(lengthValue.value)[4] + " mm";
      } else if (lengthSelect2.selectedIndex === 5) {
        lengthAns2.innerText = pmToOther(lengthValue.value)[5] + " μm";
      } else if (lengthSelect2.selectedIndex === 6) {
        lengthAns2.innerText = pmToOther(lengthValue.value)[6] + " nm";
      } else if (lengthSelect2.selectedIndex === 8) {
        lengthAns2.innerText = pmToOther(lengthValue.value)[7] + " nmi";
      } else if (lengthSelect2.selectedIndex === 9) {
        lengthAns2.innerText = pmToOther(lengthValue.value)[8] + " mi";
      } else if (lengthSelect2.selectedIndex === 10) {
        lengthAns2.innerText = pmToOther(lengthValue.value)[9] + " yd";
      } else if (lengthSelect2.selectedIndex === 11) {
        lengthAns2.innerText = pmToOther(lengthValue.value)[10] + " ft";
      } else if (lengthSelect2.selectedIndex === 12) {
        lengthAns2.innerText = pmToOther(lengthValue.value)[11] + " in";
      } else if (lengthSelect2.selectedIndex === 13) {
        lengthAns2.innerText = pmToOther(lengthValue.value)[12] + " pc";
      } else if (lengthSelect2.selectedIndex === 14) {
        lengthAns2.innerText = pmToOther(lengthValue.value)[13] + " ld";
      } else if (lengthSelect2.selectedIndex === 15) {
        lengthAns2.innerText = pmToOther(lengthValue.value)[14] + " au";
      } else if (lengthSelect2.selectedIndex === 16) {
        lengthAns2.innerText = pmToOther(lengthValue.value)[15] + " ly";
      }
    } else if (lengthSelect1.selectedIndex === 8) {
      if (lengthSelect2.selectedIndex === 0) {
        lengthAns2.innerText = nmiToOther(lengthValue.value)[0] + " km";
      } else if (lengthSelect2.selectedIndex === 1) {
        lengthAns2.innerText = nmiToOther(lengthValue.value)[1] + " m";
      } else if (lengthSelect2.selectedIndex === 2) {
        lengthAns2.innerText = nmiToOther(lengthValue.value)[2] + " dm";
      } else if (lengthSelect2.selectedIndex === 3) {
        lengthAns2.innerText = nmiToOther(lengthValue.value)[3] + " cm";
      } else if (lengthSelect2.selectedIndex === 4) {
        lengthAns2.innerText = nmiToOther(lengthValue.value)[4] + " mm";
      } else if (lengthSelect2.selectedIndex === 5) {
        lengthAns2.innerText = nmiToOther(lengthValue.value)[5] + " μm";
      } else if (lengthSelect2.selectedIndex === 6) {
        lengthAns2.innerText = nmiToOther(lengthValue.value)[6] + " nm";
      } else if (lengthSelect2.selectedIndex === 7) {
        lengthAns2.innerText = nmiToOther(lengthValue.value)[7] + " pm";
      } else if (lengthSelect2.selectedIndex === 9) {
        lengthAns2.innerText = nmiToOther(lengthValue.value)[8] + " mi";
      } else if (lengthSelect2.selectedIndex === 10) {
        lengthAns2.innerText = nmiToOther(lengthValue.value)[9] + " yd";
      } else if (lengthSelect2.selectedIndex === 11) {
        lengthAns2.innerText = nmiToOther(lengthValue.value)[10] + " ft";
      } else if (lengthSelect2.selectedIndex === 12) {
        lengthAns2.innerText = nmiToOther(lengthValue.value)[11] + " in";
      } else if (lengthSelect2.selectedIndex === 13) {
        lengthAns2.innerText = nmiToOther(lengthValue.value)[12] + " pc";
      } else if (lengthSelect2.selectedIndex === 14) {
        lengthAns2.innerText = nmiToOther(lengthValue.value)[13] + " ld";
      } else if (lengthSelect2.selectedIndex === 15) {
        lengthAns2.innerText = nmiToOther(lengthValue.value)[14] + " au";
      } else if (lengthSelect2.selectedIndex === 16) {
        lengthAns2.innerText = nmiToOther(lengthValue.value)[15] + " ly";
      }
    } else if (lengthSelect1.selectedIndex === 9) {
      if (lengthSelect2.selectedIndex === 0) {
        lengthAns2.innerText = miToOther(lengthValue.value)[0] + " km";
      } else if (lengthSelect2.selectedIndex === 1) {
        lengthAns2.innerText = miToOther(lengthValue.value)[1] + " m";
      } else if (lengthSelect2.selectedIndex === 2) {
        lengthAns2.innerText = miToOther(lengthValue.value)[2] + " dm";
      } else if (lengthSelect2.selectedIndex === 3) {
        lengthAns2.innerText = miToOther(lengthValue.value)[3] + " cm";
      } else if (lengthSelect2.selectedIndex === 4) {
        lengthAns2.innerText = miToOther(lengthValue.value)[4] + " mm";
      } else if (lengthSelect2.selectedIndex === 5) {
        lengthAns2.innerText = miToOther(lengthValue.value)[5] + " μm";
      } else if (lengthSelect2.selectedIndex === 6) {
        lengthAns2.innerText = miToOther(lengthValue.value)[6] + " nm";
      } else if (lengthSelect2.selectedIndex === 7) {
        lengthAns2.innerText = miToOther(lengthValue.value)[7] + " pm";
      } else if (lengthSelect2.selectedIndex === 8) {
        lengthAns2.innerText = miToOther(lengthValue.value)[8] + " nmi";
      } else if (lengthSelect2.selectedIndex === 10) {
        lengthAns2.innerText = miToOther(lengthValue.value)[9] + " yd";
      } else if (lengthSelect2.selectedIndex === 11) {
        lengthAns2.innerText = miToOther(lengthValue.value)[10] + " ft";
      } else if (lengthSelect2.selectedIndex === 12) {
        lengthAns2.innerText = miToOther(lengthValue.value)[11] + " in";
      } else if (lengthSelect2.selectedIndex === 13) {
        lengthAns2.innerText = miToOther(lengthValue.value)[12] + " pc";
      } else if (lengthSelect2.selectedIndex === 14) {
        lengthAns2.innerText = miToOther(lengthValue.value)[13] + " ld";
      } else if (lengthSelect2.selectedIndex === 15) {
        lengthAns2.innerText = miToOther(lengthValue.value)[14] + " au";
      } else if (lengthSelect2.selectedIndex === 16) {
        lengthAns2.innerText = miToOther(lengthValue.value)[15] + " ly";
      }
    } else if (lengthSelect1.selectedIndex === 10) {
      if (lengthSelect2.selectedIndex === 0) {
        lengthAns2.innerText = ydToOther(lengthValue.value)[0] + " km";
      } else if (lengthSelect2.selectedIndex === 1) {
        lengthAns2.innerText = ydToOther(lengthValue.value)[1] + " m";
      } else if (lengthSelect2.selectedIndex === 2) {
        lengthAns2.innerText = ydToOther(lengthValue.value)[2] + " dm";
      } else if (lengthSelect2.selectedIndex === 3) {
        lengthAns2.innerText = ydToOther(lengthValue.value)[3] + " cm";
      } else if (lengthSelect2.selectedIndex === 4) {
        lengthAns2.innerText = ydToOther(lengthValue.value)[4] + " mm";
      } else if (lengthSelect2.selectedIndex === 5) {
        lengthAns2.innerText = ydToOther(lengthValue.value)[5] + " μm";
      } else if (lengthSelect2.selectedIndex === 6) {
        lengthAns2.innerText = ydToOther(lengthValue.value)[6] + " nm";
      } else if (lengthSelect2.selectedIndex === 7) {
        lengthAns2.innerText = ydToOther(lengthValue.value)[7] + " pm";
      } else if (lengthSelect2.selectedIndex === 8) {
        lengthAns2.innerText = ydToOther(lengthValue.value)[8] + " nmi";
      } else if (lengthSelect2.selectedIndex === 9) {
        lengthAns2.innerText = ydToOther(lengthValue.value)[9] + " mi";
      } else if (lengthSelect2.selectedIndex === 11) {
        lengthAns2.innerText = ydToOther(lengthValue.value)[10] + " ft";
      } else if (lengthSelect2.selectedIndex === 12) {
        lengthAns2.innerText = ydToOther(lengthValue.value)[11] + " in";
      } else if (lengthSelect2.selectedIndex === 13) {
        lengthAns2.innerText = ydToOther(lengthValue.value)[12] + " pc";
      } else if (lengthSelect2.selectedIndex === 14) {
        lengthAns2.innerText = ydToOther(lengthValue.value)[13] + " ld";
      } else if (lengthSelect2.selectedIndex === 15) {
        lengthAns2.innerText = ydToOther(lengthValue.value)[14] + " au";
      } else if (lengthSelect2.selectedIndex === 16) {
        lengthAns2.innerText = ydToOther(lengthValue.value)[15] + " ly";
      }
    } else if (lengthSelect1.selectedIndex === 11) {
      if (lengthSelect2.selectedIndex === 0) {
        lengthAns2.innerText = ftToOther(lengthValue.value)[0] + " km";
      } else if (lengthSelect2.selectedIndex === 1) {
        lengthAns2.innerText = ftToOther(lengthValue.value)[1] + " m";
      } else if (lengthSelect2.selectedIndex === 2) {
        lengthAns2.innerText = ftToOther(lengthValue.value)[2] + " dm";
      } else if (lengthSelect2.selectedIndex === 3) {
        lengthAns2.innerText = ftToOther(lengthValue.value)[3] + " cm";
      } else if (lengthSelect2.selectedIndex === 4) {
        lengthAns2.innerText = ftToOther(lengthValue.value)[4] + " mm";
      } else if (lengthSelect2.selectedIndex === 5) {
        lengthAns2.innerText = ftToOther(lengthValue.value)[5] + " μm";
      } else if (lengthSelect2.selectedIndex === 6) {
        lengthAns2.innerText = ftToOther(lengthValue.value)[6] + " nm";
      } else if (lengthSelect2.selectedIndex === 7) {
        lengthAns2.innerText = ftToOther(lengthValue.value)[7] + " pm";
      } else if (lengthSelect2.selectedIndex === 8) {
        lengthAns2.innerText = ftToOther(lengthValue.value)[8] + " nmi";
      } else if (lengthSelect2.selectedIndex === 9) {
        lengthAns2.innerText = ftToOther(lengthValue.value)[9] + " mi";
      } else if (lengthSelect2.selectedIndex === 10) {
        lengthAns2.innerText = ftToOther(lengthValue.value)[10] + " yd";
      } else if (lengthSelect2.selectedIndex === 12) {
        lengthAns2.innerText = ftToOther(lengthValue.value)[11] + " in";
      } else if (lengthSelect2.selectedIndex === 13) {
        lengthAns2.innerText = ftToOther(lengthValue.value)[12] + " pc";
      } else if (lengthSelect2.selectedIndex === 14) {
        lengthAns2.innerText = ftToOther(lengthValue.value)[13] + " ld";
      } else if (lengthSelect2.selectedIndex === 15) {
        lengthAns2.innerText = ftToOther(lengthValue.value)[14] + " au";
      } else if (lengthSelect2.selectedIndex === 16) {
        lengthAns2.innerText = ftToOther(lengthValue.value)[15] + " ly";
      }
    } else if (lengthSelect1.selectedIndex === 12) {
      if (lengthSelect2.selectedIndex === 0) {
        lengthAns2.innerText = inchToOther(lengthValue.value)[0] + "km";
      } else if (lengthSelect2.selectedIndex === 1) {
        lengthAns2.innerText = inchToOther(lengthValue.value)[1] + " m";
      } else if (lengthSelect2.selectedIndex === 2) {
        lengthAns2.innerText = inchToOther(lengthValue.value)[2] + " dm";
      } else if (lengthSelect2.selectedIndex === 3) {
        lengthAns2.innerText = inchToOther(lengthValue.value)[3] + " cm";
      } else if (lengthSelect2.selectedIndex === 4) {
        lengthAns2.innerText = inchToOther(lengthValue.value)[4] + " mm";
      } else if (lengthSelect2.selectedIndex === 5) {
        lengthAns2.innerText = inchToOther(lengthValue.value)[5] + " μm";
      } else if (lengthSelect2.selectedIndex === 6) {
        lengthAns2.innerText = inchToOther(lengthValue.value)[6] + " nm";
      } else if (lengthSelect2.selectedIndex === 7) {
        lengthAns2.innerText = inchToOther(lengthValue.value)[7] + " pm";
      } else if (lengthSelect2.selectedIndex === 8) {
        lengthAns2.innerText = inchToOther(lengthValue.value)[8] + " nmi";
      } else if (lengthSelect2.selectedIndex === 9) {
        lengthAns2.innerText = inchToOther(lengthValue.value)[9] + " mi";
      } else if (lengthSelect2.selectedIndex === 10) {
        lengthAns2.innerText = inchToOther(lengthValue.value)[10] + " yd";
      } else if (lengthSelect2.selectedIndex === 11) {
        lengthAns2.innerText = inchToOther(lengthValue.value)[11] + " ft";
      } else if (lengthSelect2.selectedIndex === 13) {
        lengthAns2.innerText = inchToOther(lengthValue.value)[12] + " pc";
      } else if (lengthSelect2.selectedIndex === 14) {
        lengthAns2.innerText = inchToOther(lengthValue.value)[13] + " ld";
      } else if (lengthSelect2.selectedIndex === 15) {
        lengthAns2.innerText = inchToOther(lengthValue.value)[14] + " au";
      } else if (lengthSelect2.selectedIndex === 16) {
        lengthAns2.innerText = inchToOther(lengthValue.value)[15] + " ly";
      }
    } else if (lengthSelect1.selectedIndex === 13) {
      if (lengthSelect2.selectedIndex === 0) {
        lengthAns2.innerText = pcToOther(lengthValue.value)[0] + " km";
      } else if (lengthSelect2.selectedIndex === 1) {
        lengthAns2.innerText = pcToOther(lengthValue.value)[1] + " m";
      } else if (lengthSelect2.selectedIndex === 2) {
        lengthAns2.innerText = pcToOther(lengthValue.value)[2] + " dm";
      } else if (lengthSelect2.selectedIndex === 3) {
        lengthAns2.innerText = pcToOther(lengthValue.value)[3] + " cm";
      } else if (lengthSelect2.selectedIndex === 4) {
        lengthAns2.innerText = pcToOther(lengthValue.value)[4] + " mm";
      } else if (lengthSelect2.selectedIndex === 5) {
        lengthAns2.innerText = pcToOther(lengthValue.value)[5] + " μm";
      } else if (lengthSelect2.selectedIndex === 6) {
        lengthAns2.innerText = pcToOther(lengthValue.value)[6] + " nm";
      } else if (lengthSelect2.selectedIndex === 7) {
        lengthAns2.innerText = pcToOther(lengthValue.value)[7] + " pm";
      } else if (lengthSelect2.selectedIndex === 8) {
        lengthAns2.innerText = pcToOther(lengthValue.value)[8] + " nmi";
      } else if (lengthSelect2.selectedIndex === 9) {
        lengthAns2.innerText = pcToOther(lengthValue.value)[9] + " mi";
      } else if (lengthSelect2.selectedIndex === 10) {
        lengthAns2.innerText = pcToOther(lengthValue.value)[10] + " yd";
      } else if (lengthSelect2.selectedIndex === 11) {
        lengthAns2.innerText = pcToOther(lengthValue.value)[11] + " ft";
      } else if (lengthSelect2.selectedIndex === 12) {
        lengthAns2.innerText = pcToOther(lengthValue.value)[12] + " in";
      } else if (lengthSelect2.selectedIndex === 14) {
        lengthAns2.innerText = pcToOther(lengthValue.value)[13] + " ld";
      } else if (lengthSelect2.selectedIndex === 15) {
        lengthAns2.innerText = pcToOther(lengthValue.value)[14] + " au";
      } else if (lengthSelect2.selectedIndex === 16) {
        lengthAns2.innerText = pcToOther(lengthValue.value)[15] + " ly";
      }
    } else if (lengthSelect1.selectedIndex === 14) {
      if (lengthSelect2.selectedIndex === 0) {
        lengthAns2.innerText = ldToOther(lengthValue.value)[0] + " km";
      } else if (lengthSelect2.selectedIndex === 1) {
        lengthAns2.innerText = ldToOther(lengthValue.value)[1] + " m";
      } else if (lengthSelect2.selectedIndex === 2) {
        lengthAns2.innerText = ldToOther(lengthValue.value)[2] + " dm";
      } else if (lengthSelect2.selectedIndex === 3) {
        lengthAns2.innerText = ldToOther(lengthValue.value)[3] + " cm";
      } else if (lengthSelect2.selectedIndex === 4) {
        lengthAns2.innerText = ldToOther(lengthValue.value)[4] + " mm";
      } else if (lengthSelect2.selectedIndex === 5) {
        lengthAns2.innerText = ldToOther(lengthValue.value)[5] + " μm";
      } else if (lengthSelect2.selectedIndex === 6) {
        lengthAns2.innerText = ldToOther(lengthValue.value)[6] + " nm";
      } else if (lengthSelect2.selectedIndex === 7) {
        lengthAns2.innerText = ldToOther(lengthValue.value)[7] + " pm";
      } else if (lengthSelect2.selectedIndex === 8) {
        lengthAns2.innerText = ldToOther(lengthValue.value)[8] + " nmi";
      } else if (lengthSelect2.selectedIndex === 9) {
        lengthAns2.innerText = ldToOther(lengthValue.value)[9] + " mi";
      } else if (lengthSelect2.selectedIndex === 10) {
        lengthAns2.innerText = ldToOther(lengthValue.value)[10] + " yd";
      } else if (lengthSelect2.selectedIndex === 11) {
        lengthAns2.innerText = ldToOther(lengthValue.value)[11] + " ft";
      } else if (lengthSelect2.selectedIndex === 12) {
        lengthAns2.innerText = ldToOther(lengthValue.value)[12] + " in";
      } else if (lengthSelect2.selectedIndex === 13) {
        lengthAns2.innerText = ldToOther(lengthValue.value)[13] + " pc";
      } else if (lengthSelect2.selectedIndex === 15) {
        lengthAns2.innerText = ldToOther(lengthValue.value)[14] + " au";
      } else if (lengthSelect2.selectedIndex === 16) {
        lengthAns2.innerText = ldToOther(lengthValue.value)[15] + " ly";
      }
    } else if (lengthSelect1.selectedIndex === 15) {
      if (lengthSelect2.selectedIndex === 0) {
        lengthAns2.innerText = auToOther(lengthValue.value)[0] + " km";
      } else if (lengthSelect2.selectedIndex === 1) {
        lengthAns2.innerText = auToOther(lengthValue.value)[1] + " m";
      } else if (lengthSelect2.selectedIndex === 2) {
        lengthAns2.innerText = auToOther(lengthValue.value)[2] + " dm";
      } else if (lengthSelect2.selectedIndex === 3) {
        lengthAns2.innerText = auToOther(lengthValue.value)[3] + " cm";
      } else if (lengthSelect2.selectedIndex === 4) {
        lengthAns2.innerText = auToOther(lengthValue.value)[4] + " mm";
      } else if (lengthSelect2.selectedIndex === 5) {
        lengthAns2.innerText = auToOther(lengthValue.value)[5] + " μm";
      } else if (lengthSelect2.selectedIndex === 6) {
        lengthAns2.innerText = auToOther(lengthValue.value)[6] + " nm";
      } else if (lengthSelect2.selectedIndex === 7) {
        lengthAns2.innerText = auToOther(lengthValue.value)[7] + " pm";
      } else if (lengthSelect2.selectedIndex === 8) {
        lengthAns2.innerText = auToOther(lengthValue.value)[8] + "nmi";
      } else if (lengthSelect2.selectedIndex === 9) {
        lengthAns2.innerText = auToOther(lengthValue.value)[9] + " mi";
      } else if (lengthSelect2.selectedIndex === 10) {
        lengthAns2.innerText = auToOther(lengthValue.value)[10] + " yd";
      } else if (lengthSelect2.selectedIndex === 11) {
        lengthAns2.innerText = auToOther(lengthValue.value)[11] + " ft";
      } else if (lengthSelect2.selectedIndex === 12) {
        lengthAns2.innerText = auToOther(lengthValue.value)[12] + " in";
      } else if (lengthSelect2.selectedIndex === 13) {
        lengthAns2.innerText = auToOther(lengthValue.value)[13] + " pc";
      } else if (lengthSelect2.selectedIndex === 14) {
        lengthAns2.innerText = auToOther(lengthValue.value)[14] + " ld";
      } else if (lengthSelect2.selectedIndex === 16) {
        lengthAns2.innerText = auToOther(lengthValue.value)[15] + " ly";
      }
    } else if (lengthSelect1.selectedIndex === 16) {
      if (lengthSelect2.selectedIndex === 0) {
        lengthAns2.innerText = auToOther(lengthValue.value)[0] + " km";
      } else if (lengthSelect2.selectedIndex === 1) {
        lengthAns2.innerText = auToOther(lengthValue.value)[1] + " m";
      } else if (lengthSelect2.selectedIndex === 2) {
        lengthAns2.innerText = auToOther(lengthValue.value)[2] + " dm";
      } else if (lengthSelect2.selectedIndex === 3) {
        lengthAns2.innerText = auToOther(lengthValue.value)[3] + " cm";
      } else if (lengthSelect2.selectedIndex === 4) {
        lengthAns2.innerText = auToOther(lengthValue.value)[4] + " mm";
      } else if (lengthSelect2.selectedIndex === 5) {
        lengthAns2.innerText = auToOther(lengthValue.value)[5] + " μm";
      } else if (lengthSelect2.selectedIndex === 6) {
        lengthAns2.innerText = auToOther(lengthValue.value)[6] + " nm";
      } else if (lengthSelect2.selectedIndex === 7) {
        lengthAns2.innerText = auToOther(lengthValue.value)[7] + " pm";
      } else if (lengthSelect2.selectedIndex === 8) {
        lengthAns2.innerText = auToOther(lengthValue.value)[8] + " nmi";
      } else if (lengthSelect2.selectedIndex === 9) {
        lengthAns2.innerText = auToOther(lengthValue.value)[9] + " mi";
      } else if (lengthSelect2.selectedIndex === 10) {
        lengthAns2.innerText = auToOther(lengthValue.value)[10] + " yd";
      } else if (lengthSelect2.selectedIndex === 11) {
        lengthAns2.innerText = auToOther(lengthValue.value)[11] + " ft";
      } else if (lengthSelect2.selectedIndex === 12) {
        lengthAns2.innerText = auToOther(lengthValue.value)[12] + " in";
      } else if (lengthSelect2.selectedIndex === 13) {
        lengthAns2.innerText = auToOther(lengthValue.value)[13] + " pc";
      } else if (lengthSelect2.selectedIndex === 14) {
        lengthAns2.innerText = auToOther(lengthValue.value)[14] + " ld";
      } else if (lengthSelect2.selectedIndex === 15) {
        lengthAns2.innerText = auToOther(lengthValue.value)[15] + " au";
      }
    }
  }
  if (lengthValue.value == null) {
    lengthAns2.innerText = null;
  }
}
function mToOther(m) {
  let km = m / 1000;
  let dm = m * 10;
  let cm = m * 100;
  let mm = m * 1000;
  let microM = m * 10 ** 6;
  microM = microM.toExponential();
  let nm = m * 10 ** 9;
  nm = nm.toExponential();
  let pm = m * 10 ** 12;
  pm = pm.toExponential();
  let nmi = m / 1852;
  let mi = m / 1609.334;
  let yd = m / 0.9144;
  let ft = m / 0.3048;
  let inch = m / (0.3048 / 12);
  let pc = m / (3.0857 * 10 ** 16);
  let ld = m / (3.84399 * 10 ** 8);
  let au = m / (1.495978707 * 10 ** 11);
  au = au.toExponential();
  let ly = m / (9.4607 * 10 ** 15);
  ly = ly.toExponential();
  return [
    km,
    dm,
    cm,
    mm,
    microM,
    nm,
    pm,
    nmi,
    mi,
    yd,
    ft,
    inch,
    pc,
    ld,
    au,
    ly,
  ];
}
function kmToOther(km) {
  let m = km * 1000;
  let dm = mToOther(m)[1];
  let cm = mToOther(m)[2];
  let mm = mToOther(m)[3];
  let microM = mToOther(m)[4];
  let nm = mToOther(m)[5];
  let pm = mToOther(m)[6];
  let nmi = mToOther(m)[7];
  let mi = mToOther(m)[8];
  let yd = mToOther(m)[9];
  let ft = mToOther(m)[10];
  let inch = mToOther(m)[11];
  let pc = mToOther(m)[12];
  let ld = mToOther(m)[13];
  let au = mToOther(m)[14];
  let ly = mToOther(m)[15];
  return [m, dm, cm, mm, microM, nm, pm, nmi, mi, yd, ft, inch, pc, ld, au, ly];
}
function dmToOther(dm) {
  let m = dm / 10;
  let km = mToOther(m)[0];
  let cm = mToOther(m)[2];
  let mm = mToOther(m)[3];
  let microM = mToOther(m)[4];
  let nm = mToOther(m)[5];
  let pm = mToOther(m)[6];
  let nmi = mToOther(m)[7];
  let mi = mToOther(m)[8];
  let yd = mToOther(m)[9];
  let ft = mToOther(m)[10];
  let inch = mToOther(m)[11];
  let pc = mToOther(m)[12];
  let ld = mToOther(m)[13];
  let au = mToOther(m)[14];
  let ly = mToOther(m)[15];
  return [km, m, cm, mm, microM, nm, pm, nmi, mi, yd, ft, inch, pc, ld, au, ly];
}
function cmToOther(cm) {
  let m = cm / 100;
  let km = mToOther(m)[0];
  let dm = mToOther(m)[1];
  let mm = mToOther(m)[3];
  let microM = mToOther(m)[4];
  let nm = mToOther(m)[5];
  let pm = mToOther(m)[6];
  let nmi = mToOther(m)[7];
  let mi = mToOther(m)[8];
  let yd = mToOther(m)[9];
  let ft = mToOther(m)[10];
  let inch = mToOther(m)[11];
  let pc = mToOther(m)[12];
  let ld = mToOther(m)[13];
  let au = mToOther(m)[14];
  let ly = mToOther(m)[15];
  return [km, m, dm, mm, microM, nm, pm, nmi, mi, yd, ft, inch, pc, ld, au, ly];
}
function mmToOther(mm) {
  let m = mm / 1000;
  let km = mToOther(m)[0];
  let dm = mToOther(m)[1];
  let cm = mToOther(m)[2];
  let microM = mToOther(m)[4];
  let nm = mToOther(m)[5];
  let pm = mToOther(m)[6];
  let nmi = mToOther(m)[7];
  let mi = mToOther(m)[8];
  let yd = mToOther(m)[9];
  let ft = mToOther(m)[10];
  let inch = mToOther(m)[11];
  let pc = mToOther(m)[12];
  let ld = mToOther(m)[13];
  let au = mToOther(m)[14];
  let ly = mToOther(m)[15];
  return [km, m, dm, cm, microM, nm, pm, nmi, mi, yd, ft, inch, pc, ld, au, ly];
}
function microMToOther(microM) {
  let m = microM / 10 ** 6;
  let km = mToOther(m)[0];
  let dm = mToOther(m)[1];
  let cm = mToOther(m)[2];
  let mm = mToOther(m)[3];
  let nm = mToOther(m)[5];
  let pm = mToOther(m)[6];
  let nmi = mToOther(m)[7];
  let mi = mToOther(m)[8];
  let yd = mToOther(m)[9];
  let ft = mToOther(m)[10];
  let inch = mToOther(m)[11];
  let pc = mToOther(m)[12];
  let ld = mToOther(m)[13];
  let au = mToOther(m)[14];
  let ly = mToOther(m)[15];
  return [km, m, dm, cm, mm, nm, pm, nmi, mi, yd, ft, inch, pc, ld, au, ly];
}
function nmToOther(nm) {
  let m = nm / 10 ** 9;
  let km = mToOther(m)[0];
  let dm = mToOther(m)[1];
  let cm = mToOther(m)[2];
  let mm = mToOther(m)[3];
  let microM = mToOther(m)[4];
  let pm = mToOther(m)[6];
  let nmi = mToOther(m)[7];
  let mi = mToOther(m)[8];
  let yd = mToOther(m)[9];
  let ft = mToOther(m)[10];
  let inch = mToOther(m)[11];
  let pc = mToOther(m)[12];
  let ld = mToOther(m)[13];
  let au = mToOther(m)[14];
  let ly = mToOther(m)[15];
  return [km, m, dm, cm, mm, microM, pm, nmi, mi, yd, ft, inch, pc, ld, au, ly];
}
function pmToOther(pm) {
  let m = pm / 10 ** 12;
  let km = mToOther(m)[0];
  let dm = mToOther(m)[1];
  let cm = mToOther(m)[2];
  let mm = mToOther(m)[3];
  let microM = mToOther(m)[4];
  let nm = mToOther(m)[5];
  let nmi = mToOther(m)[7];
  let mi = mToOther(m)[8];
  let yd = mToOther(m)[9];
  let ft = mToOther(m)[10];
  let inch = mToOther(m)[11];
  let pc = mToOther(m)[12];
  let ld = mToOther(m)[13];
  let au = mToOther(m)[14];
  let ly = mToOther(m)[15];
  return [km, m, dm, cm, mm, microM, nm, nmi, mi, yd, ft, inch, pc, ld, au, ly];
}
function nmiToOther(nmi) {
  let m = nmi * 1852;
  let km = mToOther(m)[0];
  let dm = mToOther(m)[1];
  let cm = mToOther(m)[2];
  let mm = mToOther(m)[3];
  let microM = mToOther(m)[4];
  let nm = mToOther(m)[5];
  let pm = mToOther(m)[6];
  let mi = mToOther(m)[8];
  let yd = mToOther(m)[9];
  let ft = mToOther(m)[10];
  let inch = mToOther(m)[11];
  let pc = mToOther(m)[12];
  let ld = mToOther(m)[13];
  let au = mToOther(m)[14];
  let ly = mToOther(m)[15];
  return [km, m, dm, cm, mm, microM, nm, pm, mi, yd, ft, inch, pc, ld, au, ly];
}
function miToOther(mi) {
  let m = mi * 1609.334;
  let km = mToOther(m)[0];
  let dm = mToOther(m)[1];
  let cm = mToOther(m)[2];
  let mm = mToOther(m)[3];
  let microM = mToOther(m)[4];
  let nm = mToOther(m)[5];
  let pm = mToOther(m)[6];
  let nmi = mToOther(m)[7];
  let yd = mToOther(m)[9];
  let ft = mToOther(m)[10];
  let inch = mToOther(m)[11];
  let pc = mToOther(m)[12];
  let ld = mToOther(m)[13];
  let au = mToOther(m)[14];
  let ly = mToOther(m)[15];
  return [km, m, dm, cm, mm, microM, nm, pm, nmi, yd, ft, inch, pc, ld, au, ly];
}
function ydToOther(yd) {
  let m = yd * 0.9144;
  let km = mToOther(m)[0];
  let dm = mToOther(m)[1];
  let cm = mToOther(m)[2];
  let mm = mToOther(m)[3];
  let microM = mToOther(m)[4];
  let nm = mToOther(m)[5];
  let pm = mToOther(m)[6];
  let nmi = mToOther(m)[7];
  let mi = mToOther(m)[8];
  let ft = mToOther(m)[10];
  let inch = mToOther(m)[11];
  let pc = mToOther(m)[12];
  let ld = mToOther(m)[13];
  let au = mToOther(m)[14];
  let ly = mToOther(m)[15];
  return [km, m, dm, cm, mm, microM, nm, pm, nmi, mi, ft, inch, pc, ld, au, ly];
}
function ftToOther(ft) {
  let m = ft * 0.3048;
  let km = mToOther(m)[0];
  let dm = mToOther(m)[1];
  let cm = mToOther(m)[2];
  let mm = mToOther(m)[3];
  let microM = mToOther(m)[4];
  let nm = mToOther(m)[5];
  let pm = mToOther(m)[6];
  let nmi = mToOther(m)[7];
  let mi = mToOther(m)[8];
  let yd = mToOther(m)[9];
  let inch = mToOther(m)[11];
  let pc = mToOther(m)[12];
  let ld = mToOther(m)[13];
  let au = mToOther(m)[14];
  let ly = mToOther(m)[15];
  return [km, m, dm, cm, mm, microM, nm, pm, nmi, mi, yd, inch, pc, ld, au, ly];
}
function inchToOther(inch) {
  let m = inch * (0.3048 / 12);
  let km = mToOther(m)[0];
  let dm = mToOther(m)[1];
  let cm = mToOther(m)[2];
  let mm = mToOther(m)[3];
  let microM = mToOther(m)[4];
  let nm = mToOther(m)[5];
  let pm = mToOther(m)[6];
  let nmi = mToOther(m)[7];
  let mi = mToOther(m)[8];
  let yd = mToOther(m)[9];
  let ft = mToOther(m)[10];
  let pc = mToOther(m)[12];
  let ld = mToOther(m)[13];
  let au = mToOther(m)[14];
  let ly = mToOther(m)[15];
  return [km, m, dm, cm, mm, microM, nm, pm, nmi, mi, yd, ft, pc, ld, au, ly];
}
function pcToOther(pc) {
  let m = pc * (3.0857 * 10 ** 16);
  let km = mToOther(m)[0];
  let dm = mToOther(m)[1];
  let cm = mToOther(m)[2];
  let mm = mToOther(m)[3];
  let microM = mToOther(m)[4];
  let nm = mToOther(m)[5];
  let pm = mToOther(m)[6];
  let nmi = mToOther(m)[7];
  let mi = mToOther(m)[8];
  let yd = mToOther(m)[9];
  let ft = mToOther(m)[10];
  let inch = mToOther(m)[11];
  let ld = mToOther(m)[13];
  let au = mToOther(m)[14];
  let ly = mToOther(m)[15];
  return [km, m, dm, cm, mm, microM, nm, pm, nmi, mi, yd, ft, inch, ld, au, ly];
}
function ldToOther(ld) {
  let m = ld * (3.84399 * 10 ** 8);
  let km = mToOther(m)[0];
  let dm = mToOther(m)[1];
  let cm = mToOther(m)[2];
  let mm = mToOther(m)[3];
  let microM = mToOther(m)[4];
  let nm = mToOther(m)[5];
  let pm = mToOther(m)[6];
  let nmi = mToOther(m)[7];
  let mi = mToOther(m)[8];
  let yd = mToOther(m)[9];
  let ft = mToOther(m)[10];
  let inch = mToOther(m)[11];
  let pc = mToOther(m)[12];
  let au = mToOther(m)[14];
  let ly = mToOther(m)[15];
  return [km, m, dm, cm, mm, microM, nm, pm, nmi, mi, yd, ft, inch, pc, au, ly];
}
function auToOther(au) {
  let m = au * (1.495978707 * 10 ** 11);
  let km = mToOther(m)[0];
  let dm = mToOther(m)[1];
  let cm = mToOther(m)[2];
  let mm = mToOther(m)[3];
  let microM = mToOther(m)[4];
  let nm = mToOther(m)[5];
  let pm = mToOther(m)[6];
  let nmi = mToOther(m)[7];
  let mi = mToOther(m)[8];
  let yd = mToOther(m)[9];
  let ft = mToOther(m)[10];
  let inch = mToOther(m)[11];
  let pc = mToOther(m)[12];
  let ld = mToOther(m)[13];
  let ly = mToOther(m)[15];
  return [km, m, dm, cm, mm, microM, nm, pm, nmi, mi, yd, ft, inch, pc, ld, ly];
}
function lyToOther(ly) {
  let m = ly * (9.4607 * 10 ** 15);
  let km = mToOther(m)[0];
  let dm = mToOther(m)[1];
  let cm = mToOther(m)[2];
  let mm = mToOther(m)[3];
  let microM = mToOther(m)[4];
  let nm = mToOther(m)[5];
  let pm = mToOther(m)[6];
  let nmi = mToOther(m)[7];
  let mi = mToOther(m)[8];
  let yd = mToOther(m)[9];
  let ft = mToOther(m)[10];
  let inch = mToOther(m)[11];
  let pc = mToOther(m)[12];
  let ld = mToOther(m)[13];
  let au = mToOther(m)[14];
  return [km, m, dm, cm, mm, microM, nm, pm, nmi, mi, yd, ft, inch, pc, ld, au];
}

// ***************************** Length calculator end *****************************//

// ***************************** Data calculator start *****************************//
let dataUnit1 = document.querySelector("#dataUnit1");
let dataUnit2 = document.querySelector("#dataUnit2");
let dataValue = document.querySelector("#dataValue");
let dataAns = document.querySelector("#dataAns");
let dataAns2 = document.createElement("span");
dataAns.appendChild(dataAns2);
dataValue.addEventListener("input", dataCalculate);
dataUnit1.addEventListener("click", dataCalculate);
dataUnit2.addEventListener("click", dataCalculate);
function dataCalculate() {
  if (dataUnit1.selectedIndex === dataUnit2.selectedIndex) {
    if (dataUnit2.selectedIndex === 0) {
      dataAns2.innerText = dataValue.value + " B";
    } else if (dataUnit2.selectedIndex === 1) {
      dataAns2.innerText = dataValue.value + " b";
    } else if (dataUnit2.selectedIndex === 2) {
      dataAns2.innerText = dataValue.value + " KB";
    } else if (dataUnit2.selectedIndex === 3) {
      dataAns2.innerText = dataValue.value + " MB";
    } else if (dataUnit2.selectedIndex === 4) {
      dataAns2.innerText = dataValue.value + " GB";
    } else if (dataUnit2.selectedIndex === 5) {
      dataAns2.innerText = dataValue.value + " TB";
    } else if (dataUnit2.selectedIndex === 6) {
      dataAns2.innerText = dataValue.value + " PB";
    }
  } else {
    if (dataUnit1.selectedIndex === 0) {
      if (dataUnit2.selectedIndex === 1) {
        dataAns2.innerText = ByteToOther(dataValue.value)[0] + " b";
      } else if (dataUnit2.selectedIndex === 2) {
        dataAns2.innerText = ByteToOther(dataValue.value)[1] + " KB";
      } else if (dataUnit2.selectedIndex === 3) {
        dataAns2.innerText = ByteToOther(dataValue.value)[2] + " MB";
      } else if (dataUnit2.selectedIndex === 4) {
        dataAns2.innerText = ByteToOther(dataValue.value)[3] + " GB";
      } else if (dataUnit2.selectedIndex === 5) {
        dataAns2.innerText = ByteToOther(dataValue.value)[4] + " TB";
      } else if (dataUnit2.selectedIndex === 6) {
        dataAns2.innerText = ByteToOther(dataValue.value)[5] + " PB";
      }
    } else if (dataUnit1.selectedIndex === 1) {
      if (dataUnit2.selectedIndex === 0) {
        dataAns2.innerText = bitToOther(dataValue.value)[0] + " B";
      } else if (dataUnit2.selectedIndex === 2) {
        dataAns2.innerText = bitToOther(dataValue.value)[1] + " KB";
      } else if (dataUnit2.selectedIndex === 3) {
        dataAns2.innerText = bitToOther(dataValue.value)[2] + " MB";
      } else if (dataUnit2.selectedIndex === 4) {
        dataAns2.innerText = bitToOther(dataValue.value)[3] + " GB";
      } else if (dataUnit2.selectedIndex === 5) {
        dataAns2.innerText = bitToOther(dataValue.value)[4] + " TB";
      } else if (dataUnit2.selectedIndex === 6) {
        dataAns2.innerText = bitToOther(dataValue.value)[5] + " PB";
      }
    } else if (dataUnit1.selectedIndex === 2) {
      if (dataUnit2.selectedIndex === 0) {
        dataAns2.innerText = KbToOther(dataValue.value)[0] + " B";
      } else if (dataUnit2.selectedIndex === 1) {
        dataAns2.innerText = KbToOther(dataValue.value)[1] + " b";
      } else if (dataUnit2.selectedIndex === 3) {
        dataAns2.innerText = KbToOther(dataValue.value)[2] + " MB";
      } else if (dataUnit2.selectedIndex === 4) {
        dataAns2.innerText = KbToOther(dataValue.value)[3] + " GB";
      } else if (dataUnit2.selectedIndex === 5) {
        dataAns2.innerText = KbToOther(dataValue.value)[4] + " TB";
      } else if (dataUnit2.selectedIndex === 6) {
        dataAns2.innerText = KbToOther(dataValue.value)[5] + " PB";
      }
    } else if (dataUnit1.selectedIndex === 3) {
      if (dataUnit2.selectedIndex === 0) {
        dataAns2.innerText = MbToOther(dataValue.value)[0] + " B";
      } else if (dataUnit2.selectedIndex === 1) {
        dataAns2.innerText = MbToOther(dataValue.value)[1] + " b";
      } else if (dataUnit2.selectedIndex === 2) {
        dataAns2.innerText = MbToOther(dataValue.value)[2] + " KB";
      } else if (dataUnit2.selectedIndex === 4) {
        dataAns2.innerText = MbToOther(dataValue.value)[3] + " GB";
      } else if (dataUnit2.selectedIndex === 5) {
        dataAns2.innerText = MbToOther(dataValue.value)[4] + " TB";
      } else if (dataUnit2.selectedIndex === 6) {
        dataAns2.innerText = MbToOther(dataValue.value)[5] + " PB";
      }
    } else if (dataUnit1.selectedIndex === 4) {
      if (dataUnit2.selectedIndex === 0) {
        dataAns2.innerText = GbToOther(dataValue.value)[0] + " B";
      } else if (dataUnit2.selectedIndex === 1) {
        dataAns2.innerText = GbToOther(dataValue.value)[1] + " b";
      } else if (dataUnit2.selectedIndex === 2) {
        dataAns2.innerText = GbToOther(dataValue.value)[2] + " KB";
      } else if (dataUnit2.selectedIndex === 3) {
        dataAns2.innerText = GbToOther(dataValue.value)[3] + " MB";
      } else if (dataUnit2.selectedIndex === 5) {
        dataAns2.innerText = GbToOther(dataValue.value)[4] + " TB";
      } else if (dataUnit2.selectedIndex === 6) {
        dataAns2.innerText = GbToOther(dataValue.value)[5] + " PB";
      }
    } else if (dataUnit1.selectedIndex === 5) {
      if (dataUnit2.selectedIndex === 0) {
        dataAns2.innerText = TbToOther(dataValue.value)[0] + " B";
      } else if (dataUnit2.selectedIndex === 1) {
        dataAns2.innerText = TbToOther(dataValue.value)[1] + " b";
      } else if (dataUnit2.selectedIndex === 2) {
        dataAns2.innerText = TbToOther(dataValue.value)[2] + " KB";
      } else if (dataUnit2.selectedIndex === 3) {
        dataAns2.innerText = TbToOther(dataValue.value)[3] + " MB";
      } else if (dataUnit2.selectedIndex === 4) {
        dataAns2.innerText = TbToOther(dataValue.value)[4] + " GB";
      } else if (dataUnit2.selectedIndex === 6) {
        dataAns2.innerText = TbToOther(dataValue.value)[5] + " PB";
      }
    } else if (dataUnit1.selectedIndex === 6) {
      if (dataUnit2.selectedIndex === 0) {
        dataAns2.innerText = PbToOther(dataValue.value)[0] + " B";
      } else if (dataUnit2.selectedIndex === 1) {
        dataAns2.innerText = PbToOther(dataValue.value)[1] + " b";
      } else if (dataUnit2.selectedIndex === 2) {
        dataAns2.innerText = PbToOther(dataValue.value)[2] + " KB";
      } else if (dataUnit2.selectedIndex === 3) {
        dataAns2.innerText = PbToOther(dataValue.value)[3] + " MB";
      } else if (dataUnit2.selectedIndex === 4) {
        dataAns2.innerText = PbToOther(dataValue.value)[4] + " GB";
      } else if (dataUnit2.selectedIndex === 5) {
        dataAns2.innerText = PbToOther(dataValue.value)[5] + " TB";
      }
    }
  }
  if (dataValue.value == null) {
    dataAns2.innerText = null;
  }
}
function ByteToOther(B) {
  let bit = B * 8;
  let KB = B / 2 ** 10;
  let MB = B / 2 ** 20;
  MB = MB.toExponential();
  let GB = B / 2 ** 30;
  GB = GB.toExponential();
  let TB = B / 2 ** 40;
  TB = TB.toExponential();
  let PB = B / 2 ** 50;
  PB = PB.toExponential();
  return [bit, KB, MB, GB, TB, PB];
}
function bitToOther(bit) {
  let B = bit / 8;
  let KB = B / 2 ** 10;
  let MB = B / 2 ** 20;
  MB = MB.toExponential();
  let GB = B / 2 ** 30;
  GB = GB.toExponential();
  let TB = B / 2 ** 40;
  TB = TB.toExponential();
  let PB = B / 2 ** 50;
  PB = PB.toExponential();
  return [B, KB, MB, GB, TB, PB];
}
function KbToOther(KB) {
  let B = KB * 2 ** 10;
  let bit = B * 8;
  let MB = B / 2 ** 20;
  MB = MB.toExponential();
  let GB = B / 2 ** 30;
  GB = GB.toExponential();
  let TB = B / 2 ** 40;
  TB = TB.toExponential();
  let PB = B / 2 ** 50;
  PB = PB.toExponential();
  return [B, bit, MB, GB, TB, PB];
}
function MbToOther(MB) {
  let B = MB * 2 ** 20;
  let bit = B * 8;
  let KB = B / 2 ** 10;
  KB = KB.toExponential();
  let GB = B / 2 ** 30;
  GB = GB.toExponential();
  let TB = B / 2 ** 40;
  TB = TB.toExponential();
  let PB = B / 2 ** 50;
  PB = PB.toExponential();
  return [B, bit, KB, GB, TB, PB];
}
function GbToOther(GB) {
  let B = GB * 2 ** 30;
  B = B.toExponential();
  let bit = B * 8;
  bit = bit.toExponential();
  let KB = B / 2 ** 10;
  KB = KB.toExponential();
  let MB = B / 2 ** 20;
  MB = MB.toExponential();
  let TB = B / 2 ** 40;
  TB = TB.toExponential();
  let PB = B / 2 ** 50;
  PB = PB.toExponential();
  return [B, bit, KB, MB, TB, PB];
}
function TbToOther(TB) {
  let B = TB * 2 ** 40;
  B = B.toExponential();
  let bit = B * 8;
  bit = bit.toExponential();
  let KB = B / 2 ** 10;
  KB = KB.toExponential();
  let MB = B / 2 ** 20;
  MB = MB.toExponential();
  let GB = B / 2 ** 30;
  let PB = B / 2 ** 50;
  return [B, bit, KB, MB, GB, PB];
}
function PbToOther(PB) {
  let B = PB * 2 ** 50;
  B = B.toExponential();
  let bit = B * 8;
  bit = bit.toExponential();
  let KB = B / 2 ** 10;
  KB = KB.toExponential();
  let MB = B / 2 ** 20;
  MB = MB.toExponential();
  let GB = B / 2 ** 30;
  let TB = B / 2 ** 40;
  return [B, bit, KB, MB, GB, TB];
}

// ***************************** Data calculator end *****************************//

// ***************************** Discount calculator start *****************************//
let originalPrice = document.querySelector("#mainAmount");
let discount = document.querySelector("#discountPercent");
let finalPrice = document.querySelector("#finaprice");

originalPrice.addEventListener("input", discountValue);
discount.addEventListener("input", discountValue);

function discountValue() {
  let amount = originalPrice.value;
  let percentage = discount.value;
  let ans = amount - amount * (percentage / 100);
  let totalSave = amount - ans;
  finalPrice.innerHTML = `<b> ${ans} </b> &nbsp; &nbsp; You save:   ${totalSave}`;
}
// ***************************** Discount calculator end *****************************//

// ***************************** BMi calculator start *****************************//
function calculateBMI() {
  let weightUnit = document.querySelector("#weightUnit").value;
  let heightUnit = document.querySelector("#heightUnit").value;
  let weightValue = parseFloat(document.querySelector("#weightValue").value);
  let heightValue = parseFloat(document.querySelector("#heightValue").value);
  let bmi = 0;

  // Convert weight to kilograms if needed
  if (weightUnit === "lb") {
    weightValue = weightValue * 0.453592; // Convert pounds to kilograms
  }

  // Convert height to meters if needed
  if (heightUnit === "cm") {
    heightValue = heightValue / 100; // Convert centimeters to meters
  } else if (heightUnit === "ft") {
    heightValue = heightValue * 0.3048; // Convert feet to meters
  } else if (heightUnit === "in") {
    heightValue = heightValue * 0.0254; // Convert inches to meters
  }

  // Calculate BMI
  bmi = weightValue / heightValue ** 2;

  // Determine BMI classification
  let classification = "";
  if (bmi < 16.0) {
    classification = "Severely Underweight";
  } else if (bmi >= 16.0 && bmi < 17.0) {
    classification = "Moderately Underweight";
  } else if (bmi >= 17.0 && bmi < 18.5) {
    classification = "Mildly Underweight";
  } else if (bmi >= 18.5 && bmi < 25.0) {
    classification = "Normal weight";
  } else if (bmi >= 25.0 && bmi < 30.0) {
    classification = "Overweight";
  } else if (bmi >= 30.0 && bmi < 35.0) {
    classification = "Obese Class I (Moderate)";
  } else if (bmi >= 35.0 && bmi < 40.0) {
    classification = "Obese Class II (Severe)";
  } else if (bmi >= 40.0) {
    classification = "Obese Class III (Very severe)";
  }

  // Display the result
  document.querySelector("#bmiAns").innerText = `Your BMI is ${bmi.toFixed(
    2
  )} (${classification})`;
}

// ***************************** BMi calculator end *****************************//

// ***************************** Time calculator start *****************************//
let timeUnit1 = document.querySelector("#timeSelect1");
let timeUnit2 = document.querySelector("#timeSelect2");
let timeValue = document.querySelector("#timeValue");
let timeAns = document.querySelector("#timeAns");
let convertButton = document.querySelector("#convertButton");

let timeAns2 = document.createElement("span");
timeAns.appendChild(timeAns2);

convertButton.addEventListener("click", timeCalculate);
timeUnit1.addEventListener("click", timeCalculate);
timeUnit2.addEventListener("click", timeCalculate);
timeValue.addEventListener("input", timeCalculate);

function timeCalculate() {
  let value = parseFloat(timeValue.value);
  let fromUnit = timeUnit1.value;
  let toUnit = timeUnit2.value;

  if (isNaN(value)) {
    timeAns2.innerText = "Please enter a valid number.";
    return;
  }

  let conversionFactors = {
    "Year y": 31536000,
    "Week wk": 604800,
    "Day d": 86400,
    "Hour h": 3600,
    "Minute min": 60,
    "Second s": 1,
    "Milisecond ms": 0.001,
    "Microsecond µs": 0.000001,
    "Picosecond ps": 0.000000000001,
  };

  let resultInSeconds = value * conversionFactors[fromUnit];
  let result = resultInSeconds / conversionFactors[toUnit];

  timeAns2.innerText = result + " " + toUnit.split(" ")[1];
}
// ***************************** Time calculator end *****************************//

//****************************** GST calculator start *******************************//
let originalPriceInput = document.querySelector("#originalPrice");
let gstPercentSelect = document.querySelector("#gstPercent");
let finalPriceSpan = document.querySelector("#finalPrice");

originalPriceInput.addEventListener("input", calculateFinalPrice);
gstPercentSelect.addEventListener("change", calculateFinalPrice);

function calculateFinalPrice() {
  let originalPrice = originalPriceInput.value;
  let gstPercent = parseFloat(gstPercentSelect.value);

  // Calculate final price including GST
  let gstAmount = originalPrice * gstPercent;
  let finalPrice = parseFloat(originalPrice) + gstAmount;

  // Calculate CGST and SGST amounts (assuming both are half of GST)
  let cgstAmount = gstAmount / 2;
  let sgstAmount = gstAmount / 2;

  finalPriceSpan.innerHTML = `<b>${finalPrice.toFixed(
    2
  )}</b><br>CGST/SGST: ${cgstAmount.toFixed(2)}`;
}

//****************************** GST calculator start *******************************//
