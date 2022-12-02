let input = document.getElementById('new-task-description')

document.addEventListener("DOMContentLoaded", () => {
    // your code here
    let form = document.querySelector('form')
    form.addEventListener('submit', (input)=>{
      e.preventDefault();
      form.reset();
      createTodoList(input)
       }) 
});

//this function creates our to do list
function createTodoList(input){
  //1.we create the element
  let li = document.createElement('li');
  let btn = document.createElement('button');

  //we add an event listener for handling the todo list delete
  btn.addEventListener('click',handleDelete)

  //we assign text to the element 
  li.textContent = input.value;
  btn.textContent = ' x';

  // we choose a parent element and append p to it
  let parent = document.getElementById('tasks')
  parent.appendChild(li);
  li.appendChild(btn);
}

// we create a function to delete done todo list items
//it handles the delete button event
function handleDelete(e){
  return e.target.parentNode.remove()
}