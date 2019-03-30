import React from 'react'
import ReactDOM from 'react-dom'
import Message from './Message'

import Logo from '../logo1.png'

class MessageList extends React.Component {

    componentWillUpdate(){
        // when i'm scrolling and seeing old messages and then new message came so it doesn't go down
        const node = ReactDOM.findDOMNode(this)
        this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight
    }

    componentDidUpdate(){
        // Automatically scrolls down to bottom when new message arrives
        if (this.shouldScrollToBottom){
            const node = ReactDOM.findDOMNode(this)
            node.scrollTop = node.scrollHeight
        }
    }

    render() {
        if (!this.props.roomId) {
            return (
                <div className="message-list">
                    <div className="join-room">
                    <div className="join-room-logo">
                        <img src={Logo} style={{ width: '120px', paddingLeft: '5px',  paddingBottom: '5px' }} alt="logo" />
                        <div>&larr; Join a room!</div>
                   </div> 
                   </div>  
                </div>
            )
        }
        return (
            <div className="message-list">
            {
                this.props.messages.map((message, index) => {
                    return (
                        <Message key={index} username={message.senderId} text={message.text} />
                    )
                })
            }
            </div>
        )
    }
}

export default MessageList