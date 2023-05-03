import React from "react";

const places = [
  {
    id: 1,
    name: "Petra",
    info: "Petra is a famous archaeological site in Jordan, known for its rock-cut architecture and ancient tombs.",
    image:
      "https://select.jo/wp-content/uploads/2019/07/The-Nabatean-city-of-Petra-Jordania_51.jpg.pagespeed.ce_.l8Akg6N3mb.jpg",
  },
  {
    id: 2,
    name: "Dead Sea",
    info: "The Dead Sea is a salt lake bordered by Jordan to the east, known for its high salt content and therapeutic mud.",
    image:
      "https://img.haarets.co.il/bs/0000017f-e16f-d38f-a57f-e77f18010000/11/67/fc6d509858f2e14fb1e1133b0336/3781373002.jpg?precrop=1386,1385,x44,y83",
  },
  {
    id: 3,
    name: "Wadi Rum",
    info: "Wadi Rum is a desert valley in southern Jordan, known for its red sandstone cliffs and ancient rock carvings.",
    image:
      "https://worldheritageoutlook.iucn.org/sites/default/files/styles/sites_thumbnail/public/images/site/Wadi%20Rum%20PA_IUCN%20Kyung%20Sik%20Woo.jpg?itok=kMQ5Nfe-",
  },
  {
    id: 4,
    name: "jerash",
    info: "Wadi Rum is a desert valley in southern Jordan, known for its red sandstone cliffs and ancient rock carvings.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Hadrian_Arc_Pan-2.jpg/2947px-Mapcarta.jpg",
  },
  {
    id: 5,
    name: "aqaba",
    info: "Wadi Rum is a desert valley in southern Jordan, known for its red sandstone cliffs and ancient rock carvings.",
    image:
      "https://s7g10.scene7.com/is/image/accorhotels/GettyImages-1288858945:8by10?wid=412&hei=515&dpr=on,2.625&qlt=75&resMode=sharp2&op_usm=0.5,0.3,2,0&iccEmbed=true&icc=sRGB",
  },
  {
    id: 6,
    name: "Wadi Mujib",
    info: "Wadi Rum is a desert valley in southern Jordan, known for its red sandstone cliffs and ancient rock carvings.",
    image:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/a1/9a/f7.jpg",
  },
  {
    id: 7,
    name: "Ajloun",
    info: "Wadi Rum is a desert valley in southern Jordan, known for its red sandstone cliffs and ancient rock carvings.",
    image: "https://www.bookingjordan.com/uploads/images/blog/407985_a.jpg",
  },
  {
    id: 8,
    name: "Mount Nebo",
    info: "Wadi Rum is a desert valley in southern Jordan, known for its red sandstone cliffs and ancient rock carvings.",
    image:
      "https://www.zamantours.com/wp-content/uploads/2020/05/Mount-Nebo.jpg",
  },
];

const Tours = () => {
  return (
    <>
      <div className="container h-100 ">
        {places.map((place) => (
          <div className="card d-inline-block w-25 p-2 m-2">
            <div key={place.id}>
              <h2>{place.name}</h2>
              <hr />
              <img src={place.image} alt={place.name} />
            </div>
            <button class="cta m-2">
              <span>Details</span>
              <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tours;
