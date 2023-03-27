const {
  listContacts,
  getContactById,
  addContact,
  updateContactById,
  removeContact,
} = require('./contacts');

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const allContacts = await listContacts();
      console.log(allContacts);
      break;
    case 'get':
      const oneContact = await getContactById(id);
      console.log(oneContact);
      break;
    case 'add':
      const newContact = await addContact({ name, email, phone });
      console.log(newContact);
      break;

    case 'update':
      const updateContact = await updateContactById(id, {
        name,
        email,
        phone,
      });
      console.log(updateContact);
      break;
    case 'remove':
      const removedContact = await removeContact(id);
      console.log(removedContact);
      break;
    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

// invokeAction({ action: 'list' });

// invokeAction({ action: 'get', id: 'rsKkOQUi80UsgVPCcLZZW' });
// invokeAction({
//   action: 'add',
//   name: 'Denys',
//   email: 'denis@gmail.com',
//   phone: '111-111-111',
// });

invokeAction({
  action: 'update',
  id: 'af51c393 - b1a7 - 4060 - 9555 - d8c5b027f0e5',
  name: 'Denys',
  email: 'denis270323@gmail.com',
  phone: '(099) 063-49-20',
});

// invokeAction({
//   action: 'remove',
//   id: 'af51c393-b1a7-4060-9555-d8c5b027f0e5',
// });
