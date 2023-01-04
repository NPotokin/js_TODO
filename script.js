// First lets assign variables
let input = document.getElementById("input");

// Creating Unordered List
const uList = document.createElement("ul");
document.body.append(uList);
uList.className = "mx-auto max-w-4xl w-1/2 h-96 bg-gray-400 container flex flex-col rounded-3xl p-3 my-3";

// Next create functions
function adding() {
    if (input.value == "") {
        alert("Type something!");
    } else {
        //Create list item
        const listItem = document.createElement("li");
        uList.appendChild(listItem);
        listItem.className = "container flex flex-row mx-auto";

        //Creating Done button
        const doneBtn = document.createElement("input");
        listItem.appendChild(doneBtn);
        doneBtn.id = "doneBtn";
        doneBtn.onclick = function(){
            goalText.innerHTML = "DONE!";
        }
        doneBtn.value = "V";
        doneBtn.type = "button";
        doneBtn.className = "rounded-full bg-emerald-300 hover:bg-emerald-500 text-gray-700 text-xl font-semibold m-3 px-6 py-1";
        
      
        // Creating goal text
        const goalText = document.createElement("p");
        listItem.appendChild(goalText);
        goalText.id = "task";
        goalText.className= "w-max rounded-xl bg-gray-200 text-gray-700 text-xl font-semibold m-3 px-6 py-1";
        goalText.innerText = input.value;
        
       
       
        //Creating Delete button
        const deleteBtn = document.createElement("input");
        listItem.appendChild(deleteBtn);
        deleteBtn.onclick = function(){listItem.remove()};
        deleteBtn.id = "deleteBtn";
        deleteBtn.value = "X";
        deleteBtn.type = "Button";
        deleteBtn.className = "rounded-full bg-red-300 hover:bg-red-500 text-gray-700 text-xl font-semibold m-3 px-6 py-1";
       
       
       input.value = "";
    } 
    
}


function deleting () {
    goalText.remove();
}


function finishing() {

}