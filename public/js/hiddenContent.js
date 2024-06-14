/*
DESCRIPTION:
    Have hidden content on a web page that is toggled to be visible or invisible with the click of a button.

HOW TO USE:
    This functionality will apply to any element with the correct setup and css clases:

    .hiddenContentBox
        .hiddenContentButton
        .hiddenContent
    
    - Both the content and the button should be in an element with the class: hiddenContentBox
    - The button used to toggle the visibility of the content should have the class: hiddenContentButton
    - The content whos visibility is toggled has the class: hiddenContent
    - Call the activateHiddenContent function to initiate this functionality. Pass it a callback funciton. You can use this
      function to add aditional code when a hidden content box is clicked on. 
*/

function activateHiddenContent(callback){
    let buttonList = document.querySelectorAll(".hiddenContentBox > .hiddenContentButton");
    let contentList = document.querySelectorAll(".hiddenContentBox > .hiddenContent");

    for(let i = 0; i < buttonList.length; i ++){
        buttonList[i].addEventListener("click", () => {toggleHiddenContent(buttonList[i], contentList[i], callback)});
    }

    function toggleHiddenContent(button, content, callback){
        let style = getComputedStyle(content);
        if(style.display == "none"){
            //reveal content
            content.style.display = "block";
        }
        else{
            //hide content
            content.style.display = "none";
        }

        callback(button, content);
    }
}