// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  let totalNumber = Object.keys(books).length;
  return totalNumber;
}

function getTotalAccountsCount(accounts) {
  let totalAccounts = Object.keys(accounts).length;
  return totalAccounts;
}

function getBooksBorrowedCount(books) {
  let result = books.reduce((acc, book) => {
    for (let i = 0; i < book.borrows.length; i++) {
      if (book.borrows[i].returned === false) {
        acc++
      }
    }
    return acc
  }, 0)
  return result
}

function getMostCommonGenres(books) {
  let genres = {};
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    if (genres[book.genre]) {
      genres[book.genre]++;
    } else {
      genres[book.genre] = 1;
    }
  }
  let results = [];
  for (let key in genres) {
    results.push({
      name: key,
      count: genres[key]
    })
  }
  results = results.sort((ObjA, ObjB) => ObjB.count - ObjA.count)
  return results.slice(0, 5);
}


function getMostPopularBooks(books) {
  let result = [];

  books.forEach(book => {
    const title = book.title;
    const number = book.borrows.length;
    const Obj = { "name": title, "count": number };
    result.push(Obj);
    
  });
  return result.sort((one, two) => one.count < two.count ? 1 : -1).splice(0, 5);
}

//This personally input function is meant to act as a helper for the final function, getMostPopularAuthors
function sortTopToBottom(arr){
  return arr.sort((one, two) => one.count < two.count ? 1 : -1).splice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let result = [];
  
    books.forEach(book => {
      const number = book.borrows.length;
      authors.forEach(author => {
        const first = author.name.first;
        const last = author.name.last;
        const full = `${first} ${last}`;
        
          if (author.id === book.authorId){
            const complete = {"name": full, "count": number}
            result.push(complete);
          }
        });
    });
    return sortTopToBottom(result);
  }

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};


/*





*/