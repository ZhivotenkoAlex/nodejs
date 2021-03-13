const express = require('express')
const router = express.Router()
const contactsController = require('../../../controllers/contactsControllers')
const guard = require('../../../helpers/guard')


router
  .get('/', guard,  contactsController.getAllContats)
  .post('/', guard, contactsController.createContact)

router
  .get("/:contactId", guard, contactsController.getContactByID)
  .delete('/:contactId', guard, contactsController.removeContact)
  .patch('/:contactId', guard,contactsController.updateContact)

module.exports = router
