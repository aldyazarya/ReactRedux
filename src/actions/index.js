/*
    type : Register
    payload: {nama: "Alvin", uang: 700000}
*/
//  action creator yg akan me return object yg secara otomatis akan di kirim ke semua reducer
export const selectSong = (song) => {
    return( {
        type: 'SONG_SELECTED',
        payload: song // berisi object lagu dari button yang di click
    })
}

export const selectImage =(song) => {
    return( {
        type: 'IMAGE_SELECTED',
        payload: song
    })
}

export const selectMemberName = (song) => {
    return({
        type: 'MEMBERNAME_SELECTED',
        payload: song
    })
}



