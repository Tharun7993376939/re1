const userid={
    name:"tharun",
    pass:"1234"
  };
  document.getElementById("formid").addEventListener("submit",function(event)
  {
      event.preventDefault();
      const usernameee=document.getElementById("username").value;
      const passworddd=document.getElementById("password").value;
  if(usernameee==userid.name&& passworddd==userid.pass){
      window.location.href="admin.html";
  }
  else{
      document.getElementById("error").textContent="invalid text "
  }
      
  });