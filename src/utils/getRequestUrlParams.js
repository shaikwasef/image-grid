export const getRequestUrlParams = (searchWord,pageNumber) => {
    return {
            method : 'flickr.photos.search',
            api_key : 'e52a287d86469bf01ea901dfd92cf8a5',
            text : `${searchWord}`,
            media  : 'photos',
            per_page : 15 ,
            page : `${pageNumber}`,
            format : 'json' , 
            nojsoncallback : 1
    }
}