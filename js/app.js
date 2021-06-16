


const getService = (data) => {
  const templateService = document.querySelector('.main-service1');
  const titleService = document.querySelector('h3[class="titulo"] > a');
  const parrafoService = document.querySelector('p[class="texto"]');
  const imagenService = document.querySelector('img[id="foto"]');



  // for (let i = 0; i < data.length; i++) {
    // const element = data[i];
    // console.log(element.titulo)
    // const contenido = "titulo: " + data[i].titulo;
    // boxService.appendChild(createContext(contenido));

  // }
  const li = document.createElement('li');
  const ul = document.createElement('ul');

  const tpl = data.map(item => li.innerHTML = item.titulo);
  console.log(tpl)

}

const apiService = () => {
  fetch('http://localhost:4000/dataService', {

  })
  .then(res => res.json())
  .then(data => getService(data))

}



apiService();