const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRoutes = require("./routers/auth");
const userRoutes = require("./routers/user");
const AlumniRoutes = require("./routers/Alumni");
const classRoutes = require("./routers/classRoom");
// const passportSetup = require("./config/passport-setup");
const passport = require('passport');
// const OAuth2Strategy = require('passport-google-oauth20').Strategy;
// const User = require('./models/user');
var session = require('express-session');
const { getAllusers } = require('./controlers/user');
const app = express();


// Middle wares
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(session({
  name : 'codeil',
  secret : 'something',
  resave :false,
  saveUninitialized: true,
  cookie : {
          maxAge:(1000 * 60 * 100)
  }      
}));
// app.post('/auth/google', (req, res) => {
//     const token = req.body.access_token;
//   console.log(`heyya i am at backend ${token}`)
//     async function verify() {
//       const ticket = await client.verifyIdToken({
//         idToken: token,
//         audience: '843567927500-a0pa98jkklh4msck5b3ubvvu0u6b4qj4.apps.googleusercontent.com',
//       });
  
//       const payload = ticket.getPayload();
//       const userid = payload['sub'];
  
//       console.log('Verification successful: ', payload);
//       // Create or update the user in your database
//       // Return a JWT or session cookie to the frontend for future authentication
//     }
  
//     verify().catch((error) => {
//       console.log('Verification failed: ', error);
//     });
//   });
  
// initialize passport
app.use(passport.initialize());
app.use(passport.session());


// Routes
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/classroom", classRoutes);
app.use("/alumni", AlumniRoutes);
app.get('/', (req, res) => {
    res.send('My worldooo!');
})

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,    
}).then(() => {
    console.log('DB IS CONNECTED');
});


// Configure the Google OAuth2 strategy
// passport.use(new OAuth2Strategy({
//     authorizationURL: 'https://accounts.google.com/o/oauth2/auth',
//     tokenURL: 'https://accounts.google.com/o/oauth2/token',
//     clientID: '801486379998-agbopdvuqo9pnm1o7hcjdsij8oebsp1s.apps.googleusercontent.com',
//     clientSecret: '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',
//     callbackURL: 'http://localhost:3001/auth/google/callback', // This should be a route in your Mongoose app that handles the callback
//     scope: ['email', 'profile']
// },
// function(accessToken, refreshToken, profile, done) {


//     }));


// function ensureAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) {
//       return next();
//     }
//     res.redirect('/login');
// }

// // Define a middleware function to check if the user's email is allowed
// function ensureEmailAllowed(req, res, next) {
//     const email = req.user.email;
//     if (email.endsWith('@myinstitute.edu')) {
//       return next();
//     }
//     res.status(403).send('Access denied.');
// }

// Define a restricted route that requires authentication and email validation
// app.get('/restricted', ensureAuthenticated, ensureEmailAllowed, (req, res) => {
//     res.send('This is a restricted page that requires authentication and email validation.');
// });

// Define a login route that uses OAuth authentication


// Define a callback route that handles the OAuth callback and redirects to the restricted route
// app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
//     res.redirect('/restricted');
// });


// app.get('/login', passport.authenticate('google'));

// // Define a route to handle the callback from Google
// app.get('/auth/google/callback',
// passport.authenticate('google', { failureRedirect: '/login' }),
// function(req, res) {
//     res.redirect('/');
// });


app.listen(3001, () => {
    console.log(`jebhdhbkd ${3001}`);
})
