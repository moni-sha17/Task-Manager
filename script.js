const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");


addBtn.addEventListener("click", () => {
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span class="taskText">${taskText}</span>
        <button class="deleteBtn">❌</button>
    `;

    
    li.querySelector(".taskText").addEventListener("click", () => {
        li.classList.toggle("completed");
    });

   
    li.querySelector(".deleteBtn").addEventListener("click", () => {
        li.remove();
    });

    taskList.appendChild(li);
    input.value = "";
});
