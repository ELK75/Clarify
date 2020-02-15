const express = require("express");
const router = express.Router();

//User Model
const User = require("../../models/User");

//@route GET api/Users
//@desc get all Users
//@access Public

router.get('/', (req,res) =>{
    User.findById(req.params.id)
        .then(users => res.json(users))
}
)

//@route Post api/items
// @desc post all items
// @access Public
router.post('/', (req,res) =>{
    const newUser = new User({
        googleId: req.body.googleId,
        userName: req.body.userName,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
    });

    newUser.save().then(user => res.json(user));
})

//@route DELETE api/users/:id
//@desc Delete a user
//@access Public
router 
    .delete("/:id",(req,res)=> {
    User.findById(req.params.id)
        .then(user => user.remove().then(()=> res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
    })

module.exports = router;