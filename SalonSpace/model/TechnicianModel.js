"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
const DataAccess_1 = require("../DataAccess");
let mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
class TechnicianModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = new Mongoose.Schema({
            registeredUserID: Number,
            technicianID: Number,
            skillList: Array(),
            ratingListID: Array(),
            salonListID: Array(),
            languageList: Array()
        }, { collection: 'technicians' });
    }
    createModel() {
        this.model = mongooseConnection.model("Technicians", this.schema);
    }
    retrieveAllTechnicians(response) {
        var query = this.model.find({});
        query.exec((err, itemArray) => {
            console.log(itemArray);
            response.json(itemArray);
        });
    }
    retrieveTechniciansDetails(response, filter) {
        var query = this.model.findOne(filter);
        query.exec((err, itemArray) => {
            console.log(itemArray);
            response.json(itemArray);
        });
    }
    retrieveTechnicianRatings(response, filter) {
        var query = this.model.findOne(filter);
        query.exec((err, thisTechnician) => {
            Mongoose.models.Ratings.find()
                .where('ratingID')
                .in(thisTechnician.ratingListID)
                .exec((err, ratingsArray) => {
                response.json(ratingsArray);
            });
        });
    }
    retrieveTechnicianSalons(response, filter) {
        var query = this.model.findOne(filter);
        query.exec((err, thisTechnician) => {
            Mongoose.models.Salons.find()
                .where('salonID')
                .in(thisTechnician.salonListID)
                .exec((err, salonsArray) => {
                response.json(salonsArray);
            });
        });
    }
    retrieveTechnicianCount(response) {
        console.log("retrieve Technician Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec((err, numberOfTechnicians) => {
            console.log("numberOfTechnicians: " + numberOfTechnicians);
            response.json(numberOfTechnicians);
        });
    }
}
exports.TechnicianModel = TechnicianModel;
