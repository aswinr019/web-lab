const btn = document.getElementById("btn");
const bg = document.getElementById("bg");
const text = document.getElementById("text");


let colors = [

    '#ffbe0b',
    '#fb5607',
    '#ffd60a',
    '#ff006e',
    '#8338ec',
    '#3a86ff',
    '#06d6a0',
    '#83c5be',
    '#ffddd2',
    '#edf6f9',
    '#5e548e',
    '#c9184a',
    '#70e000',
];

btn.addEventListener("click",() => {

    let random =  Math.floor(Math.random() * 13)  ;
    // bg.style.background = colors[  random   ];
    // text.textContent = colors[ random ] ;
     bg.style.background = colors[    Math.floor(Math.random() * 12)  ];
    
});