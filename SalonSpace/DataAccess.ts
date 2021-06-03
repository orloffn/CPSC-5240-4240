import Mongoose = require("mongoose");

class DataAccess {
    static mongooseInstance: any;
    static mongooseConnection: Mongoose.Connection;
    //static DB_CONNECTION_STRING:string = 'mongodb://dbAdmin:test@localhost:3000/SalonSpace?authSource=admin';
    static DB_CONNECTION_STRING:string = 'mongodb+srv://SalonSpace123:SalonSpace123@cluster0.txxl6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';



    
    constructor () {
      // DataAccess.connect();
      { useUnifiedTopology: true }
    }
    
    static connect (): Mongoose.Connection {
        if(this.mongooseInstance) return this.mongooseInstance;
        
        this.mongooseConnection  = Mongoose.connection;
        this.mongooseConnection.on("open", () => {
            console.log("Connected to mongodb.");
        });
        
        this.mongooseInstance = Mongoose.connect(this.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    }
    
}
DataAccess.connect();
export {DataAccess};