/** SVG CANVAS - CONTENT WINDOW **********************************************/

var node;

function drawCanvas() {
    var paper = Raphael(document.getElementById("jCanvas"), 300, 300);
    // Creates the SVG Canvas
    var rect = paper.rect(100, 150, 100, 50, 10).attr(
        {"fill":"#525252", "stroke-width":"0"});
    var text = paper.text(150, 175, "This is my text").attr(
        {"fill":"#bbbbbb", "font-size":"15em"});
    // Creates the Rounded Rectangle and Text
    node = paper.set();
    node.push(text);
    node.push(rect);
    // Creates a new Set of elements and pushes the shapes into it
    node.hover(nodeHoverIn, nodeHoverOut, rect, rect);
    // element.hover(hoverIn function, hoverOut function, hoverIn 
    // object(to manipulate), hoverOut object)
    node.click(openForm); 
    // Raphael event listener
    //node.addClass('taskNode');
    // Potentially able to manipulate in CSS as it has a class?
}

function nodeHoverIn(){
    // Enlarges the node under mouse hover
    this.animate(
        {"x":"90", "y":"140", "width": "120", "height":"70"}, 1000, "bounce");
}

function nodeHoverOut(){
    // Node goes back to original size when not under hover
    this.animate(
        {"x":"100", "y":"150", "width": "100", "height":"50"}, 1000, "bounce");
}

function openForm(event){
    div_show();
    dateListeners();
    event.stopImmediatePropagation(); 
    //Stops the next listener from being fired automatically
    document.getElementById('svgCanvas').addEventListener('click', div_hide, false);
}

/** FORM VALIDATION **********************************************************/

function dateListeners() {
    var eStart = document.getElementById('eStart');
    var eFinish = document.getElementById('eFinish');
    
    eStart.addEventListener('blur', dateCheckText, false);
    eStart.addEventListener('change', dateCheckText, false);
    eFinish.addEventListener('blur', dateCheckText, false);
    eFinish.addEventListener('change', dateCheckText, false); 
}

function isDateValid() {
    var eStartDate = new Date(document.getElementById('eStart').value);
    var eFinishDate = new Date(document.getElementById('eFinish').value);
    if(eStartDate <= eFinishDate){ return true; } 
    return false;
}

function dateCheckText() {
    var dateCheck = document.getElementById('isDateValid');
    var validDate = isDateValid();
    
    if(validDate){
        dateCheck.innerHTML = "Dates are valid";
        dateCheck.style.color = "#00FF00";
    } else if(!validDate){
        dateCheck.innerHTML = "Dates are invalid, please ensure your " +
            "start date is before or the same as the finish date";
        dateCheck.style.color = "#FF0000";
    }
}

/** SECTION HIDING ***********************************************************/

function div_hide() {
    document.getElementById('navigation').style.left = '-20%';
    // Pushses the drawer to the left, off screen
    document.getElementById('svgCanvas').style.width = '100%';
    // Makes the canvas area full width
    node.click(openForm);
    // Adds click listener onto the node
}
    
function div_show() {
    document.getElementById('navigation').style.left = '0';
    // Pulls drawer onto screen
    document.getElementById('svgCanvas').style.width = '80%';
    // Makes the canvas 80% width (currently, the drawer is 20%)
    node.unclick(openForm);
    // Removes click listener from node
}

window.onload = drawCanvas;