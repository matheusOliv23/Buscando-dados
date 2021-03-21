/*

 Contar o número de categorias e o numero de livros em cada categoria
 Contar o numero de autores
 Mostrar livros do autor: Augusto Cury
 Transformar a funcao acima em uma função que irá receber o nome
 do autor e devolver os livros desse autor

 */

 const booksCategory = [
     {
         category: 'Riqueza',
         books:[
            {
                title: 'Os segredos de uma mente milionaria',
                author: 'T Harv Eker',
            },
            {
                title: 'O homem mais rico da Babilonia',
                author: 'George Clason',
            },
            {
                title: 'Pai rico pai pobre',
                author: 'Robert Sharon'
            },

         ],
     },
     {
         category: 'Inteligencia Emocional',
         books: [
             {
                 title: 'Voce é insubstituivel',
                 author: 'Augusto cury',
             },
             {
                title: 'Ansiedade - Como enfrentar o mal do século',
                author: 'Augusto cury'
             },
             {
                title:'Os 7 hábitos de pessoas altamente eficazes',
                author: 'Stephen covey'
             },
         ],
     },
 ];

 const totalCategories = booksCategory.length

 for (let category of booksCategory){
     console.log('Total de livros da categoria: ', category.category)
     console.log(category.books.length)
     
 }

 function countAuthors(){
     let authors = [];

     for (let category of booksCategory){
         for (let book of category.books){
             if (authors.indexOf(book.author) == -1){
                 authors.push(book.author)
             }
         }
     }
     console.log('Total de autores', authors.length)
 }

 countAuthors();

 function booksAugusto(author){
     let books = [];

     for (let category of booksCategory){
         for (let book of category.books){
             if (book.author === author){
                 books.push(book.title)
             }
         }
     }

     console.log(`Livros do autor ${author}: ${books.join(", ")}`)
 }

 booksAugusto('Augusto cury');