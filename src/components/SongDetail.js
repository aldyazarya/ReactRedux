import React from 'react'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {yangDiSelect: state.selectedSong}
}



class SongDetail extends React.Component {
    render () {
        if (this.props.yangDiSelect == null) {
            return <div><h1>Detail Song</h1></div>
        }
        
        return (
            <div>
                <h1> Detail Song</h1>
                <p>{this.props.yangDiSelect.title}</p>
                <p>{this.props.yangDiSelect.artist}</p>
                <p>{this.props.yangDiSelect.duration}</p>
            </div>
        )
    }
}





export default connect(mapStateToProps)(SongDetail)
//hanya menerima data 