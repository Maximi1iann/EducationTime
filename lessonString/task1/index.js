

const contacts = [
    {
        name: 'Tom',
        phoneNumber: '666-66-66',
    },
    {
        name: 'John',
        phoneNumber: '555-55-55',
    },
    {
        name: 'Ann',
        phoneNumber: '333-44-44',
    },
    {
        name: 'Staphan',
        phoneNumber: '444-44-44',
    },
    {
        name: 'Suzy',
        phoneNumber: '222-22-22',
    },
    {
        name: 'Adel',
        phoneNumber: '111-11-11',
    },
];

const sortContacts = contacts => {
    const result = contacts
        .sort((a, b) => {
            return a.name.localeCompare(b.name)
        });

    return result;
}

console.log(sortContacts(contacts));