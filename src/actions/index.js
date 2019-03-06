/*
    type : Register
    payload: {nama: "Alvin", uang: 700000}
*/
//  action creator yg akan me return object yg secara otomatis akan di kirim ke semua reducer
export const selectSong = (song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song // berisi object lagu dari button yang di click
    }
}

export const ArtistDetail =(song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}


