//Click button mở modal
const form = document.getElementById("form-login");
form.addEventListener("submit", function (e) {
  // prevent the form from submitting
  e.preventDefault();
});

//open and close modal
function Toggle() {
  clear();
  document.getElementById("login-button").innerHTML = "Đăng nhập hệ thống";
  document.getElementById("result").innerHTML ="";
  document.getElementById("id01").style.display = "block";

  var modal = document.getElementById("id01");
  //When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

//global variables
const id = "admin";
let pass = "admin";
let newpass;

//clear input and value 
function clear() {
  document.getElementById("uname").value = "";
  document.getElementById("psw").value = "";
  document.getElementById("oldpsw").value = "";
  document.getElementById("newpsw").value = "";
  document.getElementById("text-uname").innerHTML = "";
  document.getElementById("text-psw").innerHTML = "";
  document.getElementById("text-newpsw").innerHTML = "";
  document.getElementById("text-oldpsw").innerHTML = "";

}
//validate form - đăng nhập - đã đăng nhập thành công
function handleLogin() {
  //get value id and password
  var username = document.getElementById("uname").value;
  var password = document.getElementById("psw").value;

  if (username.trim().length == 0 &&password.trim().length == 0) {
    document.getElementById("text-uname").innerHTML = "Yêu cầu nhập";
    document.getElementById("uname").focus();
    document.getElementById("text-psw").innerHTML = "Yêu cầu nhập";
    document.getElementById("psw").focus();
    return false;
  }else {
    document.getElementById("text-uname").innerHTML = "";
    document.getElementById("text-psw").innerHTML = "";
  }
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
  if (username !== id && username !== null && password !== pass && password !== null) {
    document.getElementById("text-uname").innerHTML = "Sai ten dang nhap";
    document.getElementById("text-psw").innerHTML = "Sai mat khau";
    return false;
  } else {
    document.getElementById("text-uname").innerHTML = "";
    document.getElementById("text-psw").innerHTML = "";
  }
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
    clear();
  }
}
//submit đăng nhập
function loading() {
  document.getElementById("submit").innerHTML = "Loading.....";
  setTimeout(function () {
    handleLogin();
    document.getElementById("submit").innerHTML = "Login";
  }, 1000);
}

//change pass -> đổi giao diện
function ChangePass() {
  document.getElementById("change-pass").style.display = "block";
  document.getElementById("log-in").style.display = "none";
  document.getElementById("text-oldpsw").style.display = "none";
  document.getElementById("footer").style.display = "none";
  document.getElementById("change-pass-footer").style.display = "block";
  document.getElementById("submitChange").innerHTML = "Save";
  document.getElementById("title").innerHTML = "Change Passwords";
  document.getElementById("uname").value = "admin";
}

//- validate - đã đổi pass thành công



function ChangeValidate() {

   //get value
  var oldpassword = document.getElementById("oldpsw").value;
  var newpass = document.getElementById("newpsw").value;
  //validate
  if (oldpassword.trim().length == 0&& newpass.trim().length == 0) {
    document.getElementById("text-oldpsw").style.display="block";
    document.getElementById("text-oldpsw").innerHTML = "Yêu cầu nhập";
    document.getElementById("text-newpsw").style.display = "block";
    document.getElementById("text-newpsw").innerHTML = "Yêu cầu nhập";
    document.getElementById("newpsw").focus();
    document.getElementById("oldpsw").focus();
   
    return false;
  } else {
    document.getElementById("text-newpsw").innerHTML = "";
    document.getElementById("text-oldpsw").innerHTML = "";
  }
  if (oldpassword.trim().length == 0) {
    document.getElementById("text-oldpsw").style.display="block";
    document.getElementById("text-oldpsw").innerHTML = "Yêu cầu nhập";
    document.getElementById("oldpsw").focus();
    return false;
  } else {
    document.getElementById("text-oldpsw").innerHTML = "";
  }
  if (newpass.trim().length == 0) {
    document.getElementById("text-newpsw").style.display = "block";
    document.getElementById("text-newpsw").innerHTML = "Yêu cầu nhập";
    document.getElementById("newpsw").focus();
    return false;
  } else {
    document.getElementById("text-newpsw").innerHTML = "";
  }
  if (oldpassword !== pass && oldpassword !== null) {
    document.getElementById("text-oldpsw").innerHTML = "Password không đúng";
    return false;
  } else {
    document.getElementById("text-oldpsw").innerHTML = "";
  }
  if (true) {
    pass = newpass;
    document.getElementById("result").innerHTML =
      "Bạn đã đổi mật khẩu thành công";
      clearChangePass();
      back();
}

}

function SubmitChange(){
  document.getElementById("submitChange").innerHTML = "Loading.....";

  setTimeout(function () {
    ChangeValidate();
    document.getElementById("submitChange").innerHTML = "Save";
  }, 500);
 
}

function back() {
  clear();
  document.getElementById("title").innerHTML = "Member Login";
  document.getElementById("change-pass").style.display = "none";
  document.getElementById("log-in").style.display = "block";
  document.getElementById("footer").style.display = "block";
  document.getElementById("change-pass-footer").style.display = "none";
}

function clearChangePass(){
  clear();
  document.getElementById("submitChange").innerHTML = "Login";
 
}

//back lại modal login