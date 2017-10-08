function loginValidation() {
    var userName = document.getElementById("userName").value ;
    var password = document.getElementById("password").value;
    if (userName == "" || userName == null)
    {

alert ("Please enter username");

    }

    else if (password == "" || password == null)
    {

      alert ("Please enter password")
    }

    else if (userName != null && password != null)
    {
      window.location.href = "register.html";
    }
}