// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].id === id) {
      return accounts[i];
    }
  }
}

function sortAccountsByLastName(accounts) {
  accounts.sort((acctA, acctB) => (acctA.name.last < acctB.name.last ? -1 : 1)); return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  let result = books.reduce((acc, book) => {
    for (let i = 0; i < book.borrows.length; i++) {
      if (book.borrows[i].id === account.id) {
        acc++
      }
    }
    return acc
  }, 0)
  return result
}

function getBooksPossessedByAccount(account, books, authors) {
  return books.filter((book) => {
    const borrow = book.borrows[0];
    return !borrow.returned && borrow.id === account.id;
  }).map((book) => {
    const author = authors.find((author) => author.id === book.authorId);
    return { ...book, author };
  });
};

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};




/*



It returns an array of books and authors that represents all books _currently checked out_ by the given account.
_Look carefully at the object below,_ as it's not just the book object; the author object is embedded inside of it.

**Example:**

```javascript
getBooksPossessedByAccount(account, books, authors);
/*
  [
    {
      id: "5f447132320b4bc16f950076",
      title: "est voluptate nisi",
      genre: "Classics",
      authorId: 12,
      author: {
        id: 12,
        name: {
          first: "Chrystal",
          last: "Lester",
        },
      },
      borrows: [
        {
          id: "5f446f2e6059326d9feb9a68",
          returned: false,
        },
        ...
      ],
    },
  ]

*/