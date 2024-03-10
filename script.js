const page2__cards = document.querySelector(".page2__cards");
const dummyData = [
  {
    url: "https://images.pexels.com/photos/20522440/pexels-photo-20522440/free-photo-of-a-photo-of-snow-covered-mountains.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    title: "hellow rold",
    desc: "This is a dummy description",
  },
  {
    url: "https://images.pexels.com/photos/20522440/pexels-photo-20522440/free-photo-of-a-photo-of-snow-covered-mountains.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    title: "Hello",
    desc: "This is a dummy description",
  },
  {
    url: "https://images.pexels.com/photos/20522440/pexels-photo-20522440/free-photo-of-a-photo-of-snow-covered-mountains.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    title: "Image",
    desc: "This is a dummy description",
  },
  {
    url: "https://images.pexels.com/photos/20522440/pexels-photo-20522440/free-photo-of-a-photo-of-snow-covered-mountains.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    title: "Hello",
    desc: "This is a dummy description",
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
      "https://images.pexels.com/photos/20522440/pexels-photo-20522440/free-photo-of-a-photo-of-snow-covered-mountains.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    description: "This is description part 1 ",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    description: "This is description part 2",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/20522440/pexels-photo-20522440/free-photo-of-a-photo-of-snow-covered-mountains.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    description: "This is description part 3",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/20522440/pexels-photo-20522440/free-photo-of-a-photo-of-snow-covered-mountains.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    description: "This is description part 1",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    description: "This is description part 2 ",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/20522440/pexels-photo-20522440/free-photo-of-a-photo-of-snow-covered-mountains.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    description: "This is description part 3 ",
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
