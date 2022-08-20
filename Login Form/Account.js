function login(){
    console.log("Correct");
    
   let password = document.getElementById("password").value;
  if(password=="salim"){
    location.href="go.html";
  }
  else if(password=="saurab"){
    location.href="New.html";
  }
   logForm.reset();
}