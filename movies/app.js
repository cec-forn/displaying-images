const movies = [
    {
      id: 1,
      title: "30 jours",
      category: "comedy",
      duration: "1h20",
      img: "./img/30-jours.jpg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 2,
      title: "Adieu les cons",
      category: "drama",
      duration: "2h05",
      img: "./img/adieu-les-cons.jpg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "ADN",
      category: "documentary",
      duration: "1h50",
      img: "./img/adn.jpg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "Drunk",
      category: "road movie",
      duration: "2h15",
      img: "./img/drunk.jpg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "Envole-moi",
      category: "drama",
      duration: "1h35",
      img: "./img/envole-moi.jpg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "Mandibules",
      category: "comedy",
      duration: "1h50",
      img: "./img/mandibules.jpg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "Poly",
      category: "aventure",
      duration: "2h34",
      img: "./img/poly.jpg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "Tom & Jerry",
      category: "Animation",
      duration: "1h45",
      img: "./img/tom-jerry.jpg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    
  ];
  
const section = document.querySelector(".section-center");

movies.forEach(movies => {
  
  const divMovies = document.createElement('div');
  const imgMovies = document.createElement('img');
  const titleMovies = document.createElement('h3');
  const catMovies = document.createElement('p');
  const durationMovies = document.createElement('p');
  const descMovies = document.createElement('p');

  imgMovies.src = movies.img;
  titleMovies.textContent = movies.title;
  catMovies.textContent = movies.category;
  durationMovies.textContent = movies.duration;
  descMovies.textContent = movies.desc;

  section.appendChild(divMovies);
  divMovies.appendChild(imgMovies);
  divMovies.appendChild(titleMovies);
  divMovies.appendChild(catMovies);
  divMovies.appendChild(durationMovies);
  divMovies.appendChild(descMovies);

})