# Shopping list
## Michał Kowalczyk

This is my shopping list tool, which helps you write down what you want to buy.

You can freely remove and add tasks, using buttons with emojis, so it's also user friendly. Here is a part from my js code, containing functions for removing and adding tasks:

```
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
        tasks[index].done = !tasks[index].done;
        render();
    }
```
![animation](gif/Animation.gif)
Link for my website: https://hirazuku.github.io/lista-zakup-w/