const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function(){

    if(input.value.trim() === ""){
        return;
    }

    const li = document.createElement("li");

    li.textContent = input.value;

    // Done Button
    const doneBtn = document.createElement("button");

    doneBtn.textContent = "Done";

    doneBtn.addEventListener("click", function(){
        li.classList.toggle("done");
    });

    // Delete Button
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function(){
        li.remove();
    });

    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    input.value = "";

    input.focus();

});