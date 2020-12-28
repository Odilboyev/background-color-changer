function bgcolor() {  
    var checkbox = document.querySelector("input[type='checkbox']");
    if (checkbox.checked === true) {
        document.getElementById("body").classList.toggle("bg-dark")
    } else{
        document.getElementById("body").classList.toggle("bg-dark")
    } 
}
