// Rules
// 1) Small functions
// 2) Blocks within functions should be 1 line long and call a function gennerally
// 3) What does it return
// 4) Functions that are used in other functions have to be declared on top
// 5) Functions should only do 1 thing without side-effects
// 6) Do not overlap naming var and functions
// 7) Specific name functions(preffer longer clearer naming that shorter fuzzy ones)
// 8) Do not abbreviate names

// First draft always messy refine it until it reads almost like a logical step by step

const vm = new Vue({
  el: "#root",
  data: {
    userName: "Andrei",
    userImg: "img/avatar_1.jpg",
    userMessage: '',
    searchText: "",
    possibleAnswers: ["ok", "ciao e buona serata", "non posso ora"],
    // Un array con tutti i msg inviati dal utente
    friendsList: [{
        friendName: "Michele",
        friendImg: "img/avatar_2.jpg",
        friendMessagges: [{}],
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
    // filteredList: [{
    //     friendName: "Michele",
    //     friendImg: "img/avatar_2.jpg",
    //     friendMessagges: [{}],
    //   },
    //   {
    //     friendName: "Fabio",
    //     friendImg: "img/avatar_3.jpg",
    //     friendMessagges: [{}],
    //   },
    //   {
    //     friendName: "Samuele",
    //     friendImg: "img/avatar_4.jpg",
    //     friendMessagges: [{}],
    //   },
    //   {
    //     friendName: "Luisa",
    //     friendImg: "img/avatar_5.jpg",
    //     friendMessagges: [{}],
    //   },
    // ],
    selectedFriend: {},
  },
  methods: {
    // I needed to create a separate array and update based on filter input and
    // then display it without changing the original list of friends
    // filteredFriend: function () {
    //   if (this.searchText) {
    //     this.filteredList = this.friendsList.filter((e) =>
    //       e.friendName.toLowerCase().startsWith(this.searchText.toLowerCase())
    //     );
    //   } else {
    //     this.filteredList = this.friendsList;
    //   }
    // },
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
      return this.possibleAnswers[Math.floor(Math.random() * this.possibleAnswers.length)]
    },
    generateAnswer: function(activeFriend) {
      return activeFriend.friendMessagges.push({
        name: activeFriend.friendName,
        message: this.randomMsg()
      })
    },
    friendAnswer: function (activeFriend) {
      setTimeout(() => {this.generateAnswer(activeFriend)},3000)
    }
  },
  computed: { 
      // This gives me an error of (handler.apply is not a function) but allows me to dont 
      // duplicate the friendsList 
    filteredFriend: function () {
      return this.friendsList.filter((e) =>
        e.friendName.toLowerCase().startsWith(this.searchText.toLowerCase())
      );
    }
  },
});