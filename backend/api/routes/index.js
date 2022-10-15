import UserRouter from './User-router.js';

export default (app) =>{
    app.use("/",UserRouter);
}