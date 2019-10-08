import mongoose from 'mongoose';

export const MONGO_URI = 'mongodb://localhost/coachConnect';

export const connect = () => mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, err => {
        if (err) throw err;
        else console.log('connected to database: ' + MONGO_URI)
    }
)

export {default as User} from './User';