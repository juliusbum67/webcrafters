var objPeople = [
    {
        username: "leander",
        password: "leander123"
    },
    {
        username: "julian",
        password: "julian123"
    }
]
function getInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    for (var i = 0; i < objPeople.length;i++) {
        if (username == objPeople[i].username && password == objPeople[i].password) {
            console.log(username + "is logged in.")
            window.location.href = "loggedin.html?username=" + encodeURIComponent(username);
            return
        }
    }
    console.log("incorrect username or password")
}

function register() {
    // Get the input values
    var reg_username = document.getElementById("reg_username").value;
    var reg_password = document.getElementById("reg_password").value;
    var reg_email = document.getElementById("reg_email").value;

    // Create a new user object
    var newUser = {
        username: reg_username,
        password: reg_password,
        email: reg_email
    };

    // Add the new user to the objPeople array
    objPeople.push(newUser);

    // Log the updated objPeople array
    console.log(objPeople);

    // Clear the input fields
    document.getElementById("reg_username").value = "";
    document.getElementById("reg_password").value = "";
    document.getElementById("reg_email").value = "";
}