import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();
  const parsContacts = JSON.parse(contacts);
  parsContacts.pop();
  await writeContacts(parsContacts);
};

removeLastContact();
