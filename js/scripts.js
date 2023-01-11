const pics = [        // Array contenente le 5 immagini 
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
];

const containerElement = document.querySelector(".container");



for (let index = 0; index < pics.length; index++) {
    console.log(pics[index]);

    containerElement.innerHTML += `<div class="pic">
                                        <img src="${pics[index]}">
                                   </div>`;
    
};

const allPics = document.getElementsByClassName("pic");  //Seleziono tutti gli elementi con classe "pic"

console.log("allPiccs", allPics, typeof allPics);

allPics[0].classList.add("active");  // Assegno all'immagine con index 0 la classe active, in modo tale da renderla visibile


let activePic = 0; 



const nextPic = document.querySelector(".next");
nextPic.addEventListener("click",

    function () {
        console.log("Cliccato su next")

        allPics[activePic].classList.remove("active");
        activePic++;
        allPics[activePic].classList.add("active");

        previousPic.classList.remove("hidden");

        if (activePic == allPics.length -1){
            nextPic.classList.add("hidden");
        }

    }

)

const previousPic = document.querySelector(".previous");
previousPic.addEventListener("click",

    function () {
        console.log("Cliccato su previous")

        allPics[activePic].classList.remove("active");
        activePic--;
        allPics[activePic].classList.add("active");

        if (activePic == 0){
            previousPic.classList.add("hidden");
        }

        nextPic.classList.remove("hidden");

    }

)

previousPic.classList.add("hidden");    // In modo tale che non compaia al primo caricamento della pagina 