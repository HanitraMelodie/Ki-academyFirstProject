// //get list of tasks
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then()
//       .then(json => console.log(json))

//function to get the tasks
async function fetchData(){
    let response= await fetch('https://jsonplaceholder.typicode.com/todos')
    let tasks= await response.json()
    let completedTasksFalse=tasks.filter(task=>task.completed==false)
    console.log(completedTasksFalse)
    return completedTasksFalse
}

//function to displays tasks on a webpage
async function displayTasks(){
    let tasksList=await fetchData()
    let taskList=document.getElementById("taskList")
    let taskTemplate=document.getElementById("taskTemplate")

   tasksList.forEach(task=>{
    //clone html structure
    let taskClone=taskTemplate.content.cloneNode(true)
    let taskTitle=taskClone.querySelector(".taskTitle")
    taskTitle.innerHTML=task.title
    taskList.appendChild(taskClone)
   })
}
displayTasks()
//function to add a task to the webpage
function createData(e){
    e.preventDefault()
    //get the elements
    let taskInput  =document.getElementById("taskInput")
    let taskList=document.getElementById("taskList")
    //create new elements
    let label = document.createElement("label");
	let updateButton = document.createElement("button");
	let deleteButton = document.createElement("button");
    let completeButton = document.createElement("button");
    label.innerHTML=taskInput.value
    taskList.appendChild(label)
 
    //add text to the new elements
    updateButton.innerText = "Update";
    completeButton.innerText = "Complete";
    deleteButton.innerText = "Delete";

    //appending
    taskList.appendChild(label)
    taskList.appendChild(updateButton);
    taskList.appendChild(completeButton);
	taskList.appendChild(deleteButton);
SendData()
}

//function to send the new adding task to the server
async function SendData(){

   let response=await fetch('https://jsonplaceholder.typicode.com/todos',{
    method:"POST",
    header:{
        "Content-Type":'application/json'
    },
    body: JSON.stringify({title:taskInput.value})
    })
    let data= await response.json()
   console.log(data)
}

let addButton= document.getElementById("addButton");
addButton.addEventListener("click", createData);

  




   
