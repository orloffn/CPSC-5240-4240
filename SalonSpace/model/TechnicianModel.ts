import Mongoose = require('mongoose');
import {DataAccess} from '../DataAccess';
import {ITechnicianModel} from '../interfaces/ITechnicianModel';

let mongooseConnection = DataAccess.mongooseConnection;

class TechnicianModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                registeredUserID: Number,
                technicianID: Number,
                skillList: Array<string>(),
                ratingListID: Array<number>(),
                salonListID: Array<number>(),
                languageList: Array<string>()
            }, {collection: 'technicians'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<ITechnicianModel>("Technicians", this.schema);
    }

    public retrieveAllTechnicians(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            console.log(itemArray);
            response.json(itemArray) ;
        });
        
    }
    
    public retrieveTechniciansDetails(response:any, filter:Object) {
        var query = this.model.findOne(filter);
        query.exec( (err, itemArray) => {
            console.log(itemArray);
            response.json(itemArray);
        });
    }

    public retrieveTechnicianRatings(response:any, filter:Object) {
        var query = this.model.findOne(filter);
        query.exec( (err, thisTechnician) => {
            Mongoose.models.Ratings.find()
            .where('ratingID')
            .in(thisTechnician.ratingListID)
            .exec( (err, ratingsArray) => {
                response.json(ratingsArray);
            });
        });
    }

    public retrieveTechnicianSalons(response:any, filter:Object) {
        var query = this.model.findOne(filter);
        query.exec( (err, thisTechnician) => {
            Mongoose.models.Salons.find()
            .where('salonID')
            .in(thisTechnician.salonListID)
            .exec( (err, salonsArray) => {
                response.json(salonsArray);
            });
        });
    }

    public retrieveTechnicianCount(response:any): any {
        console.log("retrieve Technician Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec( (err, numberOfTechnicians) => {
            console.log("numberOfTechnicians: " + numberOfTechnicians);
            response.json(numberOfTechnicians) ;
        });
    }

}
export {TechnicianModel};