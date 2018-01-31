const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required:true},
    description: String,
    url: {type: String, required: true},
    videoImage: {type: String},
    userId: {type:String, required:true}
})

module.exports = mongoose.model('Video', videoSchema);