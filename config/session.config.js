const oneMinute = 60 * 1000

export default config = {
    secret: process.env.SESSION_SECRET_KEY,
    saveUninitialized: false,
    resave: false,
    cookie: { 
        maxAge: oneMinute, 
        secure: false // set to true in production
    }
}