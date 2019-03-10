function randomcolour(){

    hexa = "0123456789ABCDEF"
    color = "#"

    for (var i = 0; i < 6; i++){
      color += hexa[Math.floor(Math.random()*16)];
    }

    return color;

}


function changeheadcolour(){

    var colorInput = randomcolour();
    var header = document.querySelector("h1");
    header.style.color = colorInput;

}


setInterval(changeheadcolour,500);
