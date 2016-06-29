import Message from './message';
import Input from './input';

let Chat = React.createClass({

    getInitialState: function() {
        return {
            disabled: true
        }
    },

    addMessage: function(message) {
        this.props.onUpdateMessages(
            message,
            this.props.id
        );
    },

    render: function() {
        let messages = () => {
            let messages = [];
            this.props.messages.forEach((message) => {
                message.forEach((msg) => messages.push(<Message
                    id = {msg.id}
                    author = {msg.author}
                    text = {msg.text}
                />));
            });
            return messages;
        };

        //setTimeout(() => {
        //    document.getElementsByClassName('loader')[0].style.display = 'none';
        //    document.getElementsByClassName('chat-container')[0].style.opacity = 1;
        //}, 3000);

        return(
            <div className="col-md-4 chat-container">
                <div className="loader">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
                <div className="chat">
                    {messages()}
                </div>
                <Input
                    onAddMessage = {this.addMessage}
                    disabled = {this.props.disabled}
                />
            </div>
        )
    }
});

export default Chat;