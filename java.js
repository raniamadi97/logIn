var signUp = document.getElementById('linkCreateAccount');
var createAccountForm = document.getElementById('creatAccount');
var logInForm = document.querySelector('#logIn');
var signIn = document.querySelector('#linkLogIn');
var errorMsg= document.getElementById('errorMsg');


signUp.addEventListener('click', function () {
    logInForm.classList.add("form--hidden");
    createAccountForm.classList.remove("form--hidden");
});

signIn.addEventListener('click', function () {
    logInForm.classList.remove("form--hidden");
    createAccountForm.classList.add("form--hidden");
});

// Add and check the data
var userList = JSON.parse(localStorage.getItem("userinformation")) || [];

// ================ Get the input and add to the Array =============
var userName = document.getElementById('userName');
var userEmail = document.getElementById('userEmail2');
var userPass = document.getElementById('userPass2');

var formMessage = document.querySelector('.form__message');

function addInput() {
   

    // Add the object to the Array
   
    var userInfo = {
        name: userName.value.trim(),
        email: userEmail.value.trim(),
        password: userPass.value.trim(),
    };
    userList.push(userInfo);
    localStorage.setItem("userinformation", JSON.stringify(userList));

    // Clear previous error messages
    formMessage.textContent = "";

    // You may also want to clear the input fields after successful submission
    userName.value = "";
    userEmail.value = "";
    userPass.value = "";
}

// ============= Log In form ================


function checkLogin() {
    // Get references to HTML elements
    var loginEmail = document.getElementById('userEmail');
    var loginPassword = document.getElementById('passwordInput');

   


    // Get user input values
    var userEmail = loginEmail.value.trim();
    var userPassword = loginPassword.value.trim();

    // Retrieve user information from localStorage
    var userRecord = JSON.parse(localStorage.getItem("userinformation")) || [];
    console.log('User Record in localStorage:', userRecord);
    

    // Check if there is a user with the provided email and password
    var isLoginSuccessful = userRecord.some((user) => user.email === userEmail && user.password === userPassword);

    if (isLoginSuccessful) {
        // Display a success message
        // alert("Login successful");
        errorMsg.textContent= 'Login successful'

        // Find the current user
        var currentUser = userRecord.find((user) => user.email === userEmail && user.password === userPassword);

        // Store the username in sessionStorage
        sessionStorage.setItem('username', currentUser.name);

        // Redirect to a new page
        window.location.href = 'newpage.html';
    } else {
        // Display a failure message
        // alert("Login failed");
        errorMsg.textContent= 'Login failed'
    }
}


// // newpage.js


document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded event fired.');

    var username = sessionStorage.getItem('username');
    console.log('Username from sessionStorage:', username);

    var welcomeMessage = document.getElementById('welcomeMessage');
    console.log('welcomeMessage element:', welcomeMessage);

    if (welcomeMessage) {
        welcomeMessage.textContent = 'Welcome, ' + username + '!';
    } else {
        console.error('Element with ID "welcomeMessage" not found.');
        console.log('Redirecting to index.html');
        setTimeout(function () {
            window.location.href = 'index.html';
        }, 60000);
    }
});



