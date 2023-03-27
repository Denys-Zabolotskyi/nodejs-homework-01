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

// invokeAction({ action: 'get', id: 'af51c393-b1a7-4060-9555-d8c5b027f0e5' });

// invokeAction({
//   action: 'add',
//   name: 'Denys Zabolotskyi',
//   email: 'denis270323@gmail.com',
//   phone: '(066)-254-11-11',
// });

// invokeAction({
//   action: 'update',
//   id: 'bb38aa0c-3782-4fa7-9a62-1c3a4578f4b8',
//   name: 'Denys Zabolotskyi',
//   email: 'denis270323@gmail.com',
//   phone: '(063) 063-63-63',
// });

// invokeAction({
//   action: 'remove',
//   id: 'bb38aa0c-3782-4fa7-9a62-1c3a4578f4b8',
// });
