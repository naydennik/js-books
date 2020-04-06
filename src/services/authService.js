import config from "@/config/config";

const loginUser = user => {
  sessionStorage.setItem("username", user.username);
  sessionStorage.setItem("authtoken", user.authtoken);
  sessionStorage.setItem("id", user.id);
};

const authString = btoa(`${config.kinveyAppKey}:${config.kinveyAppSecret}`);

export const authServices = {
  computed: {
    isAuthenticated() {
      return sessionStorage.getItem("authtoken") !== null;
    },

    isAdmin() {
      return sessionStorage.getItem("id") === config.adminId;
    }
  }
};

export const sign = {
  methods: {
    register(params) {
      return this.$http.post(`/user/${config.kinveyAppKey}`, params).then(res =>
        loginUser({
          username: res.data.username,
          authtoken: res.data._kmd.authtoken,
          id: res.data._id
        })
      );
    },

    login(params) {
      return this.$http
        .post(`/user/${config.kinveyAppKey}/login`, params)
        .then(({ data }) =>
          loginUser({
            username: data.username,
            authtoken: data._kmd.authtoken,
            id: data._id
          })
        );
    }
  },
  created() {
    this.$http.defaults.headers.post["Authorization"] = `Basic ${authString}`;
  }
};
