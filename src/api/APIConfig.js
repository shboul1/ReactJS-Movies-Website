const apiConfig = {
    baseURL: 'https://api.themoviedb.org/3/',
    apiKey: '849c171afc855cd0236ef6cf8325a19e',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imagePath) => `https://image.tmdb.org/t/p/w500/${imagePath}`,
}

export default apiConfig;
