/*
    IMPORT SECTION
 */

import Contacts from './contacts';
import Chat from './chat';

/*
    DEFAULT VALUES
 */

let data = [
    {
        id: 1,
        subject: 'Письмо 1',
        created: '2016-03-01 23:59',
        parts: [
            {id: 1, author: 'vasya', text: 'Привет, как дела?'},
            {id: 2, author: 'petya', text: 'Привет, все хорошо, спасибо!'}
        ]
    },
    {
        id: 2,
        subject: 'Письмо 2',
        created: '2016-03-02 14:19',
        parts: [
            {id: 1, author: 'petr', text: 'Здравствуйте, тут есть кто-нибудь?'},
            {id: 2, author: 'vasiliy', text: 'Да, я вас слушаю!'}
        ]
    }
];

let contacts = data.map((contact) => ({
    id: contact.id,
    subject: contact.subject,
    created: contact.created
}));

let messages = (id = null) => {
    if (!id) {
        return [];
    }

    return data
        .filter((chat) => chat.id == id)
        .map((chat) => chat.parts)
};

/*
    ENTRY POINT
 */

let mountNode = document.getElementById('main');

let Main = React.createClass({

    getInitialState: function() {
        return {
            messages: messages(),
            id: null,
            disabled: true
        }
    },

    updateChat: function(id) {
        this.loader();
        this.setState({
            messages: messages(id),
            id: id
        });
    },

    updateMessages: function(message, id) {
        this.loader();
        let parts = data
            .filter((chat) => chat.id == id)
            .map((chat) => chat.parts)[0];
        let last = parts[parts.length - 1].id;
        data
            .filter((chat) => chat.id == id)
            .map((chat) => chat.parts)[0]
            .push({
                id: last++,
                author: message.author,
                text: message.text
            });
        this.updateChat(id);
    },

    loader: function() {
        document.getElementsByClassName('loader')[0].style.display = 'block';
        document.getElementsByClassName('chat-container')[0].style.opacity = 0.3;
        this.setState({
            disabled: true
        });
        setTimeout(() => {
            document.getElementsByClassName('loader')[0].style.display = 'none';
            document.getElementsByClassName('chat-container')[0].style.opacity = 1;
            this.setState({
                disabled: false
            });
        }, 1000);
    },

    render: function() {
        return (
            <div>
                <Contacts
                    contacts = {contacts}
                    onUpdateChat={this.updateChat}
                />
                <Chat
                    messages = {this.state.messages}
                    id = {this.state.id}
                    onUpdateMessages = {this.updateMessages}
                    disabled = {this.state.disabled}
                />
            </div>
        )
    }
});

ReactDOM.render(<Main />, mountNode);