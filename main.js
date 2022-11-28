const form = document.getElementById("form-login");
form.addEventListener("submit", function (e) {
  // prevent the form from submitting
  e.preventDefault();

});

//open and close modal
function Toggle() {
  clear();
  document.getElementById("login-button").innerHTML = "Đăng nhập hệ thống";
  document.getElementById("id01").style.display = "block";
  var modal = document.getElementById("id01");
  //When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
//clear input
function clear() {
    document.getElementById("submit").innerHTML ='Login';
  document.getElementById("uname").value = "";
  document.getElementById("psw").value = "";
  document.getElementById("text-uname").innerHTML = "";
  document.getElementById("text-psw").innerHTML = "";
}
function loading(){
    document.getElementById("submit").innerHTML ='Loading.....'
    setTimeout(function(){
        handleLogin();
        document.getElementById("submit").innerHTML ='Login';
    },1000)
}
//validate form
function handleLogin() {
 

  //default  id and password
  const id = "admin";
  const pass = "admin";

  var username = document.getElementById("uname").value;
  var password = document.getElementById("psw").value;

  if (username.trim().length == 0) {
    document.getElementById("text-uname").innerHTML = "Yêu cầu nhập";
    document.getElementById("uname").focus();
    return false;
  } else {
    document.getElementById("text-uname").innerHTML = "";
  }

  if (password.trim().length == 0) {
    document.getElementById("text-psw").innerHTML = "Yêu cầu nhập";
    document.getElementById("psw").focus();
    return false;
  } else {
    document.getElementById("text-psw").innerHTML = "";
  }

  //case wrong pass or id
  if (username !== id && username !== null) {
    document.getElementById("text-uname").innerHTML = "Sai ten dang nhap";
    return false;
  } else {
    document.getElementById("text-uname").innerHTML = "";
  }

  if (password !== pass && password !== null) {
    document.getElementById("text-psw").innerHTML = "Sai mat khau";
    return false;
  } else {
    document.getElementById("text-psw").innerHTML = "";
  }

  if (true) {
  
    

    document.getElementById("login-button").innerHTML = "Đăng nhập thành công";
    document.getElementById("close").click();

    
  }
}
