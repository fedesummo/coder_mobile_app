const places = [
  {
    id: 0,
    img: "https://raw.githubusercontent.com/fedesummo/coder_mobile_app/main/src/assets/ecoparque.jpg",
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
    img: "https://raw.githubusercontent.com/fedesummo/coder_mobile_app/main/src/assets/cementerio.jpg",
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
    img: "https://raw.githubusercontent.com/fedesummo/coder_mobile_app/main/src/assets/estadio.jpg",
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
    img: "https://raw.githubusercontent.com/fedesummo/coder_mobile_app/main/src/assets/santuario.png",
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
    img: "https://raw.githubusercontent.com/fedesummo/coder_mobile_app/main/src/assets/parque-san-martin.jpg",
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
    img: "https://raw.githubusercontent.com/fedesummo/coder_mobile_app/main/src/assets/plaza-mitre.png",
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
    img: "https://raw.githubusercontent.com/fedesummo/coder_mobile_app/main/src/assets/autodromo.jpg",
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
    img: "https://raw.githubusercontent.com/fedesummo/coder_mobile_app/main/src/assets/estacion-descubri.jpeg",
    name: "Estación Descubrí",
    category: "tourist-circuit",
    description:
      "Esta estación funciona como punto de atención al público tanto para turistias como para locales.\nEn otros servicios, es posible alquilar bicicletas para recorrer el Eco Parque y el Paseo Costanero, o alquilar kayaks y tablas SUP para disfrutar en la laguna que se encuentra a pocos metros.",
    ubication: "Av. Viale y Paseo costanero",
    coordinates: {
      latitude: -33.318119267300496,
      longitude: -60.22486815228364,
    },
  },
  {
    id: 9,
    img: "https://raw.githubusercontent.com/fedesummo/coder_mobile_app/main/src/assets/skatepark.jpg",
    name: "Skatepark",
    category: "tourist-circuit",
    description:
      "Desde su inauguración en 2014, esta pista se consagra como la más grande y completa del país. Es apta tanto para skate como para BMX y rollers.\nSu extensión de 2800 m2 y su variedad de obstáculos posibilitan la realización de competencias tanto a nivel amateur como profesional.",
    ubication: "Av. Pres. Juan Domingo Perón 2049",
    coordinates: {
      latitude: -33.35123120199996,
      longitude: -60.240669375543426,
    },
  },
  {
    id: 10,
    img: "https://raw.githubusercontent.com/fedesummo/coder_mobile_app/main/src/assets/casa-del-acuerdo.jpg",
    name: "Casa del Acuerdo",
    category: "tourist-circuit",
    description:
      "Este monumento nacional alberga la memoria de la reunión que en 1852 celebraron los gobernadores de las diferentas provincias, en la cual firmaron el histórico acuerdo que precedió a la Constitución Nacional.\nAdemás de funcionar como museo, el complejo cuenta con una biblioteca especializada en historia argentina compuesta por mas 60 mil tomos.",
    ubication: "De la Nación 143",
    coordinates: {
      latitude: -33.32927558926494,
      longitude: -60.2169756750404,
    },
  },
  {
    id: 11,
    img: "https://raw.githubusercontent.com/fedesummo/coder_mobile_app/main/src/assets/teatro.png",
    name: "Teatro",
    category: "tourist-circuit",
    description:
      "El Teatro Municipal Rafel de Aguiar, ícono de la cultura y el arte local, fue inaugurado en el año 1908 y es reconocido como uno de los mejores teatros líricos del país.\nSu sala principal cuenta con capacidad para mas de 700 personas, las cuales pueden ser ubicadas a lo largo de los 3 pisos con cuales cuenta la instalación.",
    ubication: "De la nación 346",
    coordinates: {
      latitude: -33.333531674716,
      longitude: -60.22020532900297,
    },
  },
  {
    id: 12,
    img: "https://raw.githubusercontent.com/fedesummo/coder_mobile_app/main/src/assets/arenal.png",
    name: "Arenal",
    category: "tourist-circuit",
    description:
      "Habilitado en 2022 durante la temporada de verano, esta playa cuenta con todas las comodidades necesarias para compartir tardes con amigos y familia.\nDurante los horarios designados los guardavidas custodian a los visitantes, que también pueden disfrutar de juegos para niños, alquiler de sombrillas, baños, y venta de alimentos.",
    ubication: "Frente al río paraná",
    coordinates: {
      latitude: -33.31930546377719,
      longitude: -60.18901934136194,
    },
  },
  {
    id: 13,
    img: "https://raw.githubusercontent.com/fedesummo/coder_mobile_app/main/src/assets/casa-bogado.jpg",
    name: "Casa de Bogado",
    category: "tourist-circuit",
    description:
      "Construida en el año 1820, la casa en la cual falleció Félix Bogado es el monumento arquitectónico más antiguo de la ciudad.\nEl Coronel José Felix Bogado se desempeño como Comandante Militar de la ciudad y acompañó al General don José de San Martín en su campaña Libertadora.",
    ubication: "Francia 223",
    coordinates: {
      latitude: -33.32608856469615,
      longitude: -60.2216459062447,
    },
  },
  {
    id: 14,
    img: "https://raw.githubusercontent.com/fedesummo/coder_mobile_app/main/src/assets/el-cafe.jpg",
    name: "El café",
    category: "gastronomy",
    description: "",
    ubication: "Sarmiento 54",
    coordinates: {
      latitude: -33.32765878848322,
      longitude: -60.21712966762476,
    },
  },
  {
    id: 15,
    img: "https://raw.githubusercontent.com/fedesummo/coder_mobile_app/main/src/assets/hotel-colonial.png",
    name: "Hotel Colonial",
    category: "accommodation",
    description: "",
    ubication: "Av. Savio 2195",
    coordinates: {
      latitude: -33.36838360030544,
      longitude: -60.17737248648413,
    },
  },
  {
    id: 16,
    img: "https://raw.githubusercontent.com/fedesummo/coder_mobile_app/main/src/assets/hotel-plaza.jpg",
    name: "Hotel Plaza",
    category: "accommodation",
    description: "",
    ubication: "De la Nación 144",
    coordinates: {
      latitude: -33.32934360303619,
      longitude: -60.21654261365963,
    },
  },
  {
    id: 17,
    img: "https://raw.githubusercontent.com/fedesummo/coder_mobile_app/main/src/assets/la-mira.jpg",
    name: "La Mira",
    category: "gastronomy",
    description: "La mira",
    ubication: "Mitre 96",
    coordinates: {
      latitude: -33.32781959067464,
      longitude: -60.217034459695945,
    },
  },
  {
    id: 18,
    img: "https://raw.githubusercontent.com/fedesummo/coder_mobile_app/main/src/assets/baku.png",
    name: "Baku",
    category: "gastronomy",
    description: "",
    ubication: "De la Nación 150",
    coordinates: {
      latitude: -33.329663118719985,
      longitude: -60.216319629517145,
    },
  },
  {
    id: 19,
    img: "https://raw.githubusercontent.com/fedesummo/coder_mobile_app/main/src/assets/el-san-martin.jpeg",
    name: "El San Martín",
    category: "gastronomy",
    description: "",
    ubication: "Parque San Martín",
    coordinates: {
      latitude: -33.33009790379092,
      longitude: -60.209342167623795,
    },
  },
  {
    id: 20,
    img: "https://raw.githubusercontent.com/fedesummo/coder_mobile_app/main/src/assets/cervezia.png",
    name: "Cervêsïa",
    category: "gastronomy",
    description: "",
    ubication: "Mitre 148",
    coordinates: {
      latitude: -33.329064568298676,
      longitude: -60.21705393744635,
    },
  },
  {
    id: 21,
    img: "https://raw.githubusercontent.com/fedesummo/coder_mobile_app/main/src/assets/arroyos-apart.jpg",
    name: "De los Arroyos Apart Hotel",
    category: "accommodation",
    description: "",
    ubication: "Mitre 385",
    coordinates: {
      latitude: -33.33333662243761,
      longitude: -60.22236927555125,
    },
  },
  {
    id: 22,
    img: "https://raw.githubusercontent.com/fedesummo/coder_mobile_app/main/src/assets/bartolome.jpg",
    name: "Comedor Bartolomé",
    category: "gastronomy",
    description: "",
    ubication: "Mitre 90",
    coordinates: {
      latitude: -33.32770016067198,
      longitude: -60.21614771417281,
    },
  },
  {
    id: 23,
    img: "https://raw.githubusercontent.com/fedesummo/coder_mobile_app/main/src/assets/chozas-urbanas.jpg",
    category: "accommodation",
    name: "Raíces Chozas Urbanas",
    description: "",
    ubication: "Av. Hipólito Irigoyen 1477",
    coordinates: {
      latitude: -33.37946596030901,
      longitude: -60.210827244841134,
    },
  },
  {
    id: 24,
    img: "https://raw.githubusercontent.com/fedesummo/coder_mobile_app/main/src/assets/hotel-belgrano.jpg",
    name: "Nuevo Hotel Belgrano",
    category: "accommodation",
    description: "",
    ubication: "Belgrano 89",
    coordinates: {
      latitude: -33.32676335373694,
      longitude: -60.21762211417319,
    },
  },
  {
    id: 25,
    img: "https://raw.githubusercontent.com/fedesummo/coder_mobile_app/main/src/assets/micerino-flat.jpg",
    name: "Hotel Micerino Flat",
    category: "accommodation",
    description: "",
    ubication: "Garibaldi 410",
    coordinates: {
      latitude: -33.336330363392875, 
      longitude: -60.21865299882385
    },
  },
  {
    id: 26,
    img: "https://raw.githubusercontent.com/fedesummo/coder_mobile_app/main/src/assets/palacio-municipal.png",
    name: "Palacio Municipal",
    category: "tourist-circuit",
    description: "",
    ubication: "Rivadavia 51",
    coordinates: {
      latitude: -33.33022714138496, 
      longitude: -60.21449515495601,
    },
  },
];

export default places;
