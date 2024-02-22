let form = document.getElementById("exampleModal");
let msg = document.getElementById("msg");
let taskTitle = document.getElementById("taskTitle");
let dueDate = document.getElementById("dueDate");
let descTask = document.getElementById("descTask");
let tasksList = document.getElementById("tasks");
let addButton = document.getElementById("add");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
});

let formValidation = () =>{
    if(taskTitle.value === ""){
        console.log("failure");
        msg.innerHTML = "Task Title Cannot Be Blank";
    }
    else{
        console.log("success");
        acceptData();
        addButton.setAttribute("data-bs-dismiss","modal")
        addButton.click();
        msg.innerHTML = "";
    }  
};

let data = {};

let acceptData = () =>{
    data["text"] = taskTitle.value;
    data["date"] = dueDate.value;
    data["description"] = descTask.value;
    console.log(data);
    createTask();
};

let createTask = () =>{
    tasksList.innerHTML += 
    `<div class="rounded px-4 py-3 my-3">
    <h5 class="text-white">${data.text}</h5>
    <span>${data.date}</span>
        <p>${data.description}</p>
        <span class="options d-flex align-items-center justify-content-center gap-2 flex-wrap">
            <i class="fas fa-edit" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick = "editData(this)"></i>
            <i class="fas fa-trash" onClick = "deleteData(this)"></i>
        </span>
    </div>`;
    resetForm();
};

let deleteData = (e) => {
    e.parentElement.parentElement.remove();
};

let editData = (e) => {
    let selectTask = e.parentElement.parentElement;
    taskTitle.value = selectTask.children[0].innerHTML;
    dueDate.value = selectTask.children[1].innerHTML;
    descTask.value = selectTask.children[2].innerHTML;
    selectTask.remove();
};

let resetForm = (e) => {
    taskTitle.value = "";
    dueDate.value = "";
    descTask.value = "";
}

