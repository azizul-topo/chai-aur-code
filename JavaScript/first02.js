function createButton() {
    let selectedColor = document.getElementById("colorPicker").value;
    let button = document.createElement("button");
    button.innerText = selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1);
    button.className = "color-button";
    button.style.backgroundColor = selectedColor;
    button.onclick = (function(color) {
        return function() {
            document.body.style.backgroundColor = color;
        };
    })(selectedColor);
    
    document.getElementById("buttonContainer").appendChild(button);
}