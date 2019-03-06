import { combineReducers } from 'redux'

// Pada aplikasi baru berjalan pertama kali, semua reducer akan dijalankan

// songsReducer hanya bertugas memberikan nilai awal berupa list lagu
const songsReducer = () => {
    // Apa yang di return dari function ini akan di simpan di property songs (lihat line 31)
    return [
        {title: 'Forever Young', artist: "Black Pink", duration: '4:05', artists: 'Lisa, Jeny, jiso, rose'},
        {title: 'Lucid Dream', artist: "Monogram" , duration: '3:09'},
        {title: 'Got Paid', artist: "Sigala, Ella Eyre, Meghan Trainor" , duration: '4:20'},
        {title: 'Save Me', artist: "BTS" , duration: '2:12'},
        {title: 'Blood, Sweat, and Tears', artist: "Bangtan Boys" , duration: '5:15'},
    ]
}

    

//  reducer tidak boleh return undefined
const selectedSongReducer = (selectedSong = null, www) => {
    // Apa yang di return dari function ini akan di simpan di property selectedSong (lihat line 32)

    if(www.type === 'SONG_SELECTED'){
        return www.payload
    }

    return selectedSong
}

 const selectedArtistReducer = (selectedArtist = null, action) => {
     if(action.type === 'SONG_SELECTED') {
         return action.payload
     }
     return selectedArtist;
 }

// state akhir
export default combineReducers ({
    // key : reducer
    songs: songsReducer,
    selectedSong: selectedSongReducer,
    selectedArtist : selectedArtistReducer 
    
})
