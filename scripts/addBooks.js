//Crear una clase
    class Libro{

        //atributos
        constructor(titulo, autor, categoria, fecha, desc){
            this.titulo = titulo;
            this.autor = autor;
            this.categoria = categoria;
            this.fecha = fecha;
            this.desc = desc;
        }
        //aquí irían los metodos si decidiera ponerlos

    }

    class UI{
        //metodos
        añadirLibro(libro){
           const bookList = document.getElementById("books-list");
           const element = document.createElement("div");
           element.innerHTML = `
            <div class="block text-center">
                <div class="box">
                <strong>Libro titulo</strong>: ${libro.titulo}
                <strong>Libro autor</strong>: ${libro.autor}
                <strong>Libro categoria</strong>: ${libro.categoria}
                <strong>Libro fecha</strong>: ${libro.fecha}
                <strong>Libro desc</strong>: ${libro.desc}
                </div>
            </div>
           `;
           bookList.appendChild(element);
        }
        EliminarLibro(){

        }
        //metodo para mostrar un mensaje una vez que se elimine un libro agregado
       Confirmacion(){

        }
    }

    //DOM Events (eventos del HTML)

    //Capturar los datos del formulario
    document.getElementById("addBook_form").addEventListener("submit", function(e){
        e.preventDefault();
    
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const categoria = document.getElementById("categoria").value;
    const fecha = document.getElementById("fecha").value;
    const desc = document.getElementById("desc").value;

    //console.log(document.getElementById("titulo").value)
    console.log(titulo, autor, categoria, fecha, desc);

    const libro = new Libro (titulo, autor, categoria, fecha, desc);
    
    const ui = new UI();
    ui.añadirLibro(libro);

    

    })