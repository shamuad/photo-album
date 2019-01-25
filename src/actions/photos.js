import * as request from 'superagent'

export const SET_PHOTOS = 'SET_PHOTOS'

export function setPhotos(photos) {
    return {
        type: SET_PHOTOS,
        payload: photos
    }
}


export function getPhotosByAlbum(id) {
    return function (dispatch) {
        request(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
            .then(response => {
                dispatch(setPhotos(response.body))
            })
    }
}
