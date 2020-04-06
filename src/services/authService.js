import config from "@/config/config";
import axios from "axios";

const loginUser = user => {
  sessionStorage.setItem("username", user.username);
  sessionStorage.setItem("authtoken", user.authtoken);
  sessionStorage.setItem("id", user.id);

  return user;
};

const authString = btoa(`${config.kinveyAppKey}:${config.kinveyAppSecret}`);

export const authServices = {
  data() {
    return {
      authtoken: sessionStorage.getItem("authtoken")
    };
  },
  computed: {
    isAuthenticated() {
      return this.authtoken !== null;
    },

    isAdmin() {
      return sessionStorage.getItem("id") === config.adminId;
    }
  },
  created() {
    this.$root.$on("logged", authtoken => (this.authtoken = authtoken));
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
        .then(res =>
          loginUser({
            username: res.data.username,
            authtoken: res.data._kmd.authtoken,
            id: res.data._id
          })
        );
    },

    logout() {
      return axios({
        method: "post",
        url: `user/${config.kinveyAppKey}/_logout`,
        data: "",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Kinvey ${this.authtoken}`
        }
      }).then(() => {
        loginUser({
          username: "",
          authtoken: "",
          id: ""
        }),
          sessionStorage.clear();
      });
    }
  },
  created() {
    this.$http.defaults.headers.post["Authorization"] = `Basic ${authString}`;
  }
};
