const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "549e0a92a9ad43cf0759978bfc390bd0",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
