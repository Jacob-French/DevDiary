console.log("The script is here");

const milestones = [];
const tasks = [];
const activeColor = '#ff66d6';
const defaultColor = 'rgba(255, 255, 255, 0.121)';
var activeMilestone = null;

//list of tasks
tasks[0] = {
    id: "task0",
    content_id: "task0_content",
    arrow_id: "task0_arrow",
    active: false,
    milestone: 0
}
tasks[1] = {
    id: "task1",
    content_id: "task1_content",
    arrow_id: "task1_arrow",
    active: false,
    milestone: 0
}
tasks[2] = {
    id: "task2",
    content_id: "task2_content",
    arrow_id: "task2_arrow",
    active: false,
    milestone: 0
}
tasks[3] = {
    id: "task3",
    content_id: "task3_content",
    arrow_id: "task3_arrow",
    active: false,
    milestone: 0
}
tasks[4] = {
    id: "task4",
    content_id: "task4_content",
    arrow_id: "task4_arrow",
    active: false,
    milestone: 0
}
tasks[5] = {
    id: "task5",
    content_id: "task5_content",
    arrow_id: "task5_arrow",
    active: false,
    milestone: 1
}

//list of milestones
milestones[0] = {
    element: document.getElementById("ms_html-css"),
    path: 'roadmap_tasks/html-css.html',
    active: false
}
milestones[1] = {
    element: document.getElementById("ms_javascript"),
    path: 'roadmap_tasks/javascript.html',
    active: false
}
milestones[2] = {
    element: document.getElementById("ms_react"),
    active: false
}
milestones[3] = {
    element: document.getElementById("ms_tailwind"),
    active: false
}
milestones[4] = {
    element: document.getElementById("ms_github"),
    active: false
}
milestones[5] = {
    element: document.getElementById("ms_project"),
    active: false
}
milestones[6] = {
    element: document.getElementById("ms_realworld"),
    active: false
}
milestones[7] = {
    element: document.getElementById("ms_portfolio"),
    active: false
}

activeMilestone = milestones[0];
activateElement(activeMilestone);

for (let i = 0; i < milestones.length; i ++){
    milestones[i].element.addEventListener('click', () => {
        activateElement(milestones[i]);
    });
}

function activateElement(element){
    //deactivate the current active milestone
    activeMilestone.element.style.borderBottomColor = defaultColor;
    activeMilestone.active = false;

    activeMilestone = element;
    activeMilestone.element.style.borderBottomColor = activeColor;
    activeMilestone.active = true;
    load_content(element.path, "content_container", populateTasks);
}

//This function is called once an element is activated and the html has been loaded into the content container
function populateTasks(){
    for(let i = 0; i < tasks.length; i ++){
        let task = tasks[i];
        //check task belongs to active milestone
        if(milestones[task.milestone].active){
            let task_el = document.getElementById(tasks[i].id);
            let content_el = document.getElementById(tasks[i].content_id);
            task_el.addEventListener("click", () => {
                toggleTask(tasks[i]);
            });
        }
    }
}

function toggleTask(task){
    let content_el = document.getElementById(task.content_id);
    let arrow_el = document.getElementById(task.arrow_id);

    if(task.active){
        content_el.style = "display: none";
        arrow_el.style = "transform: rotate(180deg)";
        task.active = false;
    }
    else{
        content_el.style = "display: block";
        arrow_el.style = "transform: rotate(90deg); color:" + activeColor + ";";
        task.active = true;
    }
}