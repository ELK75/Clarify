const express = require("express");
const router = express.Router();

//Session Model
const Session = require("../../models/Session");

//@route GET api/sessions
//@desc get all sessions
//@access Public

router.get('/', (req,res) =>{
    Session.find()
        .sort({date: -1})
        .then(sessions => res.json(sessions))
}
)

//@route Post api/items
// @desc post all items
// @access Public
router.post('/', (req,res) =>{
    const newSession = new Session({
        sessionName: req.body.sessionName,
        posts: req.body.posts 
    });

    newSession.save().then(sesion => res.json(session));
})


router.delete('/:id', (req,res) =>{
    Session.findById(req.params.id)
    .then(session => session.remove().then(() => res.json({sucess:true})))
    .catch(err => res.status(404).json({success: false}))
})

module.exports = router;