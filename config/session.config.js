const oneMinute = 60 * 1000

const config = {
    secret: process.env.SESSION_SECRET_KEY,
    saveUninitialized: false,
    resave: false,
    cookie: { 
        maxAge: oneMinute, 
        secure: true // set to true in production
    }
}

export default config;