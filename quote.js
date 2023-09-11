document.title = "quote-generator"

const quote = document.getElementById("quote")
const button = document.getElementById("button")

quoteWord = ["Make hay while the sun shine", "As you lay your bed, you lie it", "We are nothing but pen in the hands of the creator", "The sun moutside is enough to dry cloth"];

button.addEventListener("click", function(){
    showQuote = quoteWord[getQuote()];
   quote.innerHTML = showQuote;

})

function getQuote() {
  return Math.floor(Math.random()*quoteWord.length)
}
