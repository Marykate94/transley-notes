const fs = require('fs');
const router = require('express').Router();
const notesRoute = require('../apiRoutes/notesRoute');

// need to get router for api
router.use(notesRoute);

module.exports = router;