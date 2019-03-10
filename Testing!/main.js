function showhelp(help){
  document.getElementById("help").textContent = help
}

function setuphelp(){

    var helpoptions = [
      { 'id' : 'email' , 'help' : 'Your email please' },
      { 'id' : 'name', 'help' : 'your name please'},
      { 'id' : 'age', 'help' : 'Above 18'},
    ]

    for (let i=0; i<helpoptions.length;i++){
      let option = helpoptions[i]
      document.getElementById(option.id).onfocus = function(){
        showhelp(option.help);
      }
      console.log(option);
    }
}

setuphelp();
