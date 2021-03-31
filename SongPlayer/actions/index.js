//Action creator
export const selectSong = song => {
    //return action creator
    return {
        type: 'SONG_SELECTED',
        payload: song
    }

}

