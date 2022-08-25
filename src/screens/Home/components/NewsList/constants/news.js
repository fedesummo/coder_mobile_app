import birdsImg from "../assets/birds.jpg";
import buildingsImg from "../assets/buildings.jpg";
import raceImg from "../assets/race.jpeg";
import waterSportsImg from "../assets/water-sports.jpeg";


const news = [
  {
    id: 0,
    img: birdsImg,
    heading: 'Nuevo evento disponible "Avistamiento de aves"',
    content:
      "Este sábado acercate al Ecoparque a partir de las 9:00 hs para conocer nuestras especies nativas.",
  },
  {
    id: 1,
    img: raceImg,
    heading: "Descubrí la temporada de carreras 2023",
    content:
      "Entrada libre y gratuita a las instalaciones para conocer todas las fechas de la siguiente temporada.",
  },
  {
    id: 2,
    img: buildingsImg,
    heading: "Nuevo pico de turistas alojados en la ciudad",
    content:
      "Durante el último fin de semana más de cinco mil turistas eligieron visitar nuestra ciudad.",
  },  
  {
    id: 3,
    img: waterSportsImg,
    heading: "Conocé nuestra oferta de deportes acuáticos",
    content:
      "Acercate a la Laguna Descubrí y disfrutá de actividades acuáticas aptas para toda la familia.",
  },
];

export default news;
