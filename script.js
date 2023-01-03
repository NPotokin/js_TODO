// First lets assign variables

let input = document.getElementById("input");
//let addButton = document.getElementById("addBtn");
//let doneBxtton = document.getElementById("doneBtn");
//let goal = document.getElementById("task");
//let deleteBcutton = document.getElementById("deleteBtn");

// Next create functions

function adding() {
    if (input.value == "") {
        alert("Type something!");
    } else {
        // Creating list item
       let goalItem = document.createElement("li");
       document.getElementsByTagName("ul").appendChild(goalItem);
       goalItem.className = "container flex flex-row mx-auto";

       // Creating done btn, para, delete btn
       let doneButton = document.createElement("input");
       goalItem.appendChild(doneButton);
       doneButton.id = "doneBtn";
       doneButton.type = "button";
       doneButton.value = "Done";
       doneButton.className = "rounded-full bg-emerald-300 hover:bg-emerald-500 text-gray-700 text-xl font-semibold m-3 px-6 py-1";

       let goal = document.createElement("p");
       goalItem.appendChild(goal);
        goal.id = "task";
        goal.className = "w-max rounded-xl bg-gray-200 text-gray-700 text-xl font-semibold m-3 px-6 py-1";
        goal.innerHTML = input.value;

        let deleteButton = document.createElement("input");
        goalItem.appendChild(deleteButton);
       doneButton.id = "deleteBtn";
       doneButton.type = "button";
       doneButton.value = "Delete";
       doneButton.className = "rounded-full bg-red-300 hover:bg-red-500 text-gray-700 text-xl font-semibold m-3 px-6 py-1";
        
    
        input.value = "";
    } 
}

//addButton.addEventListener("click", function(){
//    goal.innerHTML = input.value;
//})