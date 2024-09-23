// REMOVING THE WELCOME MESSAGE AFTER A CERTAIN TIME

let message = document.querySelector(".message");

let messageTime = setInterval(()=>{
    message.style.opacity = "0"
}, 2000);
setTimeout(()=>{
    clearInterval(messageTime)
}, 2000)

// CATCHING THE INPUT DIV
let inputDiv = document.querySelector(".input");
// CATCHING THE ADD BUTTON
let addBtn = document.querySelector(".input button");
// CATCHING THE INPUT VALUE
let toInput = document.querySelector(".input input");
// CATCHING SECTION ELEMENT
let section = document.querySelector("section");
// ADDING EVENT LISTENER TO THE BUTTON THAT ADDS TO ITEMS TO THE LIST
addBtn.addEventListener("click", ()=>{
    if (toInput.value == "") {
        message.style.opacity = "1"
        message.style.background = "rgba(255, 0, 0, 0.1)";
        message.style.color = "red"
        message.style.textAlign = "center"
        message.innerHTML = "Please enter a Task"
        toInput.focus();
        let redTextTimer = setInterval(()=>{
            message.style.opacity = "0";
        }, 2000);
        setTimeout(()=>{
            clearInterval(redTextTimer)
        }, 2000);
        toInput.focus();
    } else if(toInput.value.trim() != "") {
        // THE NEW TASK BEING ADDED INSTANT MESSAGE
        message.style.opacity = "1"
        message.style.background = "lightblue";
        message.style.color = "blue"
        message.style.textAlign = "center"
        message.innerHTML = "A New Task is added succesfully"
        toInput.focus();
        let redTextTimer = setInterval(()=>{
            message.style.opacity = "0";
        }, 3000);
        setTimeout(()=>{
            clearInterval(redTextTimer)
        }, 3000);

        // GETTING THE SECTION IN MY HTML
        let listItems = document.querySelector("section");
        listItems.innerHTML += `<div class="listItem">
                                    <input class="radio" type="radio">
                                    <p>${toInput.value}</p>
                                    <div><button class="edit">Edit</button>
                                    <button class="del">Delete</button></div>
                                </div>`
        toInput.value = "";
        toInput.focus();

        // CATCHING THE DELETE BUTTON 
        let delBttn = section.querySelectorAll(".del");
        for (var i = 0; i < delBttn.length; i++) {
            delBttn[i].addEventListener("click", (e)=>{
                e.target.parentElement.parentElement.remove();
                // THE TASK BEING DELETED INSTANT MESSAGE
                message.style.opacity = "1"
                message.style.background = "rgba(255, 0, 0, 0.1)";
                message.style.color = "red"
                message.style.textAlign = "center"
                message.innerHTML = "Task deleted succesfully"
                toInput.focus();
                let delTimer = setInterval(()=>{
                    message.style.opacity = "0";
                }, 3000);
                setTimeout(()=>{
                    clearInterval(delTimer)
                }, 3000);
            })            
        }


        // CATCHING THE MAIN EDIT BUTTON
        let editBttnBig = document.querySelector(".edit-bttn");

        // CATCHING THE EDIT BUTTON IN THE LIST OF ITEMS 
        let editBttn = section.querySelectorAll(".edit");
        
        // CATCHING THE P TAG IN .listItem
        let pTag = section.querySelectorAll(".listItem p");
        for (var i = 0; i < editBttn.length; i++) {
            editBttn[i].addEventListener("click", ()=>{
                for (i = 0; i < pTag.length; i++) {
                    toInput.value = pTag[i].innerHTML;
                    editBttnBig.style.display = "block";
                    editBttnBig.addEventListener("click", ()=>{
                        for (i = 0; i < pTag.length; i++) {
                            pTag[i].innerHTML = toInput.value;
                            // alert("i dey work");
                        }
                    editBttnBig.style.display = "none";
                    addBtn.style.display = "block";
                    })
                }


                toInput.focus();
            })            
        }
        
        // CATCHING THE INPUT:RADIO
        let radioBttn = section.querySelectorAll(".radio");
        for (i = 0; i < radioBttn.length; i++) {
            radioBttn[i].addEventListener("click", ()=>{
                // THE TASK BEING COMPLETED INSTANT MESSAGE
                    message.style.opacity = "1"
                    message.style.background = "lightblue";
                    message.style.color = "blue"
                    message.style.textAlign = "center"
                    message.innerHTML = "Great job you have completed A task keep it up"
                    toInput.focus();
                    let clearTimer = setInterval(()=>{
                        message.style.opacity = "0";
                    }, 3000);
                    setTimeout(()=>{
                        clearInterval(clearTimer)
                    }, 3000);
    
                    if (radioBttn[i].checked == false) {
                        // pTag.style.textAlign = "right"
                        alert("by wema");
                    } else {
                        
                    }
            })
            
        }
        // for (var i = 0; i < radioBttn.length; i++) {
        //     if (radioBttn[i].checked == true) {
        //         
        //         alert("me me me");
        //     } else {
        //         // alert("oksay")
        //     }
        // }
    }
});



// CATCHING THE CLEAR ITEMS BUTTON
let clrItems = document.querySelector(".clear");

clrItems.addEventListener("click", ()=>{
    if (section.innerHTML == "") {
        message.style.opacity = "1";
        message.style.background = "rgba(255, 0, 0, 0.1)";
        message.style.color = "red";
        message.style.textAlign = "center";
        message.innerHTML = "There are no Tasks to clear, pls enter a new task in the box below";
        toInput.focus();
        let redTextTimer = setInterval(()=>{
            message.style.opacity = "0";
        }, 3000)
        setTimeout(()=>{
            clearInterval(redTextTimer)
        }, 3000)
    } else {
        // THE TASK BEING CLEARED INSTANT MESSAGE
        message.style.opacity = "1"
        message.style.background = "lightblue";
        message.style.color = "blue"
        message.style.textAlign = "center"
        message.innerHTML = "All Task are cleared succesfully."
        toInput.focus();
        let clearTimer = setInterval(()=>{
            message.style.opacity = "0";
        }, 3000);
        setTimeout(()=>{
            clearInterval(clearTimer)
        }, 3000);
        section.innerHTML = "";
    }
})

