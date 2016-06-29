let Contact = React.createClass({

    selectChat: function() {
        this.props.onChatSelected(
            this.props.id
        );
    },

    render: function() {
        return(
            <div onClick={this.selectChat} className="contacts-contact">
                <p>{this.props.created}</p>
                <p>{this.props.subject}</p>
            </div>
        )
    }
});

export default Contact;