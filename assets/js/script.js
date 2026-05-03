const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

if (container && registerBtn && loginBtn) {
    registerBtn.addEventListener('click', (event) => {
        event.preventDefault();
        container.classList.add('active');
    });

    loginBtn.addEventListener('click', (event) => {
        event.preventDefault();
        container.classList.remove('active');
    });
}
