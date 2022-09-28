let newBills = document.getElementById('new-bills')

var billName = document.getElementById('bill-name')
var addNewBill = document.getElementById('add-new-bills')
var billAmount = document.getElementById('bill-amount')
var BalanceAmount = document.getElementById('balance-amt')

addNewBill.addEventListener('click', function () {
    var newBillName = document.createElement('h3')
    var newBillAmount = document.createElement('h3')

    newBills.append(newBillName)
    newBills.append(newBillAmount)

    newBillName.innerText = billName.value
    newBillAmount.innerText = billAmount.value

    newBillName.addEventListener('click', function () { 
        newBills.removeChild(newBillName)
        newBills.removeChild(newBillAmount)
       })

    BalanceAmount.innerHTML = BillNetpay.innerHTML - newBillAmount.innerHTML
})

