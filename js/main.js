const vm = new Vue({
  el: "#root",
  data: {
    userName: "Andrei",
    userImg: "img/avatar_1.jpg",
    filterFriends: "",
    // Un array con tutti i msg inviati dal utente
    myMessagges: [],
    friendsList: [
      {
        friendName: "Michele",
        friendImg: "img/avatar_2.jpg",
        friendMessagges: [],
      },
      {
        friendName: "Fabio",
        friendImg: "img/avatar_3.jpg",
        friendMessagges: [],
      },
      {
        friendName: "Samuele",
        friendImg: "img/avatar_4.jpg",
        friendMessagges: [],
      },
      {
        friendName: "Luisa",
        friendImg: "img/avatar_5.jpg",
        friendMessagges: [],
      },
    ],
  },
  methods: {
    filteredFriend: function () {
      this.friendsList = this.friendsList.filter(e => e.friendName.toLowerCase().startsWith(this.filterFriends));
    },
  },
  computed: {},
});
