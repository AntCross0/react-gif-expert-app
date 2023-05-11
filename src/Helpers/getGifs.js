export const getGifs = async ( category ) => {
        
    const urlGiphy = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=jbvjfu0Pc6qk7CJ4zZ3KkALus1A6VCra`;
    const resp = await fetch(urlGiphy);
    const {data} = await resp.json();


    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            img: img.images.downsized_large.url
        }
        
    });
    
    return gifs;

    
}