const express = require('express');
const router = express.Router();
const multer = require('multer');
const checkAuth = require('../middleware/check-auth');
const VideoController = require('../controllers/video');
const upload = require('../controllers/multerctrl');



router.get('/', VideoController.video_get_all);

router.post('/',  VideoController.video_create); //upload.single('videoImage'),checkAuth,

router.get('/:videoId',VideoController.vide_get_video);

router.patch('/:videoId',checkAuth, VideoController.video_edit);

router.delete('/:videoId', VideoController.video_delete);

module.exports = router;