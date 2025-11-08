let password = document.getElementById('password')
let remove = document.getElementsByClassName('remove')
let copied = document.getElementById('copy')
let generate = document.getElementById('generate')
let save = document.getElementById('save')
let table = document.getElementById('table')
let clear = document.getElementById('cleartable')
let row = 0

function generatepassword() {
    let passwordlength = 8
    let generatedpassword = ''
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for (let i = 0; i < passwordlength; i++) {
        let random = Math.floor(Math.random() * chars.length);
        generatedpassword += chars.substring(random, random + 1)
    }
    password.innerHTML = generatedpassword
}

function copypassword() {
    navigator.clipboard.writeText(password.innerHTML)
}

function load() {
    let previousdata = localStorage.getItem('tabledata')
    if (previousdata != null) {
        table.innerHTML = previousdata
    }
    for (let i = 0; i < remove.length; i++) {
        remove[i].addEventListener('click', removerow)
    }
    row = remove.length
}

function addrow() {
    let username = prompt('Enter username')
    if (username) {
        let newrow = '<ul class="row">   <li class="username">' + username + '</li>   <li class="passwords">' + password.innerHTML + '</li>   <button class="remove">X</button>   </ul>'
        table.innerHTML += newrow
        localStorage.setItem('tabledata', table.innerHTML)
        remove[row].addEventListener('click', removerow)
        row += 1
    } else {
        alert('Username cannot be empty')
    }
}

function removerow(e) {
    if (confirm("Are you sure you want to delete this password?")) {
        e.target.parentElement.remove()
        localStorage.setItem('tabledata', table.innerHTML)
    }
}

function cleartable() {
    if (confirm("Are you sure you want to delete all passwords?")) {
        table.innerHTML = ""
        localStorage.clear()
    }
}

load()
generate.addEventListener('click', generatepassword)
copied.addEventListener('click', copypassword)
save.addEventListener('click', addrow)
clear.addEventListener('click', cleartable)