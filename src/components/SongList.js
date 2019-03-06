// import React from 'react'
import React, {Component} from 'react'
import { connect } from 'react-redux' 

import {selectSong} from '../actions'
import {ArtistDetail} from '../actions'

// apa yang di return dari function ini , akan disimpan di this.props
//  console.log(this.props) -> {melinda: state.songs}
const mapStateToProps = (state) => {
    return {melinda: state.songs,
            selectArtist: state.artists}
}


class SongList extends Component{

    renderList = () => { //mengubah dari array of boject menjadi div

        return this.props.melinda.map ((sammy) => { // {title: "A", artist: "B", duration: "9:00"}
            return (
                <div className="d-flex justify-content-between border-bottom mb-1" key={sammy.title}>
                    <div>{sammy.title}</div>
                    <button className="btn btn-outline-primary my-2" 
                            onClick={()=>{this.props.selectSong(sammy)}}
                    >Select</button>
                    <button className="btn btn-outline-primary my-2"
                            onClick={() =>{this.props.selectedArtist(sammy)}}>Select Artist</button>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderList()} {/* function ini akan me-return array yang dibuat dari .map pada line 12 */}
            </div>
        )
    }

}



export default connect(mapStateToProps, {selectSong, ArtistDetail})(SongList)


// kapan kita memakai kelas? ketika ingin memanfaatkan lifecycle method / hook