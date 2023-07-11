const User = require('../models/user');

exports.getUserById = (req, res, next, email) => {
 
    User.findOne({email: email}).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({error: 'USER not found '});
        }
        req.profile = user;
        next();
    });
};


exports.getUser = (req, res) => {
    req.profile.salt = undefined;
    req.profile.encry_password = undefined;
    req.profile.createdAt = undefined;
    req.profile.updatedAt = undefined;
    return res.json(req.profile);
};

exports.getAllusers=(req,res)=>{
    console.log("fghjijiwqdiwhduhqwudgusdihdb")
    User.find().exec((err, users) => {
        if (err || !users) {
            console.log("hidbsdjdbjsdcbjldbc")
            return res.status(400).json({error: err});
        }
        res.json(users);
    });
}
exports.updateUser = (req, res) => {
     console.log(req.body.skill);
    User.findOneAndUpdate({
        email: req.profile.email
    }, 
    { $push: {skill: req.body.skill } },
     {
        new: true,
        useFindAndModify: false
    }, (err, user) => {
        if (err) {
            return res.status(400).json({error: 'your not authorized to this user'});
        }
        user.salt = undefined;
        user.encry_password = undefined;
        user.createdAt = undefined;
        user.updatedAt = undefined;
        res.json(user);
    });
};





