import jwt from 'jsonwebtoken';
import User from '../../models/User';

const secret = 'mysecretsshhh';

export const register = (req, res) => {
    const { email, password } = req.body;
    const user = new User({ email, password });

    user.save( err => {
        if (err) {
            res.status(500)
            .send(err)
        } else {
            res.status(200)
            .send('welcome!')
        }
    })
}

export const login = (req, res) => {
    const { email, password } = req.body;
    
    User.findOne({email}, (err, user) => {
        if(err) {
            res.status(500)
                .json({ error: 'Internal server error please try again' })
        } else if (!user) {
            res.status(401)
                .json({ error: 'Incorrect username or password' })
        } else {
            user.isCorrectPassword(password, (err, same) => {
                if (err) {
                    res.status(500)
                        .json({ error: 'Internal error please try again'})
                } else if (!same) {
                    res.status(401)
                        .json({ error: "Incorrect username or password"})
                } else {
                    const payload = { email };
                    const token = jwt.sign(payload, secret, { expiresIn: '1h' })
                    res.cookie('token', token, { httpOnly: true })
                        .sendStatus(200);
                }
            })
        }
    })
}