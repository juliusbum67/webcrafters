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