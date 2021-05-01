async function verify() {

function getusername() {
    username = prompt("What is your Scratch Username?")
    if (prompt("Are you sure your username is " + username+"? (Y/N)")[0] == "y") {
     console.log("username is" + username)
    } else {
     getusername()
    }
}

getusername()

var num = Math.floor(Math.random()*999999+100000)
alert("Please type in the number " + num + " on https://scratch.mit.edu/projects/524196078/ and press OK on this alert so we can verify you")
a = await fetch("https://api.codetabs.com/v1/proxy/?quest=https://clouddata.scratch.mit.edu/logs?projectid=524196078&limit=1&offset=0")
a = await a.json()
verify = a[0].value

if (!(username == a[0].user)) { verify = 8742543587 }
console.log(verify)

while(!(verify == num)) {
var num = Math.floor(Math.random()*999999+100000)
alert("Oops, we couldn't verify you. Please try again. \n" + "Please type in the number " + num + " on https://scratch.mit.edu/projects/524196078/ and press OK on this alert so we can verify you")
a = await fetch("https://api.codetabs.com/v1/proxy/?quest=https://clouddata.scratch.mit.edu/logs?projectid=524196078&limit=1&offset=0")
a = await a.json()
verify = a[0].value

if (!(username == a[0].user)) { verify = 8742543587 }
console.log(verify)

}
alert("You are verified!")
}
