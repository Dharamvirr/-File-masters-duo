// const mongoose = require("mongoose");

// require("dotenv").config();

// exports.dbConnect = () => {
//     mongoose.connect(process.env.DATABASE_URL)
//     .then(() => console.log("DB ka Connection is Successful"))
//     .catch( (error) => {
//         console.log("Issue in DB Connection");
//         console.error(error.message);
//         //iska matlab kya h ?
//         process.exit(1);
//     } );
// }

// //module.exports = dbConnect;
// module.exports =  dbConnect;

// const mongoose = require("mongoose");
// const dotenv = require("dotenv"); // Import dotenv before using it

// dotenv.config(); // Load environment variables from .env file

// const dbConnect = () => {
//     mongoose.connect(process.env.DATABASE_URL)
//     .then(() => console.log("DB Connection is Successful"))
//     .catch((error) => {
//         console.log("Issue in DB Connection");
//         console.error(error.message);
//         process.exit(1);
//     });
// }
// module.exports = { connect: dbConnect }; // Export connect function

const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("DB ka Connection is Successful"))
    .catch( (error) => {
        console.log("Issue in DB Connection");
        console.error(error.message);
        //iska matlab kya h ?
        process.exit(1);
    } );
}

module.exports = dbConnect;