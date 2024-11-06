const metaTags = {
    'og:title': 'The Rock',
    'og:type': 'video.movie',
    'og:url': 'https://www.imdb.com/title/tt0117500/',
    'og:image': 'https://res.cloudinary.com/duocksbuc/image/upload/v1/media/news/images/1000298989_nsufd4'
  };
  
  function generateMetaTags() {
    return Object.entries(metaTags)
      .map(([property, content]) => 
        `<meta property="${property}" content="${content}">`
      )
      .join('\n    ');
  }
  
  export default generateMetaTags;