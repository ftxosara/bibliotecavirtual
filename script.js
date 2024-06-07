document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");
    const searchFilter = document.getElementById("search-filter");
    const booksList = document.getElementById("books-list");

    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const query = searchInput.value.toLowerCase();
        const filter = searchFilter.value;
        searchBooks(query, filter);
    });

    const searchBooks = (query, filter) => {
        booksList.innerHTML = "";
        let foundBooks = libros.filter(libro => libro[filter].toLowerCase().includes(query));

        if (foundBooks.length > 0) {
            foundBooks.forEach(libro => {
                const bookItem = document.createElement("div");
                bookItem.classList.add("book-item");

                const title = document.createElement("h3");
                title.textContent = libro.nombre;
                bookItem.appendChild(title);

                const author = document.createElement("p");
                author.textContent = `Autor: ${libro.autor}`;
                bookItem.appendChild(author);

                const genre = document.createElement("p");
                genre.textContent = `Género: ${libro.genero}`;
                bookItem.appendChild(genre);

                const theme = document.createElement("p");
                theme.textContent = `Tema: ${libro.tema}`;
                bookItem.appendChild(theme);

                const isbn = document.createElement("p");
                isbn.textContent = `ISBN: ${libro.isbn}`;
                bookItem.appendChild(isbn);

                const copies = document.createElement("p");
                copies.textContent = `Ejemplares: ${libro.ejemplares} (Disponibles: ${libro.disponibles})`;
                bookItem.appendChild(copies);

                const pages = document.createElement("p");
                pages.textContent = `Páginas: ${libro.descripcion.paginas}`;
                bookItem.appendChild(pages);

                const publisher = document.createElement("p");
                publisher.textContent = `Editorial: ${libro.descripcion.editorial}`;
                bookItem.appendChild(publisher);

                const publicationDate = document.createElement("p");
                publicationDate.textContent = `Fecha de Publicación: ${libro.descripcion.fechaPublicacion}`;
                bookItem.appendChild(publicationDate);

                const summary = document.createElement("p");
                summary.textContent = `Resumen: ${libro.descripcion.resumen}`;
                bookItem.appendChild(summary);

                booksList.appendChild(bookItem);
            });
        } else {
            alert("No se encontraron libros que coincidan con la búsqueda.");
        }
    };
});
