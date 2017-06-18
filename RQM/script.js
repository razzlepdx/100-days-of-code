//array of possible quotes
//==============================
var quotes = [
  {quote: "ALWAYS",
  source: "professor severus snape"},
  {quote: "YER A WIZARD, HARRY",
  source: "hagrid"},
  {quote: "avada kedavra",
  source: "HE WHO MUST NOT BE NAMED"}
];

// page element selectors
// =============================== 
var button = document.querySelector('button');
var displayArea = document.querySelector('#displayit p');
var tweetButton = document.querySelector('#shareit i');

//event listeners
//===============================
button.addEventListener('click', displayNew);
button.addEventListener('mouseover', hover);
button.addEventListener('mouseout', hover);
tweetButton.addEventListener('mouseover', sizeup);
tweetButton.addEventListener('mouseout', sizeup);

//functions
//================================

//main button-click response: display new quote
function displayNew(){
	var ind = newIndex();
	var quote = newQuote(ind);
	return displayArea.textContent = quote;
}

//pick random index for new quotes
function newIndex () {
  return Math.floor(Math.random() * quotes.length);
}

//use random index and format/prep quote to add to page
function newQuote(num) {
  var index = newIndex();
  return "'" + quotes[index].quote + "' - " + quotes[index].source;
}

//button hover effects
function hover() {
	this.classList.toggle("hover");
}
function sizeup() {
	this.classList.toggle('fa-3x');
	this.classList.toggle('fa-4x');
}