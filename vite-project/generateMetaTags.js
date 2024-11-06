
export function generateMetaTags(metaTags) {
    return Object.entries(metaTags)
      .map(([property, content]) => 
        `<meta property="${property}" content="${content}">`
      )
      .join('\n    ');
  }
  
  export default generateMetaTags;