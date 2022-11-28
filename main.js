const form = document.getElementById("form-login");
form.addEventListener("submit", function (e) {
  // prevent the form from submitting
  e.preventDefault();
});

//open and close modal
function Toggle() {
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
  document.getElementById("submit").innerHTML = "Login";
  document.getElementById("uname").value = "";
  document.getElementById("psw").value = "";
  document.getElementById("newpsw").value = "";
  document.getElementById("text-uname").innerHTML = "";
  document.getElementById("text-psw").innerHTML = "";
  document.getElementById("text-newpsw").innerHTML = "";
}
//global variables
const id = "admin";
let pass = "admin";
let newpass;
//validate form
function handleLogin() {
  //default  id and password
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
    clear();
  }
}
function loading() {
  document.getElementById("submit").innerHTML = "Loading.....";
  setTimeout(function () {
    handleLogin();
    document.getElementById("submit").innerHTML = "Login";
  }, 1000);
}

function ChangePass() {
  document.getElementById("submitChange").innerHTML = "Loading.....";

  setTimeout(function () {
    ChangeValidate();
    document.getElementById("submit").innerHTML = "Login";
  }, 500);
}

function ChangeValidate() {
  //display
  document.getElementById("change-pass").style.display = "block";
  document.getElementById("log-in").style.display = "none";
  document.getElementById("text-oldpsw").style.display = "none";
  document.getElementById("footer").style.display = "none";
  document.getElementById("change-pass-footer").style.display = "block";

  document.getElementById("title").innerHTML = "Change Passwords";
  document.getElementById("uname").value = "admin";

  //get value

  var oldpassword = document.getElementById("oldpsw").value;
  var newpass = document.getElementById("newpsw").value;
  //validate
  if (oldpassword.trim().length == 0) {
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
    back();
  }
}

function back() {
  clear();
  document.getElementById("title").innerHTML = "Member Login";
  document.getElementById("change-pass").style.display = "none";
  document.getElementById("log-in").style.display = "block";
  document.getElementById("footer").style.display = "block";
  document.getElementById("change-pass-footer").style.display = "none";
}
