 function addItem() {
            const inputField = document.getElementById("test");
            const inputValue = inputField.value;

            if (inputValue === '') {
                alert("Please enter a task.");
                return;
            }

            const todoList = document.getElementById("todo-list");

            const todoItem = document.createElement("div");
            todoItem.className = "todo-item";

            const taskText = document.createElement("span");
            taskText.innerText = inputValue;
            taskText.className = "task-text";

            const editButton = document.createElement("button");
            editButton.innerText = "Edit";
            editButton.onclick = function () {
                editItem(taskText);
            };

            const deleteButton = document.createElement("button");
            deleteButton.innerText = "Delete";
            deleteButton.onclick = function () {
                deleteItem(todoItem);
            };

            const buttonGroup = document.createElement("div");
            buttonGroup.className = "btn-group";
            buttonGroup.appendChild(editButton);
            buttonGroup.appendChild(deleteButton);

            todoItem.appendChild(taskText);
            todoItem.appendChild(buttonGroup);

            todoList.appendChild(todoItem);

            inputField.value = '';
        }

        function deleteItem(item) {
            item.remove();
        }

        function editItem(taskText) {
            const newValue = prompt("Edit your task:", taskText.innerText);
            if (newValue !== null) {
                taskText.innerText = newValue;
            }
        }