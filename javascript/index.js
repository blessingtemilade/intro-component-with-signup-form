function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};



  
function myFunction(){
  const formWrapper = document.querySelector('.form-wrapper');
  const trialForm = document.querySelector('form');

    const first = document.querySelector('#first_name').value;
    const identity1 = document.querySelector('#identity1');

    const second = document.querySelector('#last_name').value;
    const identity2 = document.querySelector('#identity2');

    const email = document.querySelector('#email').value;
    const demo = document.querySelector('#demo');

    const password = document.querySelector('#pass').value;
    const securitycode = document.querySelector('#securitycode');


    // Reset error messages and border color
    const allErrorMessages = document.querySelectorAll('.error');

    const allInputs = document.querySelectorAll('input');

    for(let i =0; i<allErrorMessages.length; i++){
      allErrorMessages[i].innerHTML ='';
    }

    for(let i =0; i<allInputs.length; i++){
      allInputs[i].style.borderColor ='';
    }
    let isValid = true;

    if(first === ""){
      identity1.innerHTML ='First name cannot be empty';
       document.getElementById("first_name").style.borderColor="red";
       isValid = false;
    }

    if(second === ""){
      identity2.innerHTML ='Last name cannot be empty';
      document.getElementById("last_name").style.borderColor="red";
      isValid = false;

    }

    if(email === ""){
       demo.innerHTML = 'Email cannot be empty';
       document.getElementById("email").style.borderColor="red";
       isValid = false;
       
    }

    if(!validateEmail(email)){
      demo.innerHTML ='looks like this is not an email';
      document.getElementById("email").style.borderColor="red";
      isValid = false;
      
    } 

    if(password === ""){
      securitycode.innerHTML = 'password cannot be empty';
      document.getElementById("pass").style.borderColor="red";
      isValid = false;

    }

     if (isValid){
      trialForm.style.display ="none";
      const message = document.createElement('h4');
      message.textContent ='Your form has been submitted successfully';
      formWrapper.appendChild(message);
     }
     

    
    }
