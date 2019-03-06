import React, { Component} from 'react'
import {connect} from 'react-redux'


const mapStateToProps = (state) => {
    return {yangDiselect: state.selectedMemberName}
}

class MemberNameDetail extends Component {
    render () {
        if (this.props.yangDiselect == null) {
            return <div><h1>Member Name</h1></div>
        }

        return (
            <div>
                <h2>Member Name:</h2>
                <h4>{this.props.yangDiselect.membername}</h4>
            </div>
        )
    }
}

export default connect (mapStateToProps) (MemberNameDetail)