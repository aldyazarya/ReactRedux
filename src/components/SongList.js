// import React from 'react'
import React, {Component} from 'react'
import { connect } from 'react-redux' 

import {selectSong} from '../actions'
import {selectImage} from '../actions'
import {selectMemberName} from '../actions'

// apa yang di return dari function ini , akan disimpan di this.props
//  console.log(this.props) -> {melinda: state.songs}
const mapStateToProps = (state) => {
    return {songs:state.songs}
}


class SongList extends Component{

    renderList = () => { //mengubah dari array of boject menjadi div

        return this.props.songs.map ((sammy) => { // {title: "A", artist: "B", duration: "9:00"}
            return (
                <div className="d-flex justify-content-between pt-4 border-bottom mb-1" key={sammy.title}>
                    <div>{sammy.title}</div>
                    <div>
                    {/* BUTTON UNTUK MENAMPILKAN SONG DETAIL */}
                    <button className="btn btn-outline-primary my-2 mr-3" 
                            onClick={()=>{this.props.selectSong(sammy)}}>Song Detail</button>
                    {/* BUTTON UNTUK MENAMPILKAN IMAGE ARTIST */}
                    <button className="btn btn-outline-primary my-2 mr-3"
                            onClick={() =>{this.props.selectImage(sammy)}}>Image Artist</button>
                    <button className="btn btn-outline-primary my-2 mr-5"
                            onClick={() =>{this.props.selectMemberName(sammy)}}>Member Name</button>
                    </div>
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



export default connect(mapStateToProps, {selectSong, selectImage, selectMemberName})(SongList)


// kapan kita memakai kelas? ketika ingin memanfaatkan lifecycle method / hook