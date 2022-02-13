//               =========================
//                     Log-in Form JS
//               ==========================


// button

document.getElementById('btn').addEventListener('click', function () {
    // email
    const emailInput = document.getElementById('email-input');
    const email = emailInput.value;

    // pass
    const passInput = document.getElementById('pass-input');
    const password = passInput.value;

    // condition

    if ((email == 'Manik + Amena') && (password == 'Love')) {
        window.location.href = 'matir-bank.html';
    }
})









//               ==========================
//                     Matir Bank JS
//               ==========================




// ==================================================
//       organised Normal js [From Jhankar Vai]
// ===================================================


// 1. deposit-button

document.getElementById('deposit-btn').addEventListener('click', function () {
    // deposit input
    const depositInput = document.getElementById('deposit-input');
    const depositValue = depositInput.value;
    const newDepositAmount = parseFloat(depositValue);

    // deposit balance
    const depositBalance = document.getElementById('deposit-balance');
    const depositBalanceValue = depositBalance.innerText;
    const previousDepositAmount = parseFloat(depositBalanceValue);

    depositBalance.innerText = previousDepositAmount + newDepositAmount;

    // update total balance after deposit
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceValue = totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalanceValue);

    totalBalance.innerText = previousTotalBalance + newDepositAmount;

    // clear the deposit input field
    depositInput.value = '';
})


// 2. withdraw button

document.getElementById('withdraw-btn').addEventListener('click', function () {
    // withdraw input
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawValue = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawValue);

    // withdraw balance
    const withdrawBalance = document.getElementById('withdraw-balance');
    const whithdrawBalanceValue = withdrawBalance.innerText;
    const previousWithdrawAmount = parseFloat(whithdrawBalanceValue);

    withdrawBalance.innerText = previousWithdrawAmount + newWithdrawAmount;

    // update total balance after withdraw
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceValue = totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalanceValue);

    totalBalance.innerText = previousTotalBalance - newWithdrawAmount;

    // clear the withdraw field
    withdrawInput.value = '';
})















// ==================================================
//               Manik Formula [Normal]
// ===================================================



// 1. Deposit button

document.getElementById('deposit-btn').addEventListener('click', function () {
    // button jader niye kaj korbe tader 'id' diye dhore ana hoiche
    const depositInput = document.getElementById('deposit-input');
    const depositBalance = document.getElementById('deposit-balance');
    const totalBalance = document.getElementById('total-balance');

    // dhore anar por tader 'value' ke number e convert kora hoiche
    const newDepositAmount = parseFloat(depositInput.value);
    const previousDepositAmount = parseFloat(depositBalance.innerText);
    const previousTotalBalance = parseFloat(totalBalance.innerText);

    // erpor jog kora hoiche
    depositBalance.innerText = previousDepositAmount + newDepositAmount;
    totalBalance.innerText = previousTotalBalance + newDepositAmount;

    // input field clear kora hoiche
    depositInput.value = '';
})


// 2. Withdraw-button

document.getElementById('withdraw-btn').addEventListener('click', function () {
    // button jader niye kaj korbe tader 'id' diye dhore ana hoiche
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawBalance = document.getElementById('withdraw-balance');
    const totalBalance = document.getElementById('total-balance');

    // dhore anar por tader 'value' ke number e convert kora hoiche
    const newWithdrawAmount = parseFloat(withdrawInput.value);
    const previousWithdrawAmount = parseFloat(withdrawBalance.innerText);
    const previousTotalBalance = parseFloat(totalBalance.innerText);

    // erpor jog biyog kora hoiche
    withdrawBalance.innerText = previousWithdrawAmount + newWithdrawAmount;
    totalBalance.innerText = previousTotalBalance - newWithdrawAmount;

    // input field clear kora hoiche
    withdrawInput.value = '';
})

















// ==============================================================
//       Organised functions JS for Bank [From Jhankar Vai]
// ===============================================================


// function - 1 : Input field [Deposit and withdraw]

function getInputValue(inputId) {
    // input field
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    const newInputAmount = parseFloat(inputValue);

    // clear the deposit input field
    inputField.value = '';

    return newInputAmount;
}


// function - 2 : Update Total Field [Total Deposit and Total Withdraw]

function updateTotalField(totalFieldId, newInputAmount) {
    // deposit balance
    const totalField = document.getElementById(totalFieldId);
    const totalFieldValue = totalField.innerText;
    const previousTotalAmount = parseFloat(totalFieldValue);

    totalField.innerText = previousTotalAmount + newInputAmount;
}


// *** get current balance of total balance

function getCurrentBalance() {
    const totalAccountBalance = document.getElementById('total-balance');
    const totalAccountBalanceValue = totalAccountBalance.innerText;
    const previousTotalBalance = parseFloat(totalAccountBalanceValue);
    return previousTotalBalance;
}


// function - 3 : Update Total Account Balance [After deposit and withdraw]

function totalAccountBalance(newInputAmount, isAdd) {
    const totalAccountBalance = document.getElementById('total-balance')

    // function call [current balance]
    const previousAccountBalance = getCurrentBalance();

    // condition to add or substract the balance
    if (isAdd == true) {
        totalAccountBalance.innerText = previousAccountBalance + newInputAmount;
    }
    else {
        totalAccountBalance.innerText = previousTotalBalance - newInputAmount;
    }
}


