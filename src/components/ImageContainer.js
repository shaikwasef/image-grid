import React from 'react';
import { useSelector } from 'react-redux';
import { getPhotoUrl } from '../utils/getPhotoUrl';
import "./ImageContainer.css"
import Masonry from 'react-masonry-css'

function ImageContainer() {
    const photos = useSelector(state => state.imagesReducer);
    const photosStatus = useSelector(state => state.imageStatusReducer);
    const reachedEndStatus = useSelector(state => state.totalPagesReducer);

    const showImages = photos.map((photo,index) => {
        const photoUrl = getPhotoUrl(photo.server,photo.id,photo.secret);
        return <img className= "image" src = {photoUrl} key = {photo.id} alt={photo.title}/>
     })

     const breakpointColumnsObj = {default: 3 , 700: 2,500: 1};

    return (
        <div>
        {photos.length ? 
            <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
            >
                {showImages}
            </Masonry>
            : photosStatus === "notFound" ? <div className="intro-text">No images found</div>  :
              !photos.length && <div className="intro-text">Enter text to search images from flickr.com</div>}
             {reachedEndStatus && <div className="intro-text">No more results to display</div>}
       </div>
    );
}

export default ImageContainer;
