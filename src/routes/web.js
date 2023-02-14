const express = require("express");
const router = express.Router();
const { getHomepage, getABC, getHoiDanIT, postCreateUser, getCreatePage, getUpdatePage } = require("../controllers/homeController");
// router.Method("/route",handler)
router.get('/', getHomepage)
router.get('/abc', getABC)
router.get('/hoidanit', getHoiDanIT)
router.get('/create', getCreatePage)
router.get('/update/:id', getUpdatePage);

router.post('/create-user', postCreateUser);

module.exports = router; //export default 