// 1. deposit-button

document.getElementById('deposit-btn').addEventListener('click', function () {

    // deposit input
    const newDepositAmount = getInputValue('deposit-input');

    // negative input jeno na ney tai ei condition

    if (newDepositAmount > 0) {
        // deposit balance
        updateTotalField('deposit-balance', newDepositAmount);

        // update total balance after deposit
        totalAccountBalance(newDepositAmount, true);
    }
})


// 2. withdraw button

document.getElementById('withdraw-btn').addEventListener('click', function () {
    // withdraw input
    const newWithdrawAmount = getInputValue('withdraw-input');

    // function call [current balance]
    const currentBalance = getCurrentBalance();

    // negative input & current balance er beshi withdraw input jeno na ney tai ei condition

    if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
        // deposit balance
        updateTotalField('deposit-balance', newDepositAmount);

        // update total balance after deposit
        totalAccountBalance(newDepositAmount, true);
    }

    // to show the error message [keu jodi balance er beshi withdraw amount dey]
    if (newWithdrawAmount > currentBalance) {
        alert('Your Current Amount is not sufficient');
    }
})











// ==============================================================
//              Manik-Formula [Organised Functions]
// ===============================================================



//function 1 : 'input field' [deposit-input & withdraw-input] theke ja pacchi take amra text theke number e convert kore nicchi

function inputNumber(inputField) {
    const inputText = document.getElementById(inputField);
    const inputNumber = parseFloat(inputText.value);

    // input field clear
    inputText.value = '';
    return inputNumber;
}


//function 2 : total field [total-deposit, total-withdraw & total-balace] er je inner text ache ei function e ese segula number hoye jabe & eder updated balance dekhabe!

function totalFieldNumber(previouseAmount, newInputAmount) {
    const totalField = document.getElementById(previouseAmount);
    const previousTotalAmount = parseFloat(totalField.innerText);
    const currentTotalAmount = previousTotalAmount + newInputAmount;

    totalField.innerText = currentTotalAmount;
}


// function 3
function substractBalance(previouseAmount, newInputAmount) {
    const previouseTotalBalance = document.getElementById(previouseAmount);
    const previouseBalanceAmount = parseFloat(previouseTotalBalance.innerText);
    const newTotalBalance = previouseBalanceAmount - newInputAmount;

    previouseTotalBalance.innerText = newTotalBalance;

    // jodio lagbena tao rakhlam
    /* 
    if (newTotalBalance >= 0) {
        previouseTotalBalance.innerText = newTotalBalance;
    } */
}



// button - 1 : Deposit button

document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = inputNumber('deposit-input');

    // negative input thekanor jonno
    if (depositInput > 0) {
        const newDepositBalance = totalFieldNumber('deposit-balance', depositInput);
        const newTotalBalance = totalFieldNumber('total-balance', depositInput);
    }
});


// button - 2 : withdraw button or withdraw event handler 

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = inputNumber('withdraw-input');

    // current balance er beshi input jeno na ney
    const currentBalance = parseFloat(document.getElementById('total-balance').innerText)
    if (currentBalance < withdrawInput) {
        alert('You have not sufficient amount');
        return;
    }

    // negative input thekanor jonno
    if (withdrawInput > 0) {
        const newWithdrawBalance = totalFieldNumber('withdraw-balance', withdrawInput);
        const newTotalBalance = substractBalance('total-balance', withdrawInput);
    }
});












// ==============================================================
//            Manik-Function (Modified by Amena)
// ===============================================================


// fn-1 : input field [deposit and withdraw]

function inputField(inputID) {
    const input = document.getElementById(inputID);
    const newInputAmount = parseFloat(input.value);

    // input field clear
    input.value = '';
    return newInputAmount;
}

// fn-2 : total field [deposit , withdraw , total Balance]

function updateTotalField(previousAmount, newInputAmount, isAdd) {
    const totalField = document.getElementById(previousAmount);
    const previousTotalAmount = parseFloat(totalField.innerText);
    if (isAdd == true) {
        const currentTotalAmount = previousTotalAmount + newInputAmount;
        totalField.innerText = currentTotalAmount;
    }
    else {
        const currentTotalAmount = previousTotalAmount - newInputAmount;
        totalField.innerText = currentTotalAmount;
    }

}


// btn-1 : deposit button

document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = inputField('deposit-input');
    debugger;
    // negative input thekanor jonno
    if (depositInput < 0 || isNaN(depositInput)) {
        alert('You put the wrong amount');
        return;
    }
    const newDepositBalance = updateTotalField('deposit-balance', depositInput, true);
    const newTotalAccountBalance = updateTotalField('total-balance', depositInput, true);
})


// btn-2 : Withdraw button

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = inputField('withdraw-input');

    // negative input & current balance er beshi jeno tulte na pare
    const currentBalance = parseFloat(document.getElementById('total-balance').innerText);
    if ((currentBalance < withdrawInput) || (withdrawInput < 0) || isNaN(withdrawInput)) {
        alert('You have not sufficient amount');
        return;
    }
    const newWithdrawBalance = updateTotalField('withdraw-balance', withdrawInput, true);
    const newTotalAccountBalance = updateTotalField('total-balance', withdrawInput, false);
})




