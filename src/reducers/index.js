import React from 'react' ;
import { combineReducers } from 'redux'

// Pada aplikasi baru berjalan pertama kali, semua reducer akan dijalankan

// songsReducer hanya bertugas memberikan nilai awal berupa list lagu
const songsReducer = () => {
    // Apa yang di return dari function ini akan di simpan di property songs (lihat line 31)
    return [
        {title: 'Seperti Rahim Ibu', 
        artist: "Efek Rumah Kaca", 
        duration: '3:57', 
        personel: <img src="https://cdns.klimg.com/kapanlagi.com/p/headline/476x238/tampil-di-soundrenaline-2017-efek-rumah-5a1c36.jpg" alt=""/>,
        membername: 'Cholil (Guitar/Vocal), Akbar (Drum), Poppie (Bass)' },
        {title: 'Tiga Pagi', 
        artist: "Fletch" , 
        duration: '5:26', 
        personel: <img src="https://cdns.klimg.com/kapanlagi.com/p/headline/476x238/unit-indie-pop-fletch-resmi-merilis-alb-511779.jpg" alt=""/>,
        membername: 'Richard (Vocal), Rido (Kibor, Vocal), Danti (Ukulele), Rifki (Drum), Amanda (Violin), Naufalia (Bass)' },
        {title: 'Hilang', 
        artist: "Rumahsakit" , 
        duration: '3:58', 
        personel: <img src="https://cdns.klimg.com/kapanlagi.com/p/headline/476x238/rumah-sakit-grogi-main-di-java-rockin-l-59e37d.jpg" alt=""/>, 
        membername: 'Muhammad Arief (Vocal), Mark Najoan (Guitar), Shendy Adam (Bass), Mickey Najoan (Keyboard), Fadli Wardhana (Drum)'},
        {title: 'Man Upon the Hill', 
        artist: "Stars and Rabbit" , 
        duration: '3:37', 
        personel: <img src="https://cdns.klimg.com/kapanlagi.com/p/headline/476x238/stars-and-rabbit-senang-bisa-bertemu-de-52685c.jpg" alt=""/>,
        membername: 'Elda Suryani (Vocal), Adi Widodo (Guitar)' },
        
        {title: 'True Love', 
        artist: "Elephant Kind" , 
        duration: '3:49', 
        personel: <img src="https://cdns.klimg.com/kapanlagi.com/p/headline/476x238/true-love-music-video-baru-elephant-kin-c361a9.jpg" alt=""/>,
        membername: 'Bam Mastro (Vocal, Guitar), Bayu Adisapoetra (Drum), Dewa Pratama (Guitar, Synthesizer), Kevin Septanto (Bass)' },
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

const selectedImageReducer = (selectedImage = null, action) => {
     if(action.type === 'IMAGE_SELECTED') {
         return action.payload
     }
     return selectedImage;
}

const selectedMemberNameReducer = (selectedMemberName = null,action) => {
    if (action.type === 'MEMBERNAME_SELECTED') {
        return action.payload
    }
    return selectedMemberName;
}

// state akhir
export default combineReducers ({
    // key : reducer
    songs: songsReducer,
    selectedSong: selectedSongReducer,
    selectedImage : selectedImageReducer, 
    selectedMemberName: selectedMemberNameReducer
})
