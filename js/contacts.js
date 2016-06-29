import Contact from './contact';

let Contacts = React.createClass({

    chatSelected: function(id) {
        this.props.onUpdateChat(
            id
        );
    },

    render: function() {
        let contacts = [];
        let self = this;

        this.props.contacts.forEach((item) => (
            contacts.push(<Contact
                id = {item.id}
                subject = {item.subject}
                created = {item.created}
                onChatSelected={self.chatSelected}
            />)
        ));

        return(
            <div className="col-md-1 contacts-container">
                {contacts}
            </div>
        )
    }
});

export default Contacts;