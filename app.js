import { getHome } from './controllers/home.js';
import { getRegister, postRegister, getLogin, postLogin, getLogout } from './controllers/user.js';
import { getCreate, postCreate, getDetails, getClose, getEdit, postEdit } from './controllers/events.js';

const app = Sammy("body", function () {
    this.use("Handlebars", "hbs");

    this.get('#/home', getHome);

    this.get('#/register', getRegister);
    this.post('#/register', postRegister);

    this.get('#/login', getLogin);
    this.post('#/login', postLogin);

    this.get('#/logout', getLogout);

    this.get('#/create', getCreate);
    this.post('#/create', postCreate);

    this.get('#/details/:id', getDetails);

    this.get('#/edit/:id', getEdit);
    this.post('#/edit/:id', postEdit);

    this.get('#/close/:id', getClose);




});
app.run('#/home');