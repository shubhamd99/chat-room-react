import React from 'react'

import Logo from '../logo.png'

class RoomList extends React.Component {
    render () {
        // console.log(this.props.rooms)
        const orderedRooms = [...this.props.rooms].sort((a,b) => a.id - b.id)
        return (
            <div className="rooms-list">
            <ul>
                <img src={Logo} style={{ width: '120px', paddingLeft: '5px',  paddingBottom: '5px' }} alt="logo" />
                <h3 style={{ color: '#D9D9D9' }}>Your Rooms:</h3>
                {
                    orderedRooms.map(room => {
                        const active = this.props.roomId === room.id ? "active" : "";
                        return (
                            <li key={room.id} className={"room " + active }>
                                <a onClick={ () => this.props.subscribeToRoom(room.id) } href="#"># {room.name}</a>
                            </li>
                        )
                    })
                }
              </ul>
            </div>
        )
    }
}

export default RoomList