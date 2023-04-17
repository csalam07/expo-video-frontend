export const getFilteredData = (dummyContacts, input) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        dummyContacts.filter((contact) =>
          contact.user_display_name.toLowerCase().includes(input.toLowerCase()),
        ),
      );
    }, Math.random() * 1000);
  });
};
