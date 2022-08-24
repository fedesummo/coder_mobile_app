import autodromoImg from "~assets/places/autodromo.jpg";
import ecoparqueImg from "~assets/places/ecoparque.jpg";
import estadioImg from "~assets/places/estadio.jpg";
import parqueSanMartinImg from "~assets/places/parque-san-martin.jpg";
import plazaMitreImg from "~assets/places/plaza-mitre.jpg";
import santuarioImg from "~assets/places/santuario.png";


const places = [
  {
    id: 0,
    img: ecoparqueImg,
    name: "Ecoparque",
    description: "",
  },
//   {
//     id: 1,
//     img: null,
//     name: "Teatro Municipal",
//     description: "",
//   },
//   {
//     id: 2,
//     img: null,
//     name: "Iglésia Catedral",
//     description: "",
//   },
  {
    id: 3,
    img: estadioImg,
    name: "Estadio",
    description: "",
  },
  {
    id: 4,
    img: santuarioImg,
    name: "Santuario",
    description: "",
  },
  {
    id: 5,
    img: parqueSanMartinImg,
    name: "Parque San Martín",
    description: "",
  },
  {
    id: 6,
    img: plazaMitreImg,
    name: "Plaza Mitre",
    description: "",
  },
  {
    id: 7,
    img: autodromoImg,
    name: "Autódromo",
    description:
      "Fue inaugurado en 2019 dentro de un predio ferial de 90 hectáreas ubicado en el km 255 de la Autopista que une Buenos Aires con Rosario.\nEn su interior se realizan cada año eventos deportivos y empresariales, exposiciones a cielo abierto y convenciones.\nEl trazado de la pista permite recibir a todas las categorías automovilísitcas nacionales e internacionales",
  },
];

export default places;
