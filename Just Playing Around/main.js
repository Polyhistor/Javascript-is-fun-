 var employee = {
  name : "John Smith",
  job : "programmer",
  age: 31,
  namelength : function(){
    var name = this.name;
    for (var i = 0; i<name.length; i++){
      i+=1;
    }
    console.log("length of the name is"+ i);
  },
  printout : function(){
    alert(this.name);
    alert(this.job);
    alert(this.age);
  },
  printlast : function(){
    name = this.name;
    last = name.split(' ').slice(1);
    console.log(last);
  }


}

'Pouya Ataei'.split(' ').slice(1)
