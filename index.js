
let input = document.querySelector("input");
let addBtn = document.querySelector(".add");
let task = document.querySelector(".task");

let todos = [];
let editIndex = null;

// RENDER FUNCTION
function render() {
    task.innerHTML = "";

    todos.forEach((item, index) => {
        task.innerHTML += `
            <div class="li">
                <h2>${item}</h2>
                <div>
                    <button class="edit" data-index="${index}">edit</button>
                    <button class="del" data-index="${index}">delete</button>
                </div>
            </div>
        `;
    });
}



addBtn.addEventListener("click", () => {

    let value = input.value.trim();
    if (!value) return;


    if (editIndex !== null) {
        todos[editIndex] = value;
        editIndex = null;
        addBtn.innerText = "Add task";
    }

    else {
        todos.push(value);
    }

    input.value = "";
    render();
});



task.addEventListener("click", (e) => {

    let index = e.target.dataset.index;
    console.dir(e.target);



    if (e.target.classList.contains("del")) {
        todos.splice(index, 1);
        render();
    }


    if (e.target.classList.contains("edit")) {
        input.value = todos[index];
        editIndex = index;
        addBtn.innerText = "Update task";
        // console.log(e.target.classList);

    }
});