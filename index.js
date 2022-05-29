const input$$  = document.querySelector("input[class='formAdd__input']");
const addBtn$$ = document.getElementById("inputBtn");
const ul$$ = document.querySelector("ul");
const edtBtn$$ = document.getElementById("editBtn");


const addData = () => {
    const inputValue = input$$.value;

    const li$$ = document.createElement("li");
    li$$.classList.add("d-flex","tasks__ul-li", "align-items-center");
    

    const text$$ = document.createElement("p");
    text$$.textContent = inputValue;

    const button$$ = document.createElement("button");
    button$$.textContent = "Eliminar";
    button$$.classList.add("btn","btn-danger");
    button$$.setAttribute("onclick","deleteTask(this)");

    const editButton$$ = document.createElement("button");
    editButton$$.textContent = 'Editar';
    editButton$$.classList.add("btn","btn-warning");
    editButton$$.setAttribute("onclick","editTask(this)");

    const icon$$ = document.createElement("i");
    icon$$.classList.add("fa-solid", "fa-circle-arrow-right");

    
    li$$.appendChild(icon$$);
    li$$.appendChild(text$$);
    li$$.appendChild(button$$);
    li$$.appendChild(editButton$$);
    
    ul$$.appendChild(li$$);
    input$$.value = '';
}

addBtn$$.addEventListener("click", () =>{
    if(input$$.value!=''){
        addData();
    }else{
        alert("Debes de escribir una tarea para poder añadirla");
    }

});


const deleteTask = (element) => {
    element.parentNode.innerHTML = ``;
}


const updateTask = (liElem) => {
    edtBtn$$.addEventListener("click", () => {
        liElem.parentNode.querySelector("p").textContent = input$$.value;
        edtBtn$$.style.visibility = "hidden";
        addBtn$$.disabled = false;
        input$$.value = '';
    });
}

const editTask = (element) => {
    const liText = element.parentNode.querySelector("p").textContent;
    input$$.value = liText;
    addBtn$$.disabled = true;
    edtBtn$$.style.visibility = "visible";

    updateTask(element);
}

