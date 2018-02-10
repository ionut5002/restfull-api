const mongoose = require('mongoose');
const Video = require('../models/video');

exports.video_get_all = (req, res, next)=>{
    Video.find()
    .select('name description _id url videoImage playlistId')
    .exec()
    .then( docs =>{
        const response ={
            count: docs.length,
            videos: docs.map(doc =>{
                return{
                    name: doc.name,
                    description: doc.description,
                    _id: doc._id,
                    url: doc.url,
                    playlistId:doc.playlistId,
                    videoImage: doc.videoImage,
                    request:{
                        type: 'GET',
                        urltype:'http://localhost:3000/videos/'+doc._id
                    }
                }
            })
        };
        res.status(200).json(response);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}

exports.video_create = (req, res, next)=>{
    console.log(req.file)
    const video = new Video({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        description: req.body.description,
        url: req.body.url,
        //videoImage: req.file.path,
        playlistId: req.body.playlistId
    });
    video.save()
    .then(result =>{
        console.log(result);
        res.status(201).json({
            message:'handling POST request to /video',
            createdVideo: {
                name: result.name,
                description: result.description,
                url: result.url,
                _id: result._id,
               // videoImage: result.videoImage ,
                playlistId: result.playlistId,
                request :{
                    type: 'GET',
                    url:'http://localhost:3000/videos/'+ result._id
                }

            }
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({errror:err});
    });
    
}

exports.vide_get_video = (req, res, next)=>{
    const id = req.params.videoId;
    Video.findById(id)
    .select('name description url _id videoImage')
    .exec()
    .then( doc =>{
        console.log(doc);
        if (doc) {
            res.status(200).json({
                name: doc.name,
                description: doc.description,
                _id: doc._id,
                url: doc.url,
                userId: doc.userId,
                request:{
                    type:"PATCH",
                    urltype:'http://localhost:3000/videos/'+id
                }
            });
        } else {
            res.status(404).json({message: 'not valid entry'});
        }
        
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    }); 
}

exports.video_edit = (req, res, next)=>{
    const id =req.params.videoId;
    const updateOps = {};
    for(const ops of req.body){
        updateOps[ops.propName]= ops.value;
    }
    Video.update({_id:id}, {$set: updateOps })
    .exec()
    .then(result =>{
        res.status(200).json({
            message:"product update",
            request:{
                type: 'GET',
                urltype: 'http://localhost:3000/videos/'+ id
            }

        });
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    });
}

exports.video_delete = (req, res, next)=>{
    const id =req.params.videoId
    Video.remove({_id: id})
    .exec()
    .then( result =>{
        res.status(200).json({message:"product deleted",
        request:{
            type: 'GET',
            description:'get all products',
            urltype: 'http://localhost:3000/videos/'
        }
    });

    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    });
}