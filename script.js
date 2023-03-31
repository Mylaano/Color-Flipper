const colors = [
    {
        "name": "White",
        "color": "#FFFFFF"
    },
    {
        "name": "Silver",
        "color": "#C0C0C0"
    },
    {
        "name": "Gray",
        "color": "#808080"
    },
    {
        "name": "Black", 
        "color": "#000000"
    },
    {
        "name": "Red",
        "color": "#FF0000"
    },
    {
        "name": "Maroon",
        "color": "#800000"
    },
    {
        "name": "Yellow",
        "color": "#FFFF00"
    },
    {
        "name": "Olive",
        "color": "#808000"
    },
    {
        "name": "Lime",
        "color": "#00FF00"
    },
    {
        "name": "Green",
        "color": "#008000"
    },
    {
        "name": "Aqua",
        "color": "#00FFFF"
    },
    {
        "name": "Teal",
        "color": "#008080"
    }
]

const boxText = document.querySelector(".box-text");
const boxButton = document.querySelector(".box-button");

let currentIndex = 0;

function randomColor() {
    randomIndex = Math.round(Math.random() * (colors.length-1 - 0) + 0);

    while(randomIndex == currentIndex) {
        randomIndex = Math.round(Math.random() * (colors.length-1 - 0) + 0);
    }

    currentIndex = randomIndex;
    boxText.innerHTML = `<strong>Background Color:</strong> ${colors[currentIndex].name} (${colors[currentIndex].color})`;
    document.body.style.backgroundColor = colors[currentIndex].color;
}

boxButton.addEventListener('click', () => {
    randomColor();
})

randomColor();