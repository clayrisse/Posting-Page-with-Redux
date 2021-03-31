import { combineReducers } from 'redux';

export const songReducer = () => {
    return [
        { title: 'Macarena1', duration:'1:02'},
        { title: 'Macarena2', duration:'2:02'},
        { title: 'Macarena3', duration:'3:02'},
        { title: 'Macarena4', duration:'4:02'}
    ]
}

export const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong;
}

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
})