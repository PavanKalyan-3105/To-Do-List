// Get the form element
const form = document.querySelector("form");

// Handle the form submission
form.onsubmit = function () {
  // Get the new to-do text
  const newTodo = document.querySelector("#new-todo").value;

  // Create a new list item
  const todo = document.createElement("li");
  todo.innerHTML = `
        <input type="checkbox">
        <label>${newTodo}</label>
        <button><i class="fas fa-pen"></i>  Edit</button>
        <button><i class="fas fa-trash"></i>  Delete</button>`;
  todo.classList.add("todo");

  // Add the new to-do to the list
  document.querySelector("#todos").appendChild(todo);

  // Clear the input field
  document.querySelector("#new-todo").value = "";

  // Return false to prevent page refresh
  return false;
};

// Handle the "edit" and "delete" button clicks
document.querySelector("#todos").onclick = function (event) {
  if (event.target.textContent === "  Edit") {
    // Get the parent node of the button, which is the list item element
    const todo = event.target.parentNode;

    // Get the label element inside the list item
    const label = todo.querySelector("label");

    // Create an input element with the same value as the label
    const input = document.createElement("input");
    input.value = label.textContent;
    input.classList.add("edit-input");

    // Insert the input element before the label element
    todo.insertBefore(input, label);

    // Hide the label element
    label.style.display = "none";

    // Change the text of the button to "Save"
    event.target.textContent = "Save";
  } else if (event.target.textContent === "Save") {
    // Get the parent node of the button, which is the list item element
    const todo = event.target.parentNode;

    // Get the label element and input element inside the list item
    const label = todo.querySelector("label");
    const input = todo.querySelector(".edit-input");

    // Set the text of the label element to the value of the input element
    label.textContent = input.value;

    // Show the label element
    label.style.display = "block";

    // Remove the input element
    todo.removeChild(input);

    // Change the text of the button to "Edit"
    event.target.textContent = "Edit";
  } else if (event.target.textContent === "  Delete") {
    // Get the parent node of the button, which is the list item element
    const todo = event.target.parentNode;

    // Remove the list item element
    todo.remove();
  }
};