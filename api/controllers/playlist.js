const mongoose =require('mongoose');
const Playlist = require('../models/playlist');
const Video = require('../models/video');

exports.playlist_get_all = (req, res, next)=>{
    Playlist.find()
    .select('name _id video')
    .populate('video','name description url')
    .exec()
    .then(docs => {
        res.status(200).json({
            playlists: docs.map(doc=>{
                return{
                    _id: doc._id,
                    name: doc.name,
                    video:doc.video
                }
            })
        });
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
}

exports.playlist_create = (req, res, next)=>{
    Video.findById(req.body.videoId)
    .then(video =>{
        if(!video){
            return res.status(404).json({
                message:'video not found'
            });
        }
        const playlist = new Playlist({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        video: req.body.videoId
    });
    return playlist.save()
    })
    .then(result =>{
        console.log(result);
        res.status(201).json({
            message: 'playlist stored',
            request:{
                type:'GET'}
        });
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    });

}
exports.playlist_get_playlist =(req, res, next)=>{
    Playlist.findById(req.params.playlistId)
    .populate('video','name description url')
    .exec()
    .then(playlist =>{
        if(!playlist){
            return res.status(200).json({
                message:'playlist not found'
            })
        }
        res.status(200).json({
            playlist: playlist,
            request:{
                type:'GET',
                urltype:'http://localhost:3000/playlist'
            }
        })
    })
    .catch(err =>{
        res.status(500).json({
            error:err
        })
    })

}

exports.playlist_delete = (req, res, next)=>{
    Playlist.remove({_id:req.params.playlistId})
    .exec()
    .then(result =>{
        res.status(200).json({
            message:'Playlist deleted',
            request:{
                type:'GET',
                urltype:'http://localhost:3000/playlist'
            }
        })
    })
    .catch(err =>{
        res.status(500).json({
            error:err
        })
    })
}