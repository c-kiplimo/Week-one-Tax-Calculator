// Function to store bill items to localStorage
const storeBillItems = () => {
    //get user input
    const name = document.getElementById("item").value;
    const amount = document.getElementById("amount").value;

    //Grab localStorage items and update the list with new item
    let items = JSON.parse(localStorage.getItem('items') || '[]');
    localStorage.setItem('items', JSON.stringify([...items, { "id": Math.floor(Math.random() * 1000), "name": name, "amount": amount }]));
 }

// Function to get user salary input and store it in localStorage
const getUserSalary = () => {
    const salary = document.getElementById('salary').value;
    console.log(salary);
    localStorage.setItem('salary', JSON.stringify(salary));
}

// Function to retrieve all bill items to global scope
var items = JSON.parse(localStorage.getItem('items') || '[]');


// Function retrive bills items from localStorage
// generate bills table dynamically
const getStoredBillItems = () => {
    console.log("After: ", items);
    var temp = ""
    items.forEach((item) => {
        let id = item.id
        temp += "<tr>";
        temp += "<td>" + item.name + "</td>";
        temp += "<td>" + `KSH. ${item.amount}` + "</td>";
        temp += "<td>" + `<button class="btn btn-outline-danger" onclick="deleteExpense(${id})">Delete</button>` + "</td>";
        temp += "</tr>";
        
    });
    document.getElementById("data").innerHTML += temp;
}
getStoredBillItems();


// Function to calculate Bills
const calculateBills = () => {
    const salary = JSON.parse(localStorage.getItem('salary') || '0');
    const totalBill = items.reduce((sum, item) => sum + parseInt(item.amount), 0);
    let balance = parseInt(salary) - parseInt(totalBill);
    let twenty_percent_salary = (20/100) * salary;

    var temp = ""
    temp += "<tr>"
    temp += "<td>" + "Net Salary" + "</td>"
    temp += "<td>" + `KSH. ${salary}` + "</td>"
    temp += "</tr>"
    temp += "<tr>"
    temp += "<td>" + "Total Bill" + "</td>"
    temp += "<td>" + `KSH. ${totalBill}` + "</td>"
    temp += "</tr>"
    if(balance < twenty_percent_salary) {
        temp += "<tr>"
        temp += "<td>" + "Balance" + "</td>"
        temp += "<td class='bg-danger'>" + `KSH. ${balance}` + "</td>"
        temp += "</tr>"
    }else {
        temp += "<tr>"
        temp += "<td>" + "Balance" + "</td>"
        temp += "<td class='bg-success billmanager'>" + `KSH. ${balance}` + "</td>"
        temp += "</tr>"
    }
    
    document.getElementById("calculations").innerHTML += temp;
}
calculateBills();


// Functioon to delete an bill item
const deleteExpense = (id) => {
    let items = JSON.parse(localStorage.getItem('items') || '[]');
    let newItems = items.filter(item => item.id !== id);
    localStorage.setItem('items', JSON.stringify(newItems));
    console.log("ID: ", id, items);
    window.location.reload();
}