import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { fetchUser } from '../actions'


class UserHeader extends Component {
//    componentDidMount() {
//        this.props.fetchUser(this.props.userId)
//    }

    render() {
        // const user = this.props.users.find((user)=> user.id === this.props.userId)
        const {user} =this.props

        if (!user) return null  // or <div>Loading...</div>

        return (
            <div className="header">
                {user.name}
            </div>
        )
    }
}

// const mapStateToProp = (state) => {
//     return { users:state.users }
// }

const mapStateToProp = (state, ownProps) => {
    return { user:state.users.find(user=> user.id === ownProps.userId) }
}

export default connect(
    mapStateToProp,
    // {fetchUser}
    ) (UserHeader)
