import commonPartial from './partials.js';
import { setHeader, saveUserInfo } from './auth.js';
import { create, get, update, close, getAll } from '../models/events.js';

//Create ---------------------------------------------------------
export function getCreate(ctx) {

    setHeader(ctx);

    ctx.loadPartials(commonPartial).partial('./view/events/create.hbs');

}

export function postCreate(ctx) {

    let { title, category, content } = ctx.params;

    create({ title, category, content })
        .then(response => {

            ctx.redirect('#/home');

        })
        .catch(err => console.log(err));

}

//Details------------------------------------------------------------
export function getDetails(ctx) {

    getAll()
        .then(res => {

            let posts = res.docs.map(x => x = { ...x.data(), id: x.id });

            let result = posts.find(p => p.id === ctx.params.id);

            ctx.ress = result;

            ctx.loadPartials(commonPartial).partial('./view/events/details.hbs')

        })


}





//Close------------------------------------------------------------------
export function getClose(ctx) {

    getAll()
        .then(res => {

            let posts = res.docs.map(x => x = { ...x.data(), id: x.id });

            let result = posts.find(p => p.id === ctx.params.id);

            close(result.id)
                .then(res => {

                    ctx.redirect('#/home');
                })

        })
}






//Edit------------------------------------------------------------
export function getEdit(ctx) {

    setHeader(ctx);

    getAll()
        .then(res => {

            let posts = res.docs.map(x => x = { ...x.data(), id: x.id });

            let result = posts.find(p => p.id === ctx.params.id);

            ctx.resEd = result;
            ctx.loadPartials(commonPartial).partial('./view/events/edit.hbs')
        })


}

export function postEdit(ctx) {

    setHeader(ctx);

    let { title, category, content } = ctx.params;

    update(ctx.params.id, { title, category, content })
        .then(res => {


            ctx.redirect('#/home');
        })


}