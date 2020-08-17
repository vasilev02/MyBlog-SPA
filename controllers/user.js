import commonPartial from './partials.js';
import { setHeader, saveUserInfo } from './auth.js';
import { registerUser, login, logout } from '../models/user.js';

//Register--------------------------------------------------------
export function getRegister(ctx) {
    setHeader(ctx);
    ctx.loadPartials(commonPartial).partial('./view/user/register.hbs')
}

export function postRegister(ctx) {

    let { email, password, repeatPassword } = ctx.params;

    if (password !== repeatPassword) {
        throw new Error('Password do not match!');
    }

    registerUser(email, password)
        .then(response => {

            saveUserInfo(response.user.email);

            ctx.redirect('#/home');
        })
        .catch(err => console.log(err));
}





//Login-------------------------------------------------------------
export function getLogin(ctx) {
    ctx.loadPartials(commonPartial).partial('./view/user/login.hbs')
}

export function postLogin(ctx) {

    let { email, password } = ctx.params;

    login(email, password)
        .then(response => {

            saveUserInfo(response.user.email);

            ctx.redirect('#/home');

        })
        .catch(err => console.log(err));

}







//Logout ----------------------------------------------------------------------------
export function getLogout(ctx) {

    sessionStorage.clear();

    logout()
        .then(response => {

            ctx.redirect('#/home');

        })
        .catch(err => console.log(err));
}