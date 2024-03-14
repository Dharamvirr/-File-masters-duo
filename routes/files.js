// const router = require('express').Router();
// const multer = require('multer');
// const path = require('path');
// const File = require('../models/file');
// const { v4: uuidv4 } = require('uuid');//call uuid from extension

// //basic configuaration of multer storage
// let storage = multer.diskStorage({
//     destination: (req,file,cb)=>cb(null,'uploads/'),
//     //files ka unique naam
//     filename:(req,file,cb)=>{
//         const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
//         cb(null, uniqueName);
// //3456866(current date)-math.random 0to 1 mese no dega ;extension mil jayega file ka
//     },
// });
// let upload = multer({
//     storage,//storage:storage
//     //key aur value same hai ti storage,likh skte
//     limits:{ fileSize: 100000 * 100},
// }).single('myfile');//frontend se jo name attribute dena hai

// //  / stands for /api/files..
// router.post('/', (req, res) => {
//      //validate request 
//        //store file
//     upload(req, res, async (err) => {
//       /*  if(!req.file){
//             return res.json({error:'All fields are required.'});
//          }*/
//       //async because we are using await 
//       if (err) {
//         return res.status(500).send({ error: err.message });
//         //fronted me error show ho jayengi
//       }
//       //store into Database create model
//         const file = new File({
//             filename: req.file.filename,
//             uuid: uuidv4(),//install uuid package to give it to each file
//             path: req.file.path,
//         //multer pura filename with path create krdega dest k liye
//             size: req.file.size
//         });
//         const response = await file.save();
//          return res.json({ file: `${process.env.APP_BASE_URL}/files/${response.uuid}` });
//       });//domain name
// });
//module.exports=router;