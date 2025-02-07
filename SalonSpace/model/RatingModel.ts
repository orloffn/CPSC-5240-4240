import Mongoose = require("mongoose");
import {DataAccess} from '../DataAccess';
import {IRatingsModel} from '../interfaces/IRatingModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class RatingModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                ratingID: Number,
                stars: Number,
                text: String,
            }, {collection: 'ratings'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IRatingsModel>("Ratings", this.schema);
    }

    public retrieveAllRatings(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
        
    }

    // public retrieveTechnicianRatings(response: any): any {
    //     var query = this.model.find({ ratingID: });
    // }

    public retrieveRatingsDetails(response:any, filter:Object) {
        var query = this.model.findOne(filter);
        query.exec( (err, rating) => {
            response.json(rating);
        });
    }

    public retrieveAllratingsCount(response:any): any {
        console.log("retrieve Ratings Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec( (err, numberOfRatings) => {
            console.log("numberOfRatings: " + numberOfRatings);
            response.json(numberOfRatings) ;
        });
    }
}
export {RatingModel};