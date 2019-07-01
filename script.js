let apples = 0;
let bananas = 0;
let oranges = 0;
let totalBill = 0;
let wallet = 0;

function addApple() {
    document.getElementById("totalApples").value++;

    if (document.getElementById("total-bill").value > (document.getElementById("total-money").value)) {
        alert ("('Sorry, You dont have enough money to shop more !!");
    }

}

function minusApple() {
    document.getElementById("totalApples").value--;
}

function addOrange() {
    document.getElementById("totalOranges").value++;

    if (document.getElementById("total-bill").value > (document.getElementById("total-money").value)) {
        alert ("('Sorry, You dont have enough money to shop more !!");
    }

}

function minusOrange() {
    document.getElementById("totalOranges").value--;
}

function addBanana() {
    document.getElementById("totalBananas").value++;

    if (document.getElementById("total-bill").value > (document.getElementById("total-money").value)) {
        alert ("('Sorry, You dont have enough money to shop more !!");
    }

}

function minusBanana() {
    document.getElementById("totalBananas").value--;
}