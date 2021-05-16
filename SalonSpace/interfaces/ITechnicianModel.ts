import Mongoose = require("mongoose");

interface ITechnicianModel extends Mongoose.Document {
    registeredUserID: number;
    technicianID: number;
    skillListID: Array<number>;
    ratingListID: number;
    salonListID: number;
    languageListID: number;
}
export {ITechnicianModel};