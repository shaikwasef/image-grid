export const getPhotoUrl = (photoServer,photoId,photoSecret) => {
    const photoUrl = "https://live.staticflickr.com/"+ photoServer + "/" + photoId + "_" + 
            photoSecret + ".jpg";
    return photoUrl
}