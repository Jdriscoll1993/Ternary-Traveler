import APIManager from "./dbCalls";

function createUser() {

    const name = document.getElementById("sign_up_username").value;
    const email = document.getElementById("sign_up_email").value;
    const password = document.getElementById("sign_up_password").value;
    const userObj = {
        username: `${name}`,
        email: `${email}`,
        password: `${password}`
    }

    APIManager.getSignedIn("users")
        .then(users => {
            // console.log(users)
            if (users.every(checkUniqueUser) === false) {
                alert("Username or email already in use try another username or email")
            } else {
                APIManager.postPlace("users", userObj)
                sessionStorage.setItem("user", JSON.stringify(userObj))
                document.getElementById("overlay_signup").style.display = "none"
            }
        })

    function checkUniqueUser(user) {
        const testName = user.username.trim().toLowerCase();
        const uniqueName = name.trim().toLowerCase();
        const testEmail = user.email.trim().toLowerCase()
        const uniqueEmail = email.trim().toLowerCase()
        return (testName !== uniqueName && testEmail !== uniqueEmail)
    }
}

export default createUser
