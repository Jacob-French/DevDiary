console.log("The script is here");

const milestones = [];
const tasks = [];
const activeColor = '#ff66d6';
const defaultColor = 'rgba(255, 255, 255, 0.121)';
var activeMilestone = null;

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
    activateHiddenContent(handleHiddenContent);
}

function handleHiddenContent(button, content){
    let visible = getComputedStyle(content).display != "none";

    let children = button.children;
    for(let i = 0; i < children.length; i ++){
        if(children[i].classList.contains("ui_arrow")){
            let arrow = children[i];
            if(visible){
                arrow.style = "transform: rotate(90deg); color:" + activeColor + ";";
            }
            else{
                arrow.style = "transform: rotate(180deg)";
            }
        }
    }
}