//array of possible quotes
//==============================
var quotes = [
  {quote: "ALWAYS",
  source: "professor severus snape"},
  {quote: "YER A WIZARD, HARRY",
  source: "hagrid"},
  {quote: "avada kedavra",
  source: "HE WHO MUST NOT BE NAMED"},
  {quote: "Me fail english, thats unpossible!",
  source: "Ralph Riggum"},
  {quote: "I typed your symptom into the thing up here, and it says you could have network connectivity problems. ",
  source: "Andy Dywer"},
  {quote: "Be Prepared!",
  source: "Scar"},
  {quote: "He looka like a man",
  source: "Ms Swan"},
  {quote: "Cool Prius!",
  source: "Noone ever"},
  {quote: "I have a dream today",
  source: "Dr. Martin Luther King Jr"},
  {quote: "Hello",
  source: "Benjamin Franklin (Probably)"},
  {quote: "Nope",
  source: "Chuck Testa"},
  {quote: "Ain't nobody got time for that",
  source: "Sweet Brown"},
  {quote: "I've got greens, beans, potatoes, tomatoes, lambs, rams, hogs, dogs, chickens, turkeys... You name it!",
  source: "Shirley Caesar"},
  {quote: "Who is you?",
  source: "Rachel EB Wilson"},
  {quote: "ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn",
  source: "Whispers"}
];

// page element selectors
// =============================== 
var button = document.querySelector('button');
var displayArea = document.querySelectorAll('#displayit .fa');
var quoteDisplay = document.getElementById('quoteDisplay');
var authorDisplay = document.getElementById('authorDisplay');
var tweetButton = document.querySelector('#shareit i');

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
function newIndex () {
  return Math.floor(Math.random() * quotes.length);
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