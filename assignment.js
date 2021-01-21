//  GITHUB repo Link

// ---- km to meter converter ----
function kilometerToMeter(kmValue) {
    if (kmValue < 0) {
        return 'Please give a positive value.';
    }

    var meterValue = kmValue * 1000;
    return meterValue;
}
meterValue = kilometerToMeter(20);
console.log(meterValue);


// ---- budget calculator ----
function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
        return 'Please give a positive value to calculate your price.';
    }
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    totalPrice = watchPrice + phonePrice + laptopPrice;
    return totalPrice;
}
totalPrice = budgetCalculator(4, 5, 6);
console.log(totalPrice);



// ---- hotel cost -----
function hotelCost(days) {
    if (days < 0) {
        return 'Please give a positive value.';
    }
    if (days <= 10) {
        var cost = days * 100;
    }
    else if (days <= 20) {
        var firstPart = 10 * 100;
        var remaining = days - 10;
        var secondPart = remaining * 80;
        var cost = firstPart + secondPart;
    }
    else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = days - 20;
        var thirdPart = remaining * 50;
        var cost = firstPart + secondPart + thirdPart;
    }
    return cost;
}

var totalCost = hotelCost(25);
console.log(totalCost);



// ---- megafriend ----

function megaFriend(arr) {
    if (Array.isArray(arr) == false) {
        return 'Please give an ARRAY';
    }
    var maxLength = arr[0].length;
    for (var i = 0; i < arr.length; i++) {
        if(typeof(arr[i]) != 'string') {
            return 'Please give a string as an Array element. Problem Found in index: ' + i;
        }
        if (arr[i].length > maxLength) {
            maxLength = arr[i].length;
            var biggerName = arr[i];
        }
    }
    return biggerName;
}
var friends = ['abul', 'kabul', 'Fahim Shahriar', 'jiglu', 'mojnuu', 'modon'];
var biggerName = megaFriend(friends);
console.log(biggerName);
