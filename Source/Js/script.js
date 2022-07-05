let $ = document;

//////////////////////////////

// variables /////////////////
const body = $.body;
const mainContainer = $.querySelector(".container-fluid");
const inputElem = $.querySelector("input");


// fucntions /////////////////

// to update the minHeight of user screen every 0.1s
function liveUserScreenHeight() {
  let liveHeight = visualViewport.height;
  mainContainer.style.minHeight = liveHeight + "px";
}

// to set birghtness filter to body by clicking on range input
function getInputValue() {
  let inputValue = inputElem.value;
  body.style.filter = "brightness(" + inputValue + "%)";
}


// event Listeners ////////////////

setInterval(liveUserScreenHeight, 100);
inputElem.addEventListener("click", getInputValue);
