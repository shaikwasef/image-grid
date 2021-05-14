import React , {useState , useEffect , useCallback} from 'react';
import axios from "axios";
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch, useSelector } from 'react-redux';
import {addImages} from "../actions/addImages"
import {imageFound} from "../actions/imageStatus"
import {imageNotFound} from "../actions/imageStatus"
import {reachedEnd} from "../actions/reachedEnd"
import {getRequestUrlParams} from "../utils/getRequestUrlParams"
import "./SearchBox.css"

function SearchBox() {
    const [searchWord , setSearchWord] = useState("");
    const photos = useSelector(state => state.imagesReducer);
    const dispatch = useDispatch();
    const [pageNumber,setPageNumber] = useState(1);

    const fetchData = (e) => {
      setPageNumber(1);
      if(e.code === 'Enter'){
          dispatch(reachedEnd(false));
          apiCall();
      }  
    }

    const apiCall = useCallback(async () => {
      try{
        const fetchUrl = "https://www.flickr.com/services/rest";
        const userParams = getRequestUrlParams(searchWord,pageNumber);  
        const {data} = await axios.get(fetchUrl , {params : userParams });
        const photoData = data.photos.photo;
        setPageNumber(pageNumber+1);
        if(photos.length && pageNumber===1){
          dispatch(addImages(photoData));
        }else{
        dispatch(addImages([...photos,...photoData]))
        }
        if(!photoData.length){
          dispatch(imageNotFound())
        } else{
            dispatch(imageFound());
        }
        if(data.photos.pages === pageNumber){
          dispatch(reachedEnd(true));
        }
      }catch(error){
        dispatch(addImages([]));
        dispatch(imageFound());
        console.log(error);
        alert("Unable to reach the server");
      }
    } , [searchWord,pageNumber,photos,dispatch])
    
    useEffect(() => {
      const handleScroll =() => {
        if(Math.ceil(window.innerHeight + window.scrollY) >= document.body.offsetHeight){ 
          apiCall();
        }
      }
      window.document.addEventListener('scroll',handleScroll);
      return () => window.document.removeEventListener("scroll",handleScroll);
    },[apiCall])

    return (
        <div className = "search-text-box">
          <SearchIcon/>
          <input className="input" placeholder="Search free High resolution images " 
          onChange={(e) => setSearchWord(e.target.value)}  onKeyUp = {fetchData}/>
      </div>
    );
}

export default SearchBox;