import commonPartial from './partials.js';
import { setHeader, saveUserInfo } from './auth.js';
import { getAll } from '../models/events.js';



//GetHome---------------------------------------------------------------------
export function getHome(ctx) {

    setHeader(ctx);

    getAll()
        .then(res => {

            let posts = res.docs.map(x => x = { ...x.data(), id: x.id });

            ctx.posts = posts;
            ctx.loadPartials(commonPartial).partial('./view/home.hbs')
        })



}