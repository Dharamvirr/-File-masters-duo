const router = require('express').Router();
const File = require('../models/file.cjs');

router.get('/:uuid', async (req, res) => {
    //files k aage uuid denge download page k link pe
    //: mtlb dynamic parameter ye har ek case k liye alag hoaga
    try {

        //await likha h to async likhke error handling krna pdega
        //findone kyoki ek row fetch krna hai apne database se
        const file = await File.findOne({ uuid: req.params.uuid });//params object me sare dynamic parameters aa jate h.
        // Link expired
        if(!file) {
            return res.render('download', { error: 'Link has been expired.'});
        } 
        return res.render('download', { uuid: file.uuid, fileName: file.filename, fileSize: file.size, downloadLink: `${process.env.APP_BASE_URL}/files/download/${file.uuid}` });
    } catch(err) {
        return res.render('download', { error: 'Something went wrong.'});
    }
});




module.exports=router;