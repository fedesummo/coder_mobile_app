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
    coordinates: {
      latitude: -33.313974821273874,
      longitude: -60.22447835464204,
    },
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
    coordinates: {
      latitude: -33.343666937841355,
      longitude: -60.264291213551175,
    },
  },
  {
    id: 4,
    img: santuarioImg,
    name: "Santuario ",
    description:
      "Comenzando su construcción en 1985, el templo de la Virgen del Rosario constituye un símbolo de fé para los creyentes de todo el país.\nEste santuario se encuentra ubicado en un inmenso predio con zonas verdes que permiten albergar a miles de personas cada año durante las celebraciones del Día de la Virgen.",
    // fecha en la cual la ciudad se convierte en un centro turístico
    coordinates: {
      latitude: -33.32262128804017,
      longitude: -60.22414724608146,
    },
  },
  {
    id: 5,
    img: parqueSanMartinImg,
    name: "Parque San Martín",
    description:
      "Ubicado a lo largo de la calle Colón, entre Garibaldi y Juan B. Justo, este parque se extiende a través de cuatro manzanas llegando hasta orillas de la barraca.\nDía a día, jovenes, niños y familias se acercan al Parque San Martín para disfrutar de sus espacios verdes y vistas al Río Paraná",
    coordinates: {
      latitude: -33.330222890704086,
      longitude: -60.20888616142281,
    },
  },
  {
    id: 6,
    img: plazaMitreImg,
    name: "Plaza Mitre",
    description:
      "Ubicada en el centro comercial de la ciudad y rodeada de edificios históricos, es conciderada la plaza principal de la ciudad desde su fundación.\nA su alrededor, pueden encontarse una amplia oferta comercial y gastronómica.",
    coordinates: {
      latitude: -33.32755951482816,
      longitude: -60.21721647676408,
    },
  },
  {
    id: 7,
    img: autodromoImg,
    name: "Autódromo",
    description:
      "Fue inaugurado en 2019 dentro de un predio ferial de 90 hectáreas ubicado en el km 255 de la Autopista que une Buenos Aires con Rosario.\nEn su interior se realizan cada año eventos deportivos y empresariales, exposiciones a cielo abierto y convenciones.\nEl trazado de la pista permite recibir a todas las categorías automovilísitcas nacionales e internacionales",
    ubication: "Autopista Bs.As. - Rosario, Km 225",
    coordinates: {
      latitude: -33.40000058363997,
      longitude: -60.201606746080046,
    },
  },
];

export default places;
