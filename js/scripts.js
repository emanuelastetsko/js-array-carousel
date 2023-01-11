const pics = [        // Array contenente le 5 immagini 
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
];

const containerElement = document.querySelector(".container");

const activePic = 0; 

for (let index = 0; index < pics.length; index++) {
    console.log(pics[index]);

    containerElement.innerHTML += `<div class="pic">
                                        <img src="${pics[index]}">
                                   </div>`;
    
};

const allPics = document.getElementsByClassName("pic");  //Seleziono tutti gli elementi con classe "pic"

console.log("allPiccs", allPics, typeof allPics);

allPics[0].classList.add("active");  // Assegno all'immagine con index 0 la classe active, in modo tale da renderla visibile