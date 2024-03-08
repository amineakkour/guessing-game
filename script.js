console.log("%cThis Window is only for Website developers! Dont change anything", "color: red; font-size: 3em; background-color: white;")


document.body.addEventListener("keypress", (e) => {
    if (e.key == "Enter"){
        checkValue()
    }
})


var attempts = 0
let input = document.getElementsByClassName("input")[0]
let btn = document.getElementById("btn")
btn.addEventListener("click", checkValue)
let generatedNumber = Math.ceil(Math.random() * 100)

function checkValue(){
    let container = document.getElementsByClassName("container")[0]
    let notification = document.getElementById("notification")
    let alertsBox = document.getElementsByClassName("alerts-box")[0]

    if (isNaN(input.value) || input.value % 1 != 0){
        notification.style.opacity = "1"
        notification.textContent = "Please insert an interger number."
    }
    else{
        if (parseInt(input.value) >= 0 && parseInt(input.value) <= 100){
            attempts += 1
            notification.style.opacity = "0"
            
            let alert = document.createElement("div");
            alert.className = "alert"
            
            if(generatedNumber > parseInt(input.value)){
                alert.classList.add("danger")
                alert.textContent = attempts + ": It's more! Than " + input.value
                alertsBox.prepend(alert)

            }
            else if (generatedNumber < parseInt(input.value)){
                alert.classList.add("danger")
                alert.textContent = attempts + ": It's less! Than " + input.value
                alertsBox.prepend(alert)
            }
            else{
                alert.classList.add("success")
                alert.textContent = 
                "Congrats! You've found the right number: (" + input.value + ") -- attempts : " + attempts
                input.placeholder = "End of the game."
                alertsBox.prepend(alert)
                input.disabled = "true"
                btn.disabled = "true"
                notification.textContent = "Bravo!"
                notification.style.opacity = "1"
                notification.style.color="#71A621"
                
            }
            input.value = ""
        }
        else{
            notification.style.opacity = "1"
            notification.textContent = "Please choose a number between 0 and 100."
        }
    }
}
    