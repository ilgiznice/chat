let Input = React.createClass({
    newMessage: function() {
        this.props.onAddMessage(
            {
                author: 'Вы',
                text: this.refs.input.value
            }
        );
        this.refs.input.value = '';
    },

    render: function() {
        return(
            <div>
                <input type="text" id="input" className="input" ref="input" disabled={this.props.disabled} />
                <button id="button" className="btn btn-lg btn-success" onClick={this.newMessage} disabled={this.props.disabled}>Отправить</button>
            </div>
        )
    }
});

export default Input;