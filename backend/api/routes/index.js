import UserRouter from './User-router.js';
import HobbyRouter from  './Hobby-router.js';

export default (app) =>{
    app.use("/",UserRouter);
    app.use("/",HobbyRouter);
}