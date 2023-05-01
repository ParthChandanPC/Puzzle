// const firebaseConfig = {
//   apiKey: "AIzaSyCSS9UmY7JId8ygcwQbBnxhzmwGRd3B0sw",
//   authDomain: "elitmusassignment-5e9f3.firebaseapp.com",
//   databaseURL: "https://elitmusassignment-5e9f3-default-rtdb.firebaseio.com",
//   projectId: "elitmusassignment-5e9f3",
//   storageBucket: "elitmusassignment-5e9f3.appspot.com",
//   messagingSenderId: "437378714127",
//   appId: "1:437378714127:web:1c00da0abeb4bf4644b17a",
//   measurementId: "G-1JLKEE7JT0"
// };
// firebase.initializeApp(firebaseConfig);

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