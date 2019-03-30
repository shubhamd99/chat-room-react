import React from 'react'

class SendMessageForm extends React.Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: ''
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange = (e) => {
        this.setState({
            message: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        //console.log(this.state.message)
        this.props.sendMessage(this.state.message) // Inverse data flow
        this.setState({
            message: ''  // clear the input after pressing enter
        })
    }

    render() {
        // console.log(this.state.message);
        return (
            <form className="send-message-form" onSubmit={this.handleSubmit}>
                <input
                    disabled={this.props.disabled}
                    onChange={this.handleChange}
                    value={this.state.message}
                    placeholder="Type your messages"
                    type="text" />
                <button type="submit" className='button-message' disabled={this.props.disabled}>Submit</button>
            </form>
        )
    }
}

export default SendMessageForm