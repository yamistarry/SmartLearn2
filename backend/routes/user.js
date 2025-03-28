const express = require('express');
const router = express.Router();
const registerUser = require('../Controllers/registerUser');
const loginUser=require('../Controllers/loginUser');
const verifyOtp = require('../Controllers/verifyOtp');
const submitUserDetails=require("../Controllers/SubmitUserDetails");

const {createOrUpdateTimetable,updateDaySchedule,getTt}=require('../Controllers/timetable.js')
//const {addTimetable,getTimetable}=require('../Controllers/ExamController.js');


const userProfile = require("../Controllers/userProfile");

router.post('/welcome', submitUserDetails);
// router.get('/profile/:email', getUserProfile);
router.post('/register', registerUser);
router.post('/login',loginUser);
router.post('/verify-otp',verifyOtp);

router.put('/updateDaySchedule/:semester/:branch/:day',updateDaySchedule);
router.post('/createOrUpdateTimetable',createOrUpdateTimetable);
router.post('/addTimetable', createOrUpdateTimetable);
// router.get('/getTimetable',getTimetable);
router.get('/getTt/:semester/:branch',getTt);



router.get('/profile/:email', userProfile);
module.exports = router;