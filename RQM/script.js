// page element selectors
// =============================== 
var button = document.querySelector('button');
var displayArea = document.querySelectorAll('#displayit .fa');
var quoteDisplay = document.getElementById('quoteDisplay');
var authorDisplay = document.getElementById('authorDisplay');
var tweetButton = document.querySelector('#shareit i');
var currentInd = 0;

//event listeners
//===============================
//new quote button
button.addEventListener('click', displayNew);
button.addEventListener('mousedown', clicked);
button.addEventListener('mouseup', clicked);
button.addEventListener('mouseover', darken);
button.addEventListener('mouseout', darken);
//tweet button
tweetButton.addEventListener('click', tweetQuote);
tweetButton.addEventListener('mouseover', sizeup);
tweetButton.addEventListener('mouseout', sizeup);
tweetButton.addEventListener('mousedown', sizeup);
tweetButton.addEventListener('mouseup', sizeup);

//functions
//================================

//main button-click response: display new quote
function displayNew(){
	var ind = newIndex();
  quoteDisplay.textContent = quotes[ind].quote;
  authorDisplay.textContent = "- " + quotes[ind].source;
}

//pick random index for new quotes
//check and assign currentInd to prevent duplicates
function newIndex () {
  var ind = Math.floor(Math.random() * quotes.length);
    if (ind === currentInd) {
      ind = (ind + 1) % quotes.length;
    }
    currentInd = ind;
  return ind;
}

//tweet current quote
function tweetQuote() { 
  var url = "https://twitter.com/intent/tweet";
  var text= "\"" + document.getElementById("quoteDisplay").textContent + "\" " + document.getElementById("authorDisplay").textContent;
  var hashtags = "chingus,fCC";

  window.open(url + "?text=" + text + ";hashtags=" + hashtags, "width=500,heigth=300");
}

//button click and hover effects
function darken() {
  this.classList.toggle("darken");
}
function clicked() {
	this.classList.toggle("clicked");
}
function sizeup() {
	this.classList.toggle('fa-3x');
	this.classList.toggle('fa-4x');
}