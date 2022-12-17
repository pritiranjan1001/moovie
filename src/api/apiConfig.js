const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'f7859540d579c42e4961b80ac8192f39',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;