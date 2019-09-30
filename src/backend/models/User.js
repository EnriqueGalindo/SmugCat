import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

const saltrounds = 10;

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})

UserSchema.pre('save', function(next) {
    if(this.isNew || this.isModified('password')) {
        const document = this;
        bcrypt.hash(document.password, saltrounds, function(err, hashedPassword) {
            if (err) next(err);
            else {
                document.password = hashedPassword;
                next();
            }
        })
    } else {
        next();
    }
})

UserSchema.methods.isCorrectPassword = function(password, callback) {
    bcrypt.compare(password, this.password, (err, same) => {
        if (err) callback(err)
        else callback(err, same)
    })
}

let userModel = mongoose.model('User', UserSchema);
export default userModel;