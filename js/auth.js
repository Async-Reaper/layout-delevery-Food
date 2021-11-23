const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.getElementById('logInForm');
const inputLogin = document.getElementById('login');
const inputPassword = document.getElementById('password');
const buttonLogin = document.querySelector('.button-login');
const buttonOut = document.querySelector('.button-out');
const userName = document.querySelector('.user-name');
const cardRestaurant = document.querySelectorAll('.card-restaurant');

buttonAuth.addEventListener('click', ()=>{
    modalAuth.style.display = 'flex';
});

closeAuth.addEventListener('click', ()=>{
    modalAuth.style.display = 'none';
});

const login = (user) => {
    modalAuth.style.display = 'none';
    buttonAuth.style.display = 'none';
    buttonOut.style.display = 'flex';
    userName.style.display = 'flex';
    userName.textContent = user.login;
};

const logout = () => {
    buttonAuth.style.display = 'flex';
    buttonOut.style.display = 'none';
    userName.style.display = 'none';
    userName.textContent = null;
    localStorage.removeItem('user');
}

const passwordValidation = (user) => {
    if (inputPassword.value == '') {
        alert('Введите пароль!');
    } else{
        login(user);
    }
}

logInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = {
        login: inputLogin.value,
        password: inputPassword.value    
    };
    localStorage.setItem('user', JSON.stringify(user));

    passwordValidation(user);
})

buttonOut.addEventListener('click', () => {
    logout();
})

if (localStorage.getItem('user')){
    login(JSON.parse(localStorage.getItem('user')));
} 

for (let elem of cardRestaurant){
    elem.addEventListener('click', (e) => {
        if (!localStorage.getItem('user')) {
            e.preventDefault();
            modalAuth.style.display = 'flex'
        } else{
            console.log(this.innerHTML);

        }
    })
}