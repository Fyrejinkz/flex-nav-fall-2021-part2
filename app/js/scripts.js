var tabs = document.querySelectorAll("nav a");
var contentPara = document.querySelector('.content')

contentPara.innerHTML = cuisines;

// for (let i = 0; i < tabs.length; i++) {
//     tabs[i].addEventListener("click", makeActive);
//   }

// tabs.forEach(function(tab){
//     tab,addEventListener("click", makeActive)
// } )

tabs.forEach(
    tab => addEventListener("click", makeActive) );
  
  function makeActive(event) {
    makeInactive();
    event.target.classList.add("active")
    event.preventDefault(); 
  }

  function makeInactive(){
    tabs.forEach( tab => tab.classList.remove("active"));
  }