var headone = document.querySelector("#one")
var headtwo = document.querySelector("#two")
var headthree = document.querySelector("#three")


headone.addEventListener('mouseover',function(){

      headone.textContent = "Mouse currently here";
      headone.style.color = 'red';

})


headone.addEventListener('mouseout', function(){

      headone.textContent = "Hover here";
      headone.style.color = 'black';

})


headtwo.addEventListener('click', function(){

    headtwo.textContent = "clicked"
    headtwo.style.color = "red"

})


headtwo.addEventListener('mouseout', function(){

    headtwo.textContent = "after click"
    headtwo.style.color = "black"

})


headthree.addEventListener('dblclick', function(){

   headthree.textContent = "double clicked! Jesus!"

})




function changefont(size){
  return function(){
      document.body.style.fontSize = size + 'px';
  }
}



var size16 = changefont(16);
var size18 = changefont(18);
var size20 = changefont(20);


document.getElementById("size12").onclick = size16();
