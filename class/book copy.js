const { response } = require("express")

const url ='http://localhost:3000/api/book'
const contenedor = document.querySelector ('tbody')
let resultados = ''

const formArticulos = document.querySelector('form')  
const book_title = document.getElementById('titulo')
const book_author = document.getElementById('autor')
const book_category = document.getElementById('categoria')
const book_publishYear= document.getElementById('categoria')
const book_description = document.getElementById('descripcion')
let opcion = ''

//eliminar los datos del formularoi cuando se cree un registro
btnCrear.addEventListener('click',()=>{
  book_title.value = ''
  book_author.value = ''
  book_category.value = ''
  book_publishYear = ''
  book_description = ''
  opcion = cleanForm(document.getElementById("addBook_form").reset())

})

//funcion para mostrar los datos
const mostrar = (book) =>{
  book.forEach(books =>{
      results +=
                <tr>
                  <td>${book.book_id}</td>
                  <td>${book.book_}</td>
                </tr>
  })
}

//meotdo para mostrar los datos (la url se definió arriba: 'http://localhost:3000/api/book )
fetch(url)
  .then(response => response.json())
  .then(data => mostrar(data))
  .catch(error => console.log(error))


  