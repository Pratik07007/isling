const page2__cards = document.querySelector(".page2__cards");
const dummyData = [
  {
    url: "https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Learning Zone",
    desc: "We have dedicated studying spaces ",
  },
  {
    url: "https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Collaboration",
    desc: "We collaborate with students and teachers",
  },
  {
    url: "https://images.pexels.com/photos/518244/pexels-photo-518244.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Student Service",
    desc: "Our SSD is the best",
  },
  {
    url: "https://images.pexels.com/photos/256517/pexels-photo-256517.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Free Internet",
    desc: "We offer free internet throughout the campus",
  },
];

dummyData.map((item) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  image.src = item.url;
  image.alt = item.title;

  const title = document.createElement("h2");
  title.textContent = item.title;

  const desc = document.createElement("p");
  desc.textContent = item.desc;

  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(desc);

  page2__cards.appendChild(card);
});

const cardData = [
  {
    imageUrl:
      "https://images.pexels.com/photos/7092339/pexels-photo-7092339.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Our classerooms are well equiped",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/6334870/pexels-photo-6334870.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "We have well equiped library",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/6325958/pexels-photo-6325958.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Our tutots are expert in their fields",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/8199159/pexels-photo-8199159.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "We give opportunities to students",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/6326382/pexels-photo-6326382.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "We give online resources as well",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/7396389/pexels-photo-7396389.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "We care our students",
  },
];

const container = document.querySelector(".page3__main");

cardData.forEach((cardInfo) => {
  const card = document.createElement("div");
  card.classList.add("page3__card");

  const imgHolder = document.createElement("div");
  imgHolder.classList.add("page3__imgHolder");

  const img = document.createElement("img");
  img.classList.add("page3__img");
  img.src = cardInfo.imageUrl;
  img.alt = "Card Image";

  const imgDesc = document.createElement("div");
  imgDesc.classList.add("page3__imgDesc");
  imgDesc.innerHTML = `<h1>${cardInfo.description}</h1>`;

  imgHolder.appendChild(img);
  card.appendChild(imgHolder);
  card.appendChild(imgDesc);

  container.appendChild(card);
});

let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
  
}
