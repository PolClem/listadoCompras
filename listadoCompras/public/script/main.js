var cargaDatos = new bootstrap.Modal(document.getElementById('cargaDatos'), {} )
let inicio = document.getElementById ('inicio')
let listaCargada = document.getElementById('listaCargada')
let lista = document.getElementById('lista')
let descripcion = document.getElementById('descripcion')
let listadoStorage = []


let guardar=document.getElementById('cargaDatosAdd').addEventListener('click', function(){
  let producto =document.getElementById('cargaDatosProducto').value
  let icono =document.getElementById('cargaDatosIcono').value
  let info =document.getElementById('cargaDatosInfo').value
    if(producto == "") {
      alert('Debes ingresar un producto.');
      return;
    }    
  document.getElementById('cargaDatosProducto').value = ""
  document.getElementById('cargaDatosIcono').value = ""
  document.getElementById('cargaDatosInfo').value = ""

  let modelo =  `<li class = "list-group-item" data-producto = "${producto}" data-icono = "${icono}" data-info = "${info}">
  <img src="${icono}" alt="${producto}" class="pantallaListadoIcono">${producto}</li>`
  listaCargada.innerHTML += modelo
  cargaDatos.hide()
  inicio.style.display = 'none'
  lista.style.display = 'block'
  listadoStorage.push(modelo)
  localStorage.setItem('listadoCompras', listadoStorage)
})

let guarda=document.getElementById('cargaDatosAg').addEventListener('click', function(){
  let producto =document.getElementById('cargaDatosProd').value
  let icono =document.getElementById('cargaDatosIcon').value
  let info =document.getElementById('cargaDatosIn').value
    if(producto == "") {
      alert('Debes ingresar un producto.');
      return;
    }    
  document.getElementById('cargaDatosProd').value = ""
  document.getElementById('cargaDatosIcon').value = ""
  document.getElementById('cargaDatosIn').value = ""

  const eliminar = document. createElement('eliminar');
  eliminar.type = 'eliminar';
  eliminar.innerText = '🗑';
  document.classList.appendChild(eliminar);
  
  let modelo =  `<li class = "list-group-item" data-producto = "${producto}" data-icono = "${icono}" data-info = "${info}">
  <img src="${icono}" alt="${producto}" class="pantallaListadoIcono">${producto}</li>`
  

  listaCargada.innerHTML += modelo
  cargaDatos.hide()
  inicio.style.display = 'none'
  lista.style.display = 'block'
  listadoStorage.push(modelo)
  localStorage.setItem('listadoCompras', listadoStorage)
})


let evento = document.getElementById('lista').addEventListener ('click', function (e){
  document.getElementById('descripcionProducto').innerHTML = e.target.getAttribute('data-producto')
  document.getElementById('descripcionInfo').innerHTML = e.target.getAttribute('data-info')
  document.getElementById('descripcionIcono').src = e.target.getAttribute('data-icono')
  inicio.style.display = "none"
  lista.style.display = "none"
  descripcion.style.display = "block"
})

   
let descripcionCerrar = document.getElementById('descripcionCerrar').addEventListener ('click', ()=>{
  lista.style.display = "block"
  descripcion.style.display = "none"
})

let detalleStorage = localStorage.getItem('listadoCompras');
if (detalleStorage){
  listaCargada.innerHTML += detalleStorage
  inicio.style.display = 'none'
  lista.style.display = 'block'
}