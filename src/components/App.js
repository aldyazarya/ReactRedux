import React from 'react'

import Songlist from './SongList'
import SongDetail from './SongDetail'
import ImageDetail from './ImageDetail'
import MemberNameDetail from './MemberNameDetail'

const App = () => {
    return(
        <div>
            <Songlist/>
            <SongDetail/>
            <ImageDetail/>
            <MemberNameDetail/>
        </div>
    )
}

export default App;