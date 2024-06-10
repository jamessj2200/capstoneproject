document.getElementById('signUp').addEventListener('click', () => {
    document.querySelector('.container').classList.add('right-panel-active');
});

document.getElementById('signIn').addEventListener('click', () => {
    document.querySelector('.container').classList.remove('right-panel-active');
});

document.getElementById('signUpLink').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('.container').classList.add('right-panel-active');
});

document.getElementById('signInLink').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('.container').classList.remove('right-panel-active');
});


document.getElementById('logout').addEventListener('click', () => {
    // Redirect to login page
    window.location.href = 'index.html';
});
