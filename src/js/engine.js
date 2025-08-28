const emojis = [
    "🐒",
    "🐒",
    "🐅",
    "🐅",
    "🐈‍⬛",
    "🐈‍⬛",
    "🦣",
    "🦣",
    "🐄",
    "🐄",
    "🐆",
    "🐆",
    "🦥",
    "🦥",
    "🐊",
    "🐊",
];
let opencards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 1 : -1));


for(let i=0; i < shuffleEmojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";

    // Cria frente e verso
    let front = document.createElement("div");
    front.className = "front";
    front.innerText = shuffleEmojis[i];

    let back = document.createElement("div");
    back.className = "back";

    box.appendChild(front);
    box.appendChild(back);
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick() {
    if(opencards.length < 2) {
        this.classList.toggle("boxOpen");
        opencards.push(this);
    }

    if(opencards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if(opencards[0].innerText === opencards[1].innerText) {
        opencards[0].classList.add("boxMatched");
        opencards[1].classList.add("boxMatched");    
    }else{
        opencards[0].classList.remove("boxOpen");
        opencards[1].classList.remove("boxOpen");
    }

    opencards = [];

}
