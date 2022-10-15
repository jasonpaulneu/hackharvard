import UserRouter from './User-router.js';
import HobbyRouter from  './Hobby-router.js';
import TagRouter from './Tag-router.js';
import UserTagRouter from './UserTag-router.js';
import PassengerTagRouter from './Passenger-router.js';

export default (app) =>{
    app.use("/",UserRouter);
    app.use("/",HobbyRouter);
    app.use("/",TagRouter);
    app.use("/",UserTagRouter);
    app.use("/",PassengerTagRouter);
}