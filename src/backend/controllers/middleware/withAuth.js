const jwt = require('jsonwebtoken');
const secret = 'mysecretsshhh';

export default function(req, res, next) {
    const token = 
        req.body.token ||
        req.query.token ||
        req.headers['x-access-token'] ||
        req.cookies.token;

    if (!token) {
        res.status(401)
            .send('Unathorized: No Token Provided')
    } else {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                res.status(401)
                    .send('Unathorized Invalid Token')
            } else {
                req.email = decoded.email
                next();
            }
        })
    }
}