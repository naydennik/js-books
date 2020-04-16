import config from "@/config/config";

const loginUser = (user) => {
  sessionStorage.setItem("username", user.username);
  sessionStorage.setItem("authtoken", user.authtoken);
  sessionStorage.setItem("id", user.id);
  sessionStorage.setItem("imageUrl", user.imageUrl);

  return user;
};

const authString = btoa(`${config.kinveyAppKey}:${config.kinveyAppSecret}`);
const clearSessionStorage = () => sessionStorage.clear();

export const authServices = {
  data() {
    return {
      authtoken: sessionStorage.getItem("authtoken"),
      isLoading: false,
    };
  },
  computed: {
    isAuthenticated() {
      return this.authtoken !== null;
    },

    isAdmin() {
      return sessionStorage.getItem("id") === config.adminId;
    },
  },
  created() {
    this.$root.$on("logged", (authtoken) => (this.authtoken = authtoken));
  },
};

export const sign = {
  methods: {
    register(params) {
      this.isLoading = true;
      return this.$http
        .post(`/user/${config.kinveyAppKey}`, params)
        .then(() => {
          this.$router.push({ name: "login" });
          this.isLoading = false;
          location.reload();
        })
        .catch((err) => {
          if (err.status === 409) {
            window.alert(
              "This username is taken! Please try with different one."
            );
          } else {
            window.alert(
              "Something went wrong ): Please check if the username and password are correct!\nIf you still have a problem, contact us."
            );
          }
          console.warn(err);
        });
    },

    login(params) {
      return this.$http
        .post(`/user/${config.kinveyAppKey}/login`, params)
        .then((res) => {
          loginUser({
            username: res.data.username,
            authtoken: res.data._kmd.authtoken,
            id: res.data._id,
            imageUrl: res.data.imageUrl,
          });
          this.$root.$emit("logged");
          this.$router.push({ name: "allBooks" });
          location.reload();
        })
        .catch((err) => {
          window.alert(
            "Something went wrong ): Please check if the username and password are correct!\nIf you still have a problem, contact us."
          );
          console.warn(err);
        });
    },
  },
  created() {
    this.$http.defaults.headers.post["Authorization"] = `Basic ${authString}`;
  },
};

export const signout = {
  methods: {
    logout() {
      return this.$http
        .post(`/user/${config.kinveyAppKey}/_logout`, "", {
          "Content-Type": "application/json",
          Authorization: `Kinvey ${this.authtoken}`,
        })
        .then(() => {
          clearSessionStorage();
          this.$router.push({ name: "home" });
          location.reload();
        })
        .catch((err) => {
          console.warn(err);
        });
    },
  },
};
