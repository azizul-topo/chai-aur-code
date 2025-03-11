function createButton() {
    let selectedColor = document.getElementById("colorPicker").value;
    let button = document.createElement("button");
    button.innerText = selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1);
    button.className = "color-button";
    button.style.backgroundColor = selectedColor;

    button.addEventListener("click", (function(color) {
        return (()=>{
            document.body.style.backgroundColor = color
        })
    })(selectedColor));
    
    document.getElementById("buttonContainer").appendChild(button);
}