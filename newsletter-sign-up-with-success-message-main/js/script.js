var subscribe_button = document.getElementById("subscribe_button");
var form = document.getElementById("form");
var submit = window.sessionStorage['submit']

function collect_email() {
    var email = document.getElementById("user_email").value;

    // Store the value of the user's inputted email address in the Session Storage of the web browser with the key 'submit'
    window.sessionStorage['submit'] = email

    if (window.sessionStorage['submit'] == "") {
        return undefined
    } else {
        return
    }
}

// If submit is not empty, set the display of the sign_up section to 'none' and the success section to 'block'
if (submit != undefined) {
    var sign_up_page = document.getElementById("sign_up");
    var success_page = document.getElementById("success");

    // Set the value of submit as the inner HTML of the span element within the success class
    document.getElementById("insert_email").innerHTML += submit

    sign_up_page.style.display = "none"
    success_page.style.display = "block"
} else {
}

var dismiss_button = document.getElementById("dismiss_button")

// If dismiss button is clicked, set the value of submit in the Session Storage to undefined and the display of the sign_up section to 'flex' and the success section to 'none' and clear the Session Storage
function dismiss() {
    window.sessionStorage['submit'] = undefined
    var sign_up_page = document.getElementById("sign_up");
    var success_page = document.getElementById("success");
    sign_up_page.style.display = "flex"
    success_page.style.display = "none"
    sessionStorage.clear()
}

subscribe_button.addEventListener("click", collect_email)
dismiss_button.addEventListener("click", dismiss)