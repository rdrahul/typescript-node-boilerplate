/*
import redis  from "redis";
import config from "../config/config";
export class Redis{
    public redis = null;
    constructor(){
        if( this.redis == null ){
            this.CreateConnection();
        }
    }
    CreateConnection(){
        if(config["redisHost"] === undefined){
            return;
        }
        this.redis= redis.createClient(config.redisHost);
        this.Connection();
        this.Error();
    }
 

    Connection(){
        this.redis.on('connect' , () => {
            console.log("Redis Connected!!");
        });
    }

    Error(){
        this.redis.on('error' , ( err ) => {
            console.log("Redis Error : " , err);
        })
    }

    CloseConnection(){
        this.redis.quit();
    }
    
}

export const redisConn =  new Redis()
*/