let init = function() {
   showSplash();
   createNumericKeyboard();
   setTimeout(() => {
    removeSplash();
   }, 3000);


};

let showSplash = () => {
    const screen = document.getElementsByClassName("screen")[0];
    const splash = document.createElement("img");
    splash.src = "assets/images/justicaEleitoralBrasao.png"
    screen.appendChild(splash);
    return;
};

let removeSplash = () => {
    const screen = document.getElementsByClassName("screen")[0];
    const splash = screen.getElementsByTagName("img")[0];
    screen.removeChild(splash);
    return;
};

let createNumericButton = (number) => {
    const button = document.createElement("button");
    button.classList.add("button");
    button.innerHTML = number;
    addButtonEvent(button);
    return button;
};

let createNumericRow = () => {
    const row = document.createElement("div");
    row.classList.add("row");
    return row;
};

let createNumericKeyboard = () => {
    const numberKeys = document.getElementsByClassName("number-keys")[0];
    let currentRow = null;
    for(let i = 1; i <= 9; i++) {
        if(i === 4 || i === 7 ||  i === 9) {
            numberKeys.appendChild(currentRow);
        }
        if(i === 1 || i === 4 || i === 7) {
            currentRow = createNumericRow();
        }
        currentRow.appendChild(createNumericButton(i));
    }
    currentRow = createNumericRow();
    currentRow.appendChild(createNumericButton("0"));
    numberKeys.appendChild(currentRow);
    return;
}

let addButtonEvent = (element) => {
    element.addEventListener("click", () => {
        console.log(element.innerHTML);
    })
}

init();