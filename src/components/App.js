import React from 'react'

import Songlist from './SongList'
import SongDetail from './SongDetail'
import ArtistDetail from './ArtistDetail'

const App = () => {
    return(
        <div>
            <Songlist/>
            <SongDetail/>
            <ArtistDetail/>
        </div>
    )
}

export default App;