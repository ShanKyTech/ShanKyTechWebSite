 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDJWUZ-K6Uc59xY8L9hJSQfl_cyipU2udk",
    authDomain: "contact-form-database-bad23.firebaseapp.com",
    projectId: "contact-form-database-bad23",
    storageBucket: "contact-form-database-bad23.appspot.com",
    messagingSenderId: "85494946156",
    appId: "1:85494946156:web:ba33d2653207a5b9793b49"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//Reference contactInfo collections
let contactInfo = firebase.database().ref("infos");



// Listen for form submit
document.querySelector(".contact-form").addEventListener("submit", 
submitForm);

//Submit form
function submitForm(e){
    e.preventDefault();
   
    //Get Values
    let name = document.querySelector('.name').value;
    let email = document.querySelector('.email').value;
    let message = document.querySelector('.message').value;
    
    //save to firebase database
    saveContactInfo(name, email, message);

    //Show alert
    document.querySelector('.alert').style.display = 'block';

    //Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';   
    }, 3000);

    //reset the form to blank
    document.querySelector(".contact-form").reset();
}


//Save infos to Firebase
function saveContactInfo(name, email, message){
    let newContactInfo = contactInfo.push();
    newContactInfo.set({
        name: name,
        emaii: email,
        message: message,
    });
}

