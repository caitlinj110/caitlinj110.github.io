$(document).ready(function () {
  // Load single book
  $.getJSON('google-books-book.json', function (data) {
    const book = data.volumeInfo;
    const html = `
      <div class="book">
        <img src="${book.imageLinks?.thumbnail || ''}" alt="Book Cover">
        <h3>${book.title}</h3>
        <p><strong>Authors:</strong> ${book.authors?.join(', ') || 'N/A'}</p>
        <p><strong>Publisher:</strong> ${book.publisher || 'N/A'}</p>
        <p><strong>Description:</strong> ${book.description || 'No description'}</p>
        <div class="clear"></div>
      </div>
    `;
    $('#single-book').html(html);
  });

  // Load book list
  $.getJSON('google-books-search.json', function (data) {
    let booksHTML = '';
    data.items.forEach(function (item) {
      const info = item.volumeInfo;
      booksHTML += `
        <div class="book">
          <img src="${info.imageLinks?.thumbnail || ''}" alt="Book Cover">
          <h3>${info.title}</h3>
          <p><strong>Authors:</strong> ${info.authors?.join(', ') || 'N/A'}</p>
          <p><strong>Publisher:</strong> ${info.publisher || 'N/A'}</p>
          <div class="clear"></div>
        </div>
      `;
    });
    $('#book-list').html(booksHTML);
  });
});