document.querySelector('a').onclick = function () {
    window.location.href = 'signup.html';
}

// const firebaseConfig = {
//     apiKey: "AIzaSyCSS9UmY7JId8ygcwQbBnxhzmwGRd3B0sw",
//     authDomain: "elitmusassignment-5e9f3.firebaseapp.com",
//     databaseURL: "https://elitmusassignment-5e9f3-default-rtdb.firebaseio.com",
//     projectId: "elitmusassignment-5e9f3",
//     storageBucket: "elitmusassignment-5e9f3.appspot.com",
//     messagingSenderId: "437378714127",
//     appId: "1:437378714127:web:1c00da0abeb4bf4644b17a",
//     measurementId: "G-1JLKEE7JT0"
// };
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

// Listen for form submit
document.querySelector('button').addEventListener('click', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();
    var email = document.getElementById('email').value.toString().trim();
    var password = document.getElementById('password').value.toString().trim();

    if(email=='admin@mickey.com'){
        if(password=='clubhouse'){
            window.location.href = 'admin.html';
        }else{
            alert('wrong password');
        }
        return;
    }

    // create user
    loginUser(email, password);
}


// Save message to firebase
function loginUser(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;

            // Clear form
            document.getElementById('contactForm').reset();

            window.location.href='start.html';
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorCode, errorMessage);
        });
}