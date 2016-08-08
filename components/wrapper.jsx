var ReactDOM = require("react-dom");
var currentMessage = '';
var HelloWorld = React.createClass({

    getInitialState: function() {
        var self = this;
        setInterval(function() {
            $.ajax({url: 'http://10.32.176.4/workshop'}).done(function(data) {
                if (data !== currentMessage) {
                    var oldChat = self.state.message;
                    var newChat = oldChat + '\n' + data;
                    self.setState({message: newChat});

                    currentMessage = data;
                    chatList.scrollTop(chatList[0].scrollHeight);
                }
            });
        }, 1000);
        return {message: 'Hello World'};
    },

    sendMessage: function() {
        if (event.key === 'Enter') {
            var message = messageInput.val();
            var date = new Date();
            var now = data.toUTCString();
            $.ajax({
                url: 'http://10.32.176.4/workshop/' + 'TEST' + 'message' + '   ' + now
            });
            messageInput.val();
        } else {
            this.setState({myMessege: event.target.value})
        }
    },

    render: function() {
        var Header = require('./header.jsx');/*HTML JSK */
        return (
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <Header/>
                </div>
                <textarea disabled value={this.state.message} className="form-control" id="chat-list"></textarea>

                <div>
                    <input className="form-control" id="message"/>
                    <button type="button" className="btn form-control btn-danger" id="btn-send">Send</button>
                </div>
                <center>
                    <img className="img-responsive" src="http://vignette3.wikia.nocookie.net/thesanrio/images/2/23/Cinnamoroll.png/revision/latest?cb=20110622211953"/>
                </center>
            </div>
        );
    }
});

module.exports = HelloWorld;

var Wrapper = require('./wrapper.jsx');
ReactDOM.render(
    <Wrapper/>, document.getElementById("container"));
