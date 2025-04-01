function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === "vaydongviet" && password === "123456") {
        window.location.href = "home.html";
    } else {
        errorMessage.textContent = "Sai tên tài khoản hoặc mật khẩu!";
    }
}
