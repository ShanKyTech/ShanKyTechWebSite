/* Listen for form submit
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

*/



// <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

  let testForm = document.querySelector("#contact form");
  
  testForm.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(testForm);
    fetch(testForm.getAttribute('action'), {
      method: 'POST',
      headers: {
        'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: new URLSearchParams(formData).toString()
    })
    .then(res => {
      if (res) {
               //Show alert
               document.querySelector('.alert').style.display = 'block';

               //Hide alert after 3 seconds
               setTimeout(function(){
                   document.querySelector('.alert').style.display = 'none';   
               }, 3000);
           
               //reset the form to blank
               document.querySelector(".contact-form").reset();
      }
    });
  });

