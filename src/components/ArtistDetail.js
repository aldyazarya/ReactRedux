import React, { Component} from 'react'
import {connect} from 'react-redux'


const mapStateToPropsArtist = (state) => {
    return {selectArtist: state.selectedArtist}
}

class ArtistDetail extends Component {
    render () {
        if (this.props.selectedArtist == null) {
            return <div><h1>Personel</h1></div>
        }

        return (
            <div>
                <h1>Detail Artist</h1>
                <p>{this.props.selectedArtist.artists}</p>
            </div>
        )
    }
}

export default connect (mapStateToPropsArtist) (ArtistDetail)