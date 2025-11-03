const axios = require("axios");

async function getRandomImageUrl({ width = 600, height = 400, source = "picsum" } = {}) {
  if (source === "picsum") {
    return `https://picsum.photos/seed/${Math.random()}/${width}/${height}`;
  }

  if (source === "dummyjson") {
    const id = Math.floor(Math.random() * 100) + 1;
    const res = await axios.get(`https://dummyjson.com/products/${id}`);
    return res.data?.images?.[0] || null;
  }

  return `https://picsum.photos/seed/${Math.random()}/${width}/${height}`;
}

module.exports = { getRandomImageUrl };
