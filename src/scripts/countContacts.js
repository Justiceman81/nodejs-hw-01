import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const contacts = await readContacts();
  const parsContacts = JSON.parse(contacts);
  return parsContacts.length;
};

console.log(await countContacts());
