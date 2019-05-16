import APIManager from "./dbCalls";

function signIn() {
    APIManager.getSignedIn("users")
        .then(users => {
            if (users.some(user => {
                const userInputPassword = document.getElementById("sign_in_password").value;
                const userInputName = document.getElementById("sign_in_username").value;
                const testName = user.username.trim().toLowerCase();
                const testPassword = user.password.trim().toLowerCase();
                if (testName === userInputName && testPassword === userInputPassword) {
                    sessionStorage.setItem("user", JSON.stringify(user))
                    return true
                }
            }) === false) {
                alert("User Not Found. Please Verify the Username and Password.")
            } else {
                document.getElementById("overlay_signin").style.display = "none"
            }
        })

}
export default signIn

