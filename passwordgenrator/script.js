function generatePassword() {
    const passwordLength = 8;
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let generatedPassword = '';
    
    for (let i = 0; i < passwordLength; i++) {
        let random = Math.floor(Math.random() * chars.length);
        generatedPassword += chars.substring(random, random + 1);
    }
    
    password.innerHTML = generatedPassword;
}

function copyPassword() {
    navigator.clipboard.writeText(password.innerHTML);
}

function load() {
    let previousData = localStorage.getItem('tabledata');
    
    if (previousData != null) {
        table.innerHTML = previousData;
    }
    
    for (let i = 0; i < remove.length; i++) {
        remove[i].addEventListener('click', removeRow);
    }
    
    row = remove.length;
}

function addRow() {
    let username = prompt('Enter username');
    
    if (username) {
        let newRow = '<ul class="row"><li class="username">' + username + '</li><li class="passwords">' + password.innerHTML + '</li><button class="remove">X</button></ul>';
        
        table.innerHTML += newRow;
        localStorage.setItem('tabledata', table.innerHTML);
        remove[row].addEventListener('click', removeRow);
        row += 1;
    } else {
        alert('Username cannot be empty');
    }
}

function removeRow(e) {
    if (confirm("Are you sure you want to delete this password?")) {
        e.target.parentElement.remove();
        localStorage.setItem('tabledata', table.innerHTML);
    }
}

function clearTable() {
    if (confirm("Are you sure you want to delete all passwords?")) {
        table.innerHTML = "";
        localStorage.clear();
    }
}

load();

generate.addEventListener('click', generatePassword);
copied.addEventListener('click', copyPassword);
save.addEventListener('click', addRow);
clear.addEventListener('click', clearTable);