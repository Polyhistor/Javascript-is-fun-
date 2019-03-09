

var boxes = document.querySelectorAll("td");


for (var i=0; i<boxes.length; i++){
  console.log(i);
  boxes[i].addEventListener('click',function(){
      console.log(i);
      boxes[i].textContent = 'x';
  })
}

// comment

// function makeadder(x){
//   return function addup(y){
//     return y+x;
//   };
// }
//
//
// var add5 = makeadder(5);
// var add10 = makeadder(10);
//
// console.log(add5(2));
// console.log(add10(5));




// for (const box of boxes){
//   box.addEventListener('click',function(){
//       box.innerText = 'x';
//   })
// }
