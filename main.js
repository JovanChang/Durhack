// set default amount of money £100
function setcurrent() {
localStorage.setItem("current", "£100")

const current = document.getElementById("current")
current.textContent = localStorage.getItem("current")
}
window.onload = setcurrent;