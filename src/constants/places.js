import autodromoImg from "~assets/places/autodromo.jpg";
import ecoparqueImg from "~assets/places/ecoparque.jpg";
import estadioImg from "~assets/places/estadio.jpg";
import parqueSanMartinImg from "~assets/places/parque-san-martin.jpg";
import plazaMitreImg from "~assets/places/plaza-mitre.jpg";
import santuarioImg from "~assets/places/santuario.png";
import cementerioImg from "~assets/places/cementerio.jpg";
import estacionDescubriImg from "~assets/places/estacion-descubri.jpeg";
import skateparkImg from "~assets/places/skatepark.jpg";
import casaDelAcuerdoImg from "~assets/places/casa-del-acuerdo.jpg";
import arenalImg from "~assets/places/arenal.png";
import casaBodagoImg from "~assets/places/casa-bogado.jpg";
import teatroImg from "~assets/places/teatro.png";
import elCafe from "~assets/places/el-cafe.jpg";
import hotelColonial from "~assets/places/hotel-colonial.png";
import hotelPlaza from "~assets/places/hotel-plaza.jpg";
import laMira from "~assets/places/la-mira.jpg";
import baku from "~assets/places/baku.png";
import elSanMartin from "~assets/places/el-san-martin.jpeg";
import cervezia from "~assets/places/cervezia.jpg";

