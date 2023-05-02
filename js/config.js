// window.addEventListener("load", ()=>{
//   console.log(window.location.pathname)
//   var loc=window.location.pathname
//   // ==="/start.html"
//   if(localStorage.getItem("k")===null)
//       localStorage.setItem("k",true);
//   console.log(localStorage.getItem("k")==="true")
//   if(localStorage.getItem("k")==="true" && loc!=="/start.html"){
//     var c=confirm("Refresh the page and redirect to start?")
//     if(c ){
//       window.location.href="./start.html";
//       localStorage.setItem("k",false)
//     }
//   }
//   console.log("hey")
// })

var restart_btns=document.getElementsByClassName("restart-btn");
Object.values(restart_btns).map((e)=>{
  e.addEventListener("click", ()=>{
    var c=confirm("Do you want to restart the game.");
    if(c){
      window.location.href=("./start.html")
    }
  })
  console.log(e)
})

const firebaseConfig = {
  apiKey: "AIzaSyAlrXO8jHN8cGyOnwhDwxD8gIdbnGBMS6s",
  authDomain: "puzzle-application-ef29c.firebaseapp.com",
  databaseURL: "https://puzzle-application-ef29c-default-rtdb.firebaseio.com",
  projectId: "puzzle-application-ef29c",
  storageBucket: "puzzle-application-ef29c.appspot.com",
  messagingSenderId: "923049802624",
  appId: "1:923049802624:web:e5dd33f44234564af41f65",
  measurementId: "G-R6SRC21N7P"
};
firebase.initializeApp(firebaseConfig);