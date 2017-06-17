var quotes = [
  {quote: "ALWAYS",
  source: "professor severus snape"},
  {quote: "YER A WIZARD, HARRY",
  source: "hagrid"},
  {quote: "avada kedavra",
  source: "HE WHO MUST NOT BE NAMED"}
];
var button = document.querySelector('button')
function new_index () {
  return Math.floor(Math.random() * quotes.length);
}

function new_quote() {
  var index = new_index();
  console.log("'" + quotes[index].quote + "' - " + quotes[index].source);
}
