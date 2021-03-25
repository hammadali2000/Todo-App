

function addTask(){
    if(input.value == ""){
        alert("Enter any task");
        list.innerHTML = "";
    }
    //  CREATE LI
    var li = document.createElement("li");
    li.setAttribute("id", "li")
    //  CREATE LI TEXT AND APPEND IN LI
    var liText = document.createTextNode(input.value);
    li.appendChild(liText);
    //  CREATE DELETE BUTTON
    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-danger ml-5")
    button.setAttribute("onclick", "deleteNode(this)")
    var btnText = document.createTextNode("DELETE")
    button.appendChild(btnText);

    // CREATE EDIT BUTTON
    var edit = document.createElement("button");
    edit.setAttribute("class", "btn btn-secondary")
    var editText = document.createTextNode("EDIT");
    edit.appendChild(editText);
    edit.setAttribute("onclick", "editBtn(this)");


    li.appendChild(button);
    li.appendChild(edit);
    var list = document.getElementById("list");
    list.setAttribute("class", "list");
    list.appendChild(li);
    
    clearInput();
    
}

function clearInput(){
    var input = document.getElementById("input");
    input.value = "";
}

function deleteTask(){
    var list = document.getElementById("list");
    list.innerHTML = "";
    console.log(firebase);
}

function deleteNode(e){
    e.parentNode.remove(e);
}

function editBtn(e){
    var newValue = prompt("Enter value");
    console.log(newValue);
    e.parentNode.firstChild.nodeValue = newValue;
}