const { program } = require('commander');
program
  .option('-a,--action <type>')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse();
const options = program.opts();

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
      console.table(allContacts);

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

invokeAction(options);
