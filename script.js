const page2__cards = document.querySelector(".page2__cards");
const dummyData = [
  {
    url: "https://images.pexels.com/photos/20522440/pexels-photo-20522440/free-photo-of-a-photo-of-snow-covered-mountains.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    title: "Hello",
    desc: "This is a dummy description",
  },
  {
    url: "https://images.pexels.com/photos/20522440/pexels-photo-20522440/free-photo-of-a-photo-of-snow-covered-mountains.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    title: "Hello",
    desc: "This is a dummy description",
  },
  {
    url: "https://images.pexels.com/photos/20522440/pexels-photo-20522440/free-photo-of-a-photo-of-snow-covered-mountains.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    title: "Hello",
    desc: "This is a dummy description",
  },
  {
    url: "https://images.pexels.com/photos/20522440/pexels-photo-20522440/free-photo-of-a-photo-of-snow-covered-mountains.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    title: "Hello",
    desc: "This is a dummy description",
  },
];


dummyData.map(item => {
  const card = document.createElement('div');
  card.classList.add('card');

  const image = document.createElement('img');
  image.src = item.url;
  image.alt = item.title;

  const title = document.createElement('h2');
  title.textContent = item.title;

  const desc = document.createElement('p');
  desc.textContent = item.desc;

  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(desc);

  page2__cards.appendChild(card);
});
