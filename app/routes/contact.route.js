const express = require("express")
const router = express.Router()
const contacts = require("../controllers/contact.controller")

// 
// router.get('/contacts', contactController.getContacts);
router.route("/")
    .get(contacts.findAll)
    .post(contacts.create)
    .delete(contacts.deleteAll)

router.route("/favorite")
    .get(contacts.findAllFavorite)

router.route("/:id")
    .get(contacts.findOne)
    .put(contacts.update)
    .patch(contacts.delete)

module.exports = router