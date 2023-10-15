import "./styles/style.css";
import Topic from "./topic.js"

let listOfTasks = [];
let g_form =  document.getElementById("input-topic");

g_form.addEventListener("submit", (e) => {
    e.preventDefault()
    const g_title = document.getElementById("group-title").value;
    const g_priority = document.getElementById("group-priority").value;
    let topic = new Topic(g_title, g_priority)
    listOfTasks.push(topic)
    g_form.reset()
    makeElements()
})

function display(){
    let elements = "";
    for(let i in listOfTasks){
        console.log(listOfTasks[i])
        for(let [x,y] of Object.entries(listOfTasks[i])){
            if(x == "name"){
                elements += `<option value="${y}">${y}</option>`
            }  
        }
    }
    return elements
}

let input_container = document.getElementById("input-data");
let input = document.createElement("div")
input.classList.add("input")

function makeElements(){
    
    input.innerHTML = "";
    let crap = document.createElement("div")
    crap.innerHTML = `
        <form action="#" method="get" id="input-list">
              <fieldset>
                <legend>Add task: </legend>
              </fieldset>
              <fieldset>
                <label for="title">Task title:</label>
                <input type="text" id="title" name="title" required>
              </fieldset>
              <fieldset>
                <label for="description">Task description:</label>
                <input type="text" id="description" name="description" required>
              </fieldset>
              <fieldset>
                <label for="date">Due date:</label>
                <input type="date" id="date" name="date" required>
              </fieldset>
              <fieldset>
                <label for="priority">Task priority:</label>
                <select name="priority" id="priority" required>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </fieldset>
              <fieldset>
                <label for="group">Task priority:</label>
                <select name="group" id="group" required>
                    ${display()}
                </select>
              </fieldset>
              <fieldset>
                <button type="submit">Add</button>
              </fieldset>
            </form>
    `
        input.append(crap)
}

makeElements()
input_container.appendChild(input)


/*



input_container.appendChild(crap)

*/