var applebanana = (function(){

    var base = "";

    function addstring(string){
      base += string;
    }

    return {

      banana: function(){
        addstring("banana");
      },

      apple: function(){
        addstring("apple");
      },

      fullstring: function(){
        return base;
      }

    }


})();


console.log(applebanana.fullstring());
applebanana.banana();
applebanana.apple();
applebanana.banana();
applebanana.apple();
applebanana.banana();
applebanana.apple();
applebanana.banana();
applebanana.apple();
console.log(applebanana.fullstring());
