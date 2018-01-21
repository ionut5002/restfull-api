const mongoose = require('mongoose');

const playlistSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required:true},
    video: {type:mongoose.Schema.Types.ObjectId, ref:'Video', required:true}
    
})

module.exports = mongoose.model('Playlist', playlistSchema);