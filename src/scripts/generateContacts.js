import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const contacts = await readContacts();
  const parsContacts = JSON.parse(contacts);
  for (let i = 0; i < number; i++) {
    parsContacts.push(createFakeContact());
  }
  await writeContacts(parsContacts);
};

generateContacts(5);
