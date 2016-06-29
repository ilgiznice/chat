let Message = React.createClass({
    render: function() {
        return(
            <p>{this.props.author}: {this.props.text}</p>
        )
    }
});

export default Message;