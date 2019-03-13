// Class notion

class human {

  gender = 'male';


  printgender=() => {
    console.log(this.gender);
  }

}


class person extends human {

    name = "Pouya"



  printmyName = () => {
    console.log(this.name);
  }
}


const Person = new person();
Person.printmyName();
Person.printgender();

// Spread & Rest

const numbers = [1,2,3]
const newnumbers = [...numbers,4,5]
console.log(newnumbers )


const piere = {
  name: 'max'
}

const pierero = {
  ...piere,
  age: 28
}

console.log(pierero)


const filter = (...args) => {
  return args.filter(el => el === 1);
}


console.log(filter(1,2,3))

function add(...args){
    let sum = 0
    for (let arg of args){
      sum += arg;
    }
    return sum
}

var st = add(1)
console.log(st)
var nd = add(1,2)
console.log(nd)
var rd = add(1,2,3,4)
console.log(rd)


function xyz(x, y, ...z){
    console.log(x, ' ',y);

    console.log(z);
    console.log(z[0]);
    console.log(z.length)
}

xyz("Hey","bye","yo","mo")


// Descontructing

const numberso = [1,2,3];
[num1, num2] = numberso;
console.log(num1,num2);


// Map


const numes = [1,2,3];

const doublenumarray = numes.map((n) => {

        return n * 2;

})

console.log(doublenumarray)