const places = [
  {
    id: 0,
    img: ecoparqueImg,
    name: "Eco Parque",
    category: "tourist-circuit",
    description:
      "Inaugurado en 2020, este espacio verde permite a los nicoleños encontrarse con la fauna y flora autóctona, a unos pocos metros de la ciudad.\nCuenta con pasarelas y miradores para que los visitantes puedan adentrarse en los entornos delimitados.",
    ubication: "Paseo costanero y Av. Luis Viale",
    coordinates: {
      latitude: -33.313974821273874,
      longitude: -60.22447835464204,
    },
  },
  {
    id: 2,
    img: cementerioImg,
    name: "Cementerio",
    category: "tourist-circuit",
    description:
      "Fue habilitado en 1835 luego de que el gobernador Juan Manuel de Rosas visitara nuestra ciudad y declarara que el entierro de cuerpos en los laterales de la Iglesia Catedral representaba una amenaza para la sanidad de la población y el progreso de la ciudad.\nEn 2001 el Cementerio Municipal fue declarado museo a cielo abierto, debido al valor histórico que se conserva entre sus panteones y mausoleos.",
    ubication: "Francia 550",
    coordinates: {
      latitude: -33.319981986305116,
      longitude: -60.230023546054774,
    },
  },
  {
    id: 3,
    img: estadioImg,
    name: "Estadio",
    category: "tourist-circuit",
    description: "",
    coordinates: {
      latitude: -33.343666937841355,
      longitude: -60.264291213551175,
    },
  },
  {
    id: 4,
    img: santuarioImg,
    name: "Santuario",
    category: "tourist-circuit",
    description:
      "La construcción del Santuario de Nuestra Señora del Rosario comenzó en 1985, dos años después de las apariciones de la virgen en la ciudad, aprobadas por el vaticano.\nActualmente la obra se encuentra completada en un 70%, con capacidad para albergar hasta 9 mil personas de pie dentro del templo.",
    coordinates: {
      latitude: -33.32262128804017,
      longitude: -60.22414724608146,
    },
  },
  {
    id: 5,
    img: parqueSanMartinImg,
    name: "Parque San Martín",
    category: "tourist-circuit",
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
    category: "tourist-circuit",
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
    category: "tourist-circuit",
    description:
      "Fue inaugurado en 2019 dentro de un predio ferial de 90 hectáreas ubicado en el km 255 de la Autopista que une Buenos Aires con Rosario.\nEn su interior se realizan cada año eventos deportivos y empresariales, exposiciones a cielo abierto y convenciones.\nEl trazado de la pista permite recibir a todas las categorías automovilísitcas nacionales e internacionales",
    ubication: "Autopista Bs.As. - Rosario, Km 225",
    coordinates: {
      latitude: -33.40000058363997,
      longitude: -60.201606746080046,
    },
  },
  {
    id: 8,
    img: estacionDescubriImg,
    name: "Estación Descubrí",
    category: "tourist-circuit",
    description:
      "Esta estación funciona como punto de atención al público tanto para turistias como para locales.\nEn otros servicios, es posible alquilar bicicletas para recorrer el Eco Parque y el Paseo Costanero, o alquilar kayaks y tablas SUP para disfrutar en la laguna que se encuentra a pocos metros.",
    ubication: "",
    coordinates: {
      latitude: null,
      longitude: null,
    },
  },
  {
    id: 9,
    img: skateparkImg,
    name: "Skatepark",
    category: "tourist-circuit",
    description:
      "Desde su inauguración en 2014, esta pista se consagra como la más grande y completa del país. Es apta tanto para skate como para BMX y rollers.\nSu extensión de 2800 m2 y su variedad de obstáculos posibilitan la realización de competencias tanto a nivel amateur como profesional.",
    ubication: "",
    coordinates: {
      latitude: null,
      longitude: null,
    },
  },
  {
    id: 10,
    img: casaDelAcuerdoImg,
    name: "Casa del Acuerdo",
    category: "tourist-circuit",
    description:
      "Este monumento nacional alberga la memoria de la reunión que en 1852 celebraron los gobernadores de las diferentas provincias, en la cual firmaron el histórico acuerdo que precedió a la Constitución Nacional.\nAdemás de funcionar como museo, el complejo cuenta con una biblioteca especializada en historia argentina compuesta por mas 60 mil tomos.",
    ubication: "",
    coordinates: {
      latitude: null,
      longitude: null,
    },
  },
  {
    id: 11,
    img: teatroImg,
    name: "Teatro",
    category: "tourist-circuit",

    description:
      "El Teatro Municipal Rafel de Aguiar, ícono de la cultura y el arte local, fue inaugurado en el año 1908 y es reconocido como uno de los mejores teatros líricos del país.\nSu sala principal cuenta con capacidad para mas de 700 personas, las cuales pueden ser ubicadas a lo largo de los 3 pisos con cuales cuenta la instalación.",
    ubication: "",
    coordinates: {
      latitude: null,
      longitude: null,
    },
  },
  {
    id: 12,
    img: arenalImg,
    name: "Arenal",
    category: "tourist-circuit",

    description:
      "Habilitado en 2022 durante la temporada de verano, esta playa cuenta con todas las comodidades necesarias para compartir tardes con amigos y familia.\nDurante los horarios designados los guardavidas custodian a los visitantes, que también pueden disfrutar de juegos para niños, alquiler de sombrillas, baños, y venta de alimentos.",
    ubication: "",
    coordinates: {
      latitude: null,
      longitude: null,
    },
  },
  {
    id: 13,
    img: casaBodagoImg,
    name: "Casa de Bogado",
    category: "tourist-circuit",

    description:
      "Construida en el año 1820, la casa en la cual falleció Félix Bogado es el monumento arquitectónico más antiguo de la ciudad.\nEl Coronel José Felix Bogado se desempeño como Comandante Militar de la ciudad y acompañó al General don José de San Martín en su campaña Libertadora.",
    ubication: "",
    coordinates: {
      latitude: null,
      longitude: null,
    },
  },
  {
    id: 14,
    img: elCafe,
    name: "El café",
    category: "gastronomy",

    description: "",
    ubication: "",
    coordinates: {
      latitude: null,
      longitude: null,
    },
  },
  {
    id: 15,
    img: hotelColonial,
    name: "Hotel Colonial",
    category: "accommodation",

    description: "",
    ubication: "",
    coordinates: {
      latitude: null,
      longitude: null,
    },
  },
  {
    id: 16,
    img: hotelPlaza,
    name: "Hotel Plaza",
    category: "accommodation",

    description: "",
    ubication: "",
    coordinates: {
      latitude: null,
      longitude: null,
    },
  },
  {
    id: 17,
    img: laMira,
    name: "La Mira",
    category: "gastronomy",
    description: "La mira",
    ubication: "",
    coordinates: {
      latitude: null,
      longitude: null,
    },
  },
  {
    id: 18,
    img: baku,
    name: "Baku",
    category: "gastronomy",
    description: "",
    ubication: "",
    coordinates: {
      latitude: null,
      longitude: null,
    },
  },
  {
    id: 19,
    img: elSanMartin,
    name: "El San Martín",
    category: "gastronomy",
    description: "",
    ubication: "",
    coordinates: {
      latitude: null,
      longitude: null,
    },
  },
  {
    id: 20,
    img: cervezia,
    name: "Cervezia",
    category: "gastronomy",
    description: "",
    ubication: "",
    coordinates: {
      latitude: null,
      longitude: null,
    },
  },
  // {
  //   id: 0,
  //   img: null,
  //   name: "",
  //   description: "",
  //   ubication: "",
  //   coordinates: {
  //     latitude: null,
  //     longitude: null,
  //   },
  // },
];

export default places;
