{
    const tasks = [
    ];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        const field = document.querySelector(".js-newTask");
        field.value = "";
        render();
    }

    const removeTask = (index) => {
        tasks.splice(index, 1);
        render();
    }

    const doneTask = (index) => {
        const checked = document.querySelector("js-done");
        checked.value = checked;
        tasks[index].done = !tasks[index].done;
        render();
    }

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const doneButtons = document.querySelectorAll(".js-done");

        doneButtons.forEach((doneButton, index) => {
            doneButton.addEventListener("click", () => {
                doneTask(index);
            });
        });
    }

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li class="list__item list__item--row"
            ${task.done ? "style=\"text-decoration: line-through\"" : ""}>
            <input class="js-done button__done" type="checkbox">
            ${task.content}
            <button class="js-remove button__remove"></button>
            </li>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindEvents();
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        }
        
        addNewTask(newTaskContent);
    }

    const init = () => {
        render();

        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
    }

    init();
}