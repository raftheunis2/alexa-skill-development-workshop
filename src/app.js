const WELCOME_MESSAGE = 'Hello Raf!';

module.exports.newSessionHandlers = {
    NewSession() {
        this.emit(':tell', WELCOME_MESSAGE);
    }
};
