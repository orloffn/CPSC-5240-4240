"use strict";
exports.__esModule = true;
exports.TechnicianModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var TechnicianModel = /** @class */ (function () {
    function TechnicianModel() {
        this.createSchema();
        this.createModel();
    }
    TechnicianModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            registeredUserID: Number,
            technicianID: Number,
            skillList: Array(),
            ratingListID: Array(),
            salonListID: Array(),
            languageList: Array()
        }, { collection: 'technicians' });
    };
    TechnicianModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Technicians", this.schema);
    };
    TechnicianModel.prototype.retrieveAllTechnicians = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            console.log(itemArray);
            response.json(itemArray);
        });
    };
    TechnicianModel.prototype.retrieveTechniciansDetails = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, itemArray) {
            console.log(itemArray);
            response.json(itemArray);
        });
    };
    TechnicianModel.prototype.retrieveTechnicianRatings = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, thisTechnician) {
            Mongoose.models.Ratings.find()
                .where('ratingID')["in"](thisTechnician.ratingListID)
                .exec(function (err, ratingsArray) {
                response.json(ratingsArray);
            });
        });
    };
    TechnicianModel.prototype.retrieveTechnicianSalons = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, thisTechnician) {
            Mongoose.models.Salons.find()
                .where('salonID')["in"](thisTechnician.salonListID)
                .exec(function (err, salonsArray) {
                response.json(salonsArray);
            });
        });
    };
    TechnicianModel.prototype.retrieveTechnicianCount = function (response) {
        console.log("retrieve Technician Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec(function (err, numberOfTechnicians) {
            console.log("numberOfTechnicians: " + numberOfTechnicians);
            response.json(numberOfTechnicians);
        });
    };
    return TechnicianModel;
}());
exports.TechnicianModel = TechnicianModel;
