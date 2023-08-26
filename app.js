var btntranslate = document.querySelector("#btn-translate")

var txtInput = document.querySelector("#txt-input")

   var outputDiv = document.querySelector("#output")
   outputDiv.innerText = "saksham sharma " + txtInput.value;


btntranslate.addEventListener("click", function clickEventHandler(){
    console.log("clicked!")
    console.log("input", txtInput.value);
})
