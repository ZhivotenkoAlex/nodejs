const express = require('express')
const router = express.Router()
const contactsController=require('../../controllers/contactsControllers')

router
  .get('/', contactsController.getAllContats)
  .post('/',contactsController.createContact)

router
  .get("/:contactId", contactsController.getContactByID)
  .delete('/:contactId', contactsController.removeContact)
  .patch('/:contactId',contactsController.updateContact)

module.exports = router
