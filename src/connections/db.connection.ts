import mongoose  from 'mongoose';

class DbConnection{

    isConnected:boolean = false;
    connection : any  = null
    
    connect(url:string){
        if ( this.isConnected ){
            return true
        }
        
        mongoose.connect(url, {
            useNewUrlParser: true,
            keepAlive: true,
            connectTimeoutMS: 90000,
            socketTimeoutMS: 90000,
            connectWithNoPrimary: true,
            useUnifiedTopology: true 
          }, (err) => {
            if (err) {
              console.log('Mongodb connection error 1st');
              console.log(err);
            } else {
              this.isConnected = true;
              console.log('database connected');
            }
          });
        mongoose.set('useCreateIndex', true)
        mongoose.set('useFindAndModify', false);
    }
}
const dbConnection = new DbConnection();
export default dbConnection;