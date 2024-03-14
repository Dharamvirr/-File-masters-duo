const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//blueprint database k andar document kaisa dikhna chahiye
const fileSchema = new Schema({
    filename: { type: String, required: true },//requied means is it compulsary
    path: { type: String, required: true },
    size: { type: Number, required: true },//generate for each id
    uuid: { type: String, required: true },
    sender: { type: String, required: false },//sender ka email optional
    receiver: { type: String, required: false },
}, { timestamps: true });//fields like created at and updated at will get generated

module.exports = mongoose.model('File', fileSchema);//model generated