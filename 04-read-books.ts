// 4. Read Books
/**
 * Crea una función isBookRead que reciba una lista de libros
 * y un título y devuelva si se ha leído o no dicho libro.
 * Un libro es un objeto con title como string y isRead como booleano.
 * En caso de no existir el libro devolver false
 * TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.
 */

type Book = {
    title: string;
    isRead: boolean;
};

function isBookRead(books: Book[], titleToSearch: string): boolean {
    const book = books.find((b) => b.title === titleToSearch);
    return book ? book.isRead : false;
}

const books = [
    { title: 'Harry Potter y el prisionero de Azkaban', isRead: true },
    { title: 'Canción de hielo y fuego', isRead: false },
    { title: 'Devastación', isRead: false },
    { title: 'Ready player one', isRead: true },
    { title: 'Batman: The killing joke', isRead: true }
];
  // Logs:
console.log(isBookRead(books, 'Devastación')); // false
console.log(isBookRead(books, 'Canción de hielo y fuego')); // false
console.log(isBookRead(books, 'Ready player one')); // true