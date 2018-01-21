

const express = require('express');
const router = express.Router();

const checkAuth= require('../middleware/check-auth');
const PlaylistController = require('../controllers/playlist');


router.get('/',checkAuth, PlaylistController.playlist_get_all);

router.post('/',checkAuth, PlaylistController.playlist_create);

router.get('/:playlistId',checkAuth, PlaylistController.playlist_get_playlist);

router.delete('/:playlistId',checkAuth,PlaylistController.playlist_delete);


module.exports = router;