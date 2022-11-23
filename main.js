function switch1() {
    window.location.href = "website2.html";
}
function switch2() {
    const user = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        birthday: document.getElementById('birdthday').value
    }

    localStorage.setItem('user', JSON.stringify(user));
    const user2 = JSON.parse(localStorage.getItem("user"))
    user2.name
    
    window.location.href = "website3.html";
}
function switch3() {
    window.location.href = "website4.html";
}
function loadname () {
    var startname = document.getElementById("finish")
    const user2 = JSON.parse(localStorage.getItem("user"))
    startname.innerHTML += user2.name;

}
function cutname() {
    var startname = document.getElementById("finish")
    const user2 = JSON.parse(localStorage.getItem("user"))
    var str = user2
    startname.innerHTML += str.slice(0,-4) 

}