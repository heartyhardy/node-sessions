const express = require('express');
const root_controller = require('../controllers/root-controller');

const router = express.Router();

router.get("/", root_controller.getRoot);

module.exports = router;