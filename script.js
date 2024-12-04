let display = document.getElementById('result')


document.getElementById("btn1").addEventListener("click", ()=> {
    display.innerHTML = display.innerHTML + 1
});

document.getElementById("btn2").addEventListener("click", ()=> {
    display.innerHTML = display.innerHTML + 2
});

document.getElementById("btn3").addEventListener("click", ()=> {
    display.innerHTML = display.innerHTML + 3
});

document.getElementById("btn4").addEventListener("click", ()=> {
    display.innerHTML = display.innerHTML + 4
});

document.getElementById("btn5").addEventListener("click", ()=> {
    display.innerHTML = display.innerHTML + 5
});

document.getElementById("btn6").addEventListener("click", ()=> {
    display.innerHTML = display.innerHTML + 6
});

document.getElementById("btn7").addEventListener("click", ()=> {
    display.innerHTML = display.innerHTML + 7
});

document.getElementById("btn8").addEventListener("click", ()=> {
    display.innerHTML = display.innerHTML + 8
});

document.getElementById("btn9").addEventListener("click", ()=> {
    display.innerHTML = display.innerHTML + 9
});



document.getElementById("btn0").addEventListener("click", ()=> {
    display.innerHTML = display.innerHTML + 0
});



document.getElementById("btn-").addEventListener("click", ()=> {
    display.innerHTML = display.innerHTML + "-"
});

document.getElementById("btn+").addEventListener("click", ()=> {
    display.innerHTML = display.innerHTML + "+"
});

document.getElementById("btn*").addEventListener("click", ()=> {
    display.innerHTML = display.innerHTML + "*"
});

document.getElementById("btn/").addEventListener("click", ()=> {
    display.innerHTML = display.innerHTML + "/"
});

document.getElementById("btn=").addEventListener("click", ()=> {
    // display.innerHTML = display.innerHTML + "="
    display.innerHTML= eval(display.innerHTML)
});

document.getElementById("btnCE").addEventListener("click", ()=> {
    display.innerHTML = ""
});


const inputText = document.getElementById("input-text")

const list = []


document.getElementById("btn").addEventListener("click",()=>{
    // list.push(inputText.value)
    // console.log(list)
    // const todoList = document.getElementById("unorderlist")

    // for (i=0; i<list.length; i++){
    //   todoList.innerHTML = todoList.innerHTML + `<li>${list[i]}</li>`
    // }
    const newItem = inputText.value.trim();
    if (newItem !== "") {
        list.push(newItem);
        const todoList = document.getElementById("unorderlist");
        todoList.innerHTML += `<li>${newItem}</li>`;
        inputText.value = "";
        console.log(list);
    } else {

    }

})

//  const celcToFahr = (n) =>
//     `${n} Celsius is equal to ${(n * 9 / 5) + 32} Fahrenheit.`;
 
//  const n = 20;
// console.log(celcToFahr(n));