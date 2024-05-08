const express = require("express");
const { getAllUser, getUser, updateUser, deleteUser, signUp } = require("../cntrl/userCntrl");

const router = express.Router();

router.get('/getAll' , getAllUser);
router.get('/get/:id' , getUser);
router.put('/update/:id' , updateUser);
router.delete('/delete/:id' , deleteUser);
router.post('/signUp',signUp);

module.exports = router;