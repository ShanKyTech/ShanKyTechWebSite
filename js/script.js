// Listen for form submit
document.querySelector(".contact-form").addEventListener("submit", 
submitForm);

//Submit form
function submitForm(e){
    e.preventDefault();

        //Show alert
        document.querySelector('.alert').style.display = 'block';

        //Hide alert after 3 seconds
        setTimeout(function(){
            document.querySelector('.alert').style.display = 'none';   
        }, 3000);
    
        //reset the form to blank
        document.querySelector(".contact-form").reset();
}