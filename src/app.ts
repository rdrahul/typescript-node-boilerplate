
import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
import mongoSanitize from "mongo-express-sanitize";

import config from "./config/config";
import { DbConn } from './connections';
import morgan from "morgan";
import logger from "./utils/logger";
import cors from "cors";

global["config"] = config;

// Controllers (route handlers)
const router = express.Router();

// Create Express server
const app = express();


// Express configuration
app.use(helmet());
app.use(mongoSanitize());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '10mb' }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
app.use(morgan("combined"))

//cors
app.use(cors());

//connect your db here
// DbConn.connect(config.db);

// app.use('/v1/auth', Route);

//============================================= HEALTH ENDPOINTS ======================= //
router.get("/health/liveness", async (req, res) => {

    try {

        //write logic here 
        return res.status(200).json({ message: 'OK' })

    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: 'unavailable' })
    }

});

router.get("/health/readiness", (req, res) => {
    //db connection
    //write logic here
    return res.status(200).json({ message: 'OK' })
    
});


app.use('', router);
//============================================= END ======================= //

app.set("port", process.env.NODE_PORT || 4040);
app.set('env', process.env.NODE_ENV);

export default app;