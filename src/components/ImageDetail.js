import React, { Component} from 'react'
import {connect} from 'react-redux'


const mapStateToProps = (state) => {
    return {yangDiselect: state.selectedImage}
}

class ImageDetail extends Component {
    render () {
        if (this.props.yangDiselect == null) {
            return <div><h1>Image Artist</h1></div>
        }

        return (
            <div>
                <h1>{this.props.yangDiselect.artist}</h1>
                <p>{this.props.yangDiselect.personel}</p>
            </div>
        )
    }
}

export default connect (mapStateToProps) (ImageDetail)