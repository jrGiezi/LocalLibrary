// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  for (let i = 0; i < authors.length; i++) {
    if (authors[i].id === id) {
      return authors[i];
    }
  }
}

function findBookById(books, id) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].id === id) {
      return books[i];
    }
  }
}

function partitionBooksByBorrowedStatus(books) {
  let array1 = [];
  let array2 = [];
  for (let i = 0; i < books.length; i++) {
    const notReturned = books[i].borrows.find((item) => item.returned === false)
    if (notReturned) {
      array1.push(books[i]);
    } else {
      array2.push(books[i]);
    }
  }
  return [array1, array2];
}


function getBorrowersForBook({borrows}, accounts) {
  let borrowers = [];
  accounts.map((account) => {
    borrows.find((borrow) => {
      if(borrow.id === account.id) { 
        account["returned"] = borrow.returned;
        borrowers.push(account);
      };
    });
  });
  return borrowers.splice(0, 10);
};

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};


/*

It should return an array of all the transactions from the book's `borrows` key. 
However, each transaction should include the related account information and the `returned` key.

**Example:**

```javascript
getBorrowersForBook(book, accounts);
/*
  [
    {
      id: "5f446f2e4eff1030e7316861",
      returned: true,
      picture: "https://api.adorable.io/avatars/75/barber.waters@kegular.biz",
      age: 37,
      name: {
        first: "Barber",
        last: "Waters",
      },
      company: "KEGULAR",
      email: "barber.waters@kegular.biz",
      registered: "Tuesday, April 14, 2020 9:15 PM",
    },
    {
      id: "5f446f2ecc5c4787c403f844",
      returned: true,
      picture: "https://api.adorable.io/avatars/75/dyer.trevino@slax.io",
      age: 34,
      name: {
        first: "Dyer",
        last: "Trevino",
      },
      company: "SLAX",
      email: "dyer.trevino@slax.io",
      registered: "Saturday, August 1, 2015 8:13 PM",
    },
  ]
  }*/