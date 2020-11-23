const vm = new Vue({
  el: "#root",
  data: {
    userName: "Andrei",
    userImg: "img/avatar_1.jpg",
    userMessage: '',
    searchText: "",
    possibleAnswers: ["ok", "ciao e buona serata", "non posso ora"],
    // Un array con tutti i msg inviati dal utente
    myMessagges: [],
    friendsList: [{
        friendName: "Michele",
        friendImg: "img/avatar_2.jpg",
        friendMessagges: [{
            name: 'Michele',
            message: "Hello motherfucker"
          },
          {
            name: 'Michele',
            message: "Hello motherfucker"
          },
          {
            name: 'Michele',
            message: "Hello motherfucker"
          },
          {
            name: 'Andrei',
            message: "Hello motherfucker"
          },
        ],
      },
      {
        friendName: "Fabio",
        friendImg: "img/avatar_3.jpg",
        friendMessagges: [{}],
      },
      {
        friendName: "Samuele",
        friendImg: "img/avatar_4.jpg",
        friendMessagges: [{}],
      },
      {
        friendName: "Luisa",
        friendImg: "img/avatar_5.jpg",
        friendMessagges: [{}],
      },
    ],
    filteredList: [{
        friendName: "Michele",
        friendImg: "img/avatar_2.jpg",
        friendMessagges: [{}
        ],
      },
      {
        friendName: "Fabio",
        friendImg: "img/avatar_3.jpg",
        friendMessagges: [{}],
      },
      {
        friendName: "Samuele",
        friendImg: "img/avatar_4.jpg",
        friendMessagges: [{}],
      },
      {
        friendName: "Luisa",
        friendImg: "img/avatar_5.jpg",
        friendMessagges: [{}],
      },
    ],
    selectedFriend: {},
  },
  methods: {
    filteredFriend: function () {
      if (this.searchText) {
        this.filteredList = this.friendsList.filter((e) =>
          e.friendName.toLowerCase().startsWith(this.searchText.toLowerCase())
        );
      } else {
        this.filteredList = this.friendsList;
      }
    },
    showInfo: function (friend) {
      return friend;
    },
    checkUsername: function (name) {
      return name == this.userName
    },
    pushMessage: function (msg, activeFriend) {
      this.userMessage = ''
      activeFriend.friendMessagges.push({
        name: this.userName,
        message: msg
      })
    },
    randomMsg: function () {
      // var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
      return this.possibleAnswers[Math.floor(Math.random() * this.possibleAnswers.length)]
    },
    friendAnswer: function (activeFriend) {
      setTimeout(
        (activeFriend.friendMessagges.push({
          name: activeFriend.friendName,
          message: this.randomMsg()
        }), 5000)

      )
    }
  },
  computed: {},
  watch: {},
});