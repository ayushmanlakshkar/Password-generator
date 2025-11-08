function generatePassword() {
    const passwordLength = 8;
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let generatedPassword = '';

    for (let i = 0; i < passwordLength; i++) {
        let random = Math.floor(Math.random() * chars.length);
        generatedPassword += chars.substring(random, random + 1);
    }

    password.textContent = generatedPassword;
}

function copyPassword() {
    navigator.clipboard.writeText(password.textContent);
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
        let newRow = document.createElement('ul');
        newRow.classList.add('row');
        
        let usernameElement = document.createElement('li');
        usernameElement.classList.add('username');
        usernameElement.textContent = username;
        
        let passwordElement = document.createElement('li');
        passwordElement.classList.add('passwords');
        passwordElement.textContent = password.textContent;
        
        let removeButton = document.createElement('button');
        removeButton.classList.add('remove');
        removeButton.textContent = 'X';
        removeButton.addEventListener('click', removeRow);
        
        newRow.appendChild(usernameElement);
        newRow.appendChild(passwordElement);
        newRow.appendChild(removeButton);
        
        table.appendChild(newRow);
        localStorage.setItem('tabledata', table.innerHTML);
        
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