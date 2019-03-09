

var boxes = document.querySelectorAll("td");
console.log(boxes.length);

for (let i=0; i<boxes.length; i++){
  // console.log(i);
  boxes[i].addEventListener('click',function(){
      boxes[i].textContent = 'X';
  })

  boxes[i].addEventListener('dblclick', function(){
      boxes[i].textContent = 'O'
  })

}



var resetbutton = document.getElementById('reset');


resetbutton.addEventListener('click', function(){

    for (let i=0; i<boxes.length; i++){

        boxes[i].textContent = "";

    }

})
