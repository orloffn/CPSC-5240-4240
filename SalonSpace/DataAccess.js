"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAccess = void 0;
const Mongoose = require("mongoose");
class DataAccess {
    constructor() {
        // DataAccess.connect();
        // { useUnifiedTopology: true };
        //{ useNewUrlParser: true };
    }
    static connect() {
        if (this.mongooseInstance)
            return this.mongooseInstance;
        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.on("open", () => {
            console.log("Connected to mongodb.");
        });
        this.mongooseInstance = Mongoose.connect(this.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    }
}
exports.DataAccess = DataAccess;
//static DB_CONNECTION_STRING:string = 'mongodb://dbAdmin:test@localhost:3000/SalonSpace?authSource=admin';
DataAccess.DB_CONNECTION_STRING = 'mongodb+srv://SalonSpace123:SalonSpace123@cluster0.txxl6.mongodb.net/SalonSpace?retryWrites=true&w=majority';
DataAccess.connect();
