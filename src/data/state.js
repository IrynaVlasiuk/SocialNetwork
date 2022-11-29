let store = {
    _state: {
        homePage: {
            posts: [
                {id: 1, message: "first post", likesCount: 1},
                {id: 2, message: "second post", likesCount: 2},
                {id: 3, message: "third post", likesCount: 3},
            ],
            newPostText: 'new post text'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Alex"},
                {id: 2, name: "User1"},
                {id: 3, name: "User2"},
                {id: 4, name: "User3"},
                {id: 5, name: "User4"},
            ],
            messages: [
                {id: 1, message: "Hi!"},
                {id: 2, message: "Hello"},
                {id: 3, message: "How are you?"},
                {id: 4, message: "Привет"},
                {id: 5, message: "Hi!"},
                {id: 6, message: "Hi!"},
            ],
            newMessageBody: "",
        },
        usersPage: {},
        videosPage: {}
    },
    getState() {
        return this._state;
    },
}


export default store;