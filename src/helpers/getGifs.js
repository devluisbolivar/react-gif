export const getGif = async (category) => {
  let url = `https://api.giphy.com/v1/gifs/search?api_key=cYUpwPgZWImJ3k6jBeKAz0Qk7qITpoxb&limit=10&q=${encodeURI(
    category
  )}`;
  const respuesta = await fetch(url);
  const { data } = await respuesta.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
