const mongoose= require("mongoose");

const connection = mongoose.connect(`mongodb+srv://nishant123:nishant123@cluster0.xgnitpc.mongodb.net/evalPracAnk?retryWrites=true&w=majority`)

module.exports={connection}