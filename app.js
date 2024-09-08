const loginDiv = document.getElementById("loginBox");
const login = document.getElementById("Login");
/**
 * to show login form on click
 */
function showLoginDiv() {
    signUpDiv.style.visibility = "hidden";
    loginDiv.style.visibility = "visible";
}
if(login) login.addEventListener("click", showLoginDiv);


// ------------------------------------------------

const loginButton = document.getElementById("login-form-submit");

const loginForm = document.getElementById("login_form");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "Shravan" && password === "shravan@gmail.com") {
    alert("You have successfully logged in.");
    window.location.replace("home.html");
  } else {
    alert("wrong id password");
  }
});



// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------

const closeLoginDiv = document.getElementById("closelogindiv");
/**
 * Function to hide login div
 */

function hideLoginDiv() {
    loginDiv.style.visibility = "hidden";
};


if(closeLoginDiv)closeLoginDiv.addEventListener('click' , hideLoginDiv);




// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------



const SwitchtoSignUp = document.getElementById("SwitchtoSignUp");
/**
 * switching from login to signup 
 */
function switchToSignUpFrom(){
    signUpDiv.style.visibility = "visible";
    loginDiv.style.visibility = "hidden";
}


if(SwitchtoSignUp)SwitchtoSignUp.addEventListener("click", switchToSignUpFrom);




// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------



const switchToLogin = document.getElementById("switchToLogin");
/**
 * Switching  form to signup to login 
 */

function switchLoginFrom(){
    signUpDiv.style.visibility = "hidden";
    loginDiv.style.visibility = "visible";
}

if(switchToLogin)switchToLogin.addEventListener("click", switchLoginFrom);





// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------


const updateFormbutton = document.getElementById("updateFormbutton");
