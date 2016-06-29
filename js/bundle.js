/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _contacts = __webpack_require__(1);

	var _contacts2 = _interopRequireDefault(_contacts);

	var _chat = __webpack_require__(2);

	var _chat2 = _interopRequireDefault(_chat);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	    DEFAULT VALUES
	 */

	/*
	    IMPORT SECTION
	 */

	var data = [{
	    id: 1,
	    subject: 'Письмо 1',
	    created: '2016-03-01 23:59',
	    parts: [{ id: 1, author: 'vasya', text: 'Привет, как дела?' }, { id: 2, author: 'petya', text: 'Привет, все хорошо, спасибо!' }]
	}, {
	    id: 2,
	    subject: 'Письмо 2',
	    created: '2016-03-02 14:19',
	    parts: [{ id: 1, author: 'petr', text: 'Здравствуйте, тут есть кто-нибудь?' }, { id: 2, author: 'vasiliy', text: 'Да, я вас слушаю!' }]
	}];

	var contacts = data.map(function (contact) {
	    return {
	        id: contact.id,
	        subject: contact.subject,
	        created: contact.created
	    };
	});

	var messages = function messages() {
	    var id = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    if (!id) {
	        return [];
	    }

	    return data.filter(function (chat) {
	        return chat.id == id;
	    }).map(function (chat) {
	        return chat.parts;
	    });
	};

	/*
	    ENTRY POINT
	 */

	var mountNode = document.getElementById('main');

	var Main = React.createClass({
	    displayName: 'Main',


	    getInitialState: function getInitialState() {
	        return {
	            messages: messages(),
	            id: null,
	            disabled: true
	        };
	    },

	    updateChat: function updateChat(id) {
	        this.loader();
	        this.setState({
	            messages: messages(id),
	            id: id
	        });
	    },

	    updateMessages: function updateMessages(message, id) {
	        this.loader();
	        var parts = data.filter(function (chat) {
	            return chat.id == id;
	        }).map(function (chat) {
	            return chat.parts;
	        })[0];
	        var last = parts[parts.length - 1].id;
	        data.filter(function (chat) {
	            return chat.id == id;
	        }).map(function (chat) {
	            return chat.parts;
	        })[0].push({
	            id: last++,
	            author: message.author,
	            text: message.text
	        });
	        this.updateChat(id);
	    },

	    loader: function loader() {
	        var _this = this;

	        document.getElementsByClassName('loader')[0].style.display = 'block';
	        document.getElementsByClassName('chat-container')[0].style.opacity = 0.3;
	        this.setState({
	            disabled: true
	        });
	        setTimeout(function () {
	            document.getElementsByClassName('loader')[0].style.display = 'none';
	            document.getElementsByClassName('chat-container')[0].style.opacity = 1;
	            _this.setState({
	                disabled: false
	            });
	        }, 1000);
	    },

	    render: function render() {
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(_contacts2.default, {
	                contacts: contacts,
	                onUpdateChat: this.updateChat
	            }),
	            React.createElement(_chat2.default, {
	                messages: this.state.messages,
	                id: this.state.id,
	                onUpdateMessages: this.updateMessages,
	                disabled: this.state.disabled
	            })
	        );
	    }
	});

	ReactDOM.render(React.createElement(Main, null), mountNode);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _contact = __webpack_require__(3);

	var _contact2 = _interopRequireDefault(_contact);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Contacts = React.createClass({
	    displayName: "Contacts",


	    chatSelected: function chatSelected(id) {
	        this.props.onUpdateChat(id);
	    },

	    render: function render() {
	        var contacts = [];
	        var self = this;

	        this.props.contacts.forEach(function (item) {
	            return contacts.push(React.createElement(_contact2.default, {
	                id: item.id,
	                subject: item.subject,
	                created: item.created,
	                onChatSelected: self.chatSelected
	            }));
	        });

	        return React.createElement(
	            "div",
	            { className: "col-md-1 contacts-container" },
	            contacts
	        );
	    }
	});

	exports.default = Contacts;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _message = __webpack_require__(4);

	var _message2 = _interopRequireDefault(_message);

	var _input = __webpack_require__(5);

	var _input2 = _interopRequireDefault(_input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Chat = React.createClass({
	    displayName: 'Chat',


	    getInitialState: function getInitialState() {
	        return {
	            disabled: true
	        };
	    },

	    addMessage: function addMessage(message) {
	        this.props.onUpdateMessages(message, this.props.id);
	    },

	    render: function render() {
	        var _this = this;

	        var messages = function messages() {
	            var messages = [];
	            _this.props.messages.forEach(function (message) {
	                message.forEach(function (msg) {
	                    return messages.push(React.createElement(_message2.default, {
	                        id: msg.id,
	                        author: msg.author,
	                        text: msg.text
	                    }));
	                });
	            });
	            return messages;
	        };

	        //setTimeout(() => {
	        //    document.getElementsByClassName('loader')[0].style.display = 'none';
	        //    document.getElementsByClassName('chat-container')[0].style.opacity = 1;
	        //}, 3000);

	        return React.createElement(
	            'div',
	            { className: 'col-md-4 chat-container' },
	            React.createElement(
	                'div',
	                { className: 'loader' },
	                React.createElement('div', { className: 'bounce1' }),
	                React.createElement('div', { className: 'bounce2' }),
	                React.createElement('div', { className: 'bounce3' })
	            ),
	            React.createElement(
	                'div',
	                { className: 'chat' },
	                messages()
	            ),
	            React.createElement(_input2.default, {
	                onAddMessage: this.addMessage,
	                disabled: this.props.disabled
	            })
	        );
	    }
	});

	exports.default = Chat;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var Contact = React.createClass({
	    displayName: "Contact",


	    selectChat: function selectChat() {
	        this.props.onChatSelected(this.props.id);
	    },

	    render: function render() {
	        return React.createElement(
	            "div",
	            { onClick: this.selectChat, className: "contacts-contact" },
	            React.createElement(
	                "p",
	                null,
	                this.props.created
	            ),
	            React.createElement(
	                "p",
	                null,
	                this.props.subject
	            )
	        );
	    }
	});

	exports.default = Contact;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var Message = React.createClass({
	    displayName: "Message",

	    render: function render() {
	        return React.createElement(
	            "p",
	            null,
	            this.props.author,
	            ": ",
	            this.props.text
	        );
	    }
	});

	exports.default = Message;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var Input = React.createClass({
	    displayName: 'Input',

	    newMessage: function newMessage() {
	        this.props.onAddMessage({
	            author: 'Вы',
	            text: this.refs.input.value
	        });
	        this.refs.input.value = '';
	    },

	    render: function render() {
	        return React.createElement(
	            'div',
	            null,
	            React.createElement('input', { type: 'text', id: 'input', className: 'input', ref: 'input', disabled: this.props.disabled }),
	            React.createElement(
	                'button',
	                { id: 'button', className: 'btn btn-lg btn-success', onClick: this.newMessage, disabled: this.props.disabled },
	                'Отправить'
	            )
	        );
	    }
	});

	exports.default = Input;

/***/ }
/******/ ]);