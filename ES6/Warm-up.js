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


// A little bit more Speard and Rest

var lakes = ['lake1','lake2','lake3','lake4']
var [first,...rest] = lakes

console.log(first)



function directions(...args) {
  var [start,...remaining] = args
  var [finish, ...stops] = remaining.reverse()

  console.log('drive through ${args.length} towns')
  console.log('start in ${start}')
  console.log('the destrination is ${finish}')

}


directions(
  "Turckee",
  "Tahoe City",
  "Auckland",
  "Wellington",
  "Christchurch"
)


var morning = {
  breakfast : 'oatmeal',
  lunch: 'steak'
}

var lunch = {
  food : 'kebab',
  combo: 'momno'
}


var merged = {
  ...morning,
  lunch
}


console.log(merged)


// Promise

const getFakeMembers = count => new Promise((resolves, rejects) => {
    const api = 'https://api.randomuser.me/?nat=US&results={$count}'
    const request = new XMLHttpRequest()
    request.open('GET', api)
    request.onload = () =>
      (request.status === 200) ?
      resolves(JSON.parse(request.response).results) :
      rejects(Error(request.statusText))
    request.onerror = (err) => rejects(err)
    request.send()
})

getFakeMembers(10).then(
  members => console.log(members),
  err => console.erro(new Erro("Cannot load members from randomuser.me"))
)


// Classes

function vacation(destination, length){
  this.destination = destination
  this.length = length
}

vacation.prototype.print = function(){
  console.log("The destination is: " + this.destination +" and the length: " + this.length)
    // console.log("The destination is: ${destination} and the ${length}")
}

var stoke = new vacation('stoke','8');
stoke.print();


// some Prototyping in between

function Human(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
    this.fullname = function(){
      return this.firstname + "" + this.lastname;
    }

    }

var person1 = new Human("Pouya","Ataei");

console.log(person1)

console.log(Human.prototype)

console.log(Human.prototype === person1.__proto__)

var person2 = new Human("James","Gosling");
console.log(person2)


 Human.prototype.alak = "baba alak"

console.log(Human.prototype)



function eat(){
}


eat.prototype.herbivor = "herbs!"
eat.prototype.carnivore = "Meats!"
eat.prototype.omnivore = "both!"
eat.prototype.printherb= function() {
    console.log("I like" +this.herbivor)
}


var eat1 = new eat()
eat1.herbivor = "more herbs!"


function changeAgeAndReference(person) {
    person.age = 25
    person = {
      name: 'John',
      age: 50
    };

    return person;
  }


  var personObj1 = {
    name: 'Alex',
    age: 30
  };


var personObj2 = changeAgeAndReference(personObj1)

console.log(personObj1)
console.log(personObj2)

// Super and extend


class animal {

    constructor(name, weight) {
      this.name = name;
      this.weight = weight;
    }


    eat() {
      return this.name +"is eating"
    }


    sleep() {
      return this.name +"is sleeping"
    }

    wakeUp(){
      return this.name +"is waking up!"
    }

}

class Gorilla extends animal {

  constructor(name,weight){
    super(name,weight)
  }

  climbTrees() {
    return this.name + "is climbing trees"
  }

  poundChest() {
    return this.name + "is pounding chest"
  }

  showVigour() {
    return super.eat() + this.poundChest
  }

  dailyRoutine() {
    return super.wakeUp() + this.poundChest() + super.eat() + super.sleep()
  }

}


function display(content){
  console.log(content);
}

const gorilla = new Gorilla('George','160kg')
display(gorilla.poundChest());
display(gorilla.sleep());
display(gorilla.showVigour());
display(gorilla.dailyRoutine());
