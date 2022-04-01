const vrchat = require("vrchat");

class VrchatLogin {
  // Step 1. We begin with creating a Configuration, which contains the username and password for authentication.
  configuration() {
    return new vrchat.Configuration({
      username: "username",
      password: "password",
    });
  }

  // Step 2. VRChat consists of several API's (WorldsApi, UsersApi, FilesApi, NotificationsApi, FriendsApi, etc...)
  // Here we instantiate the Authentication API which is required for logging in.
  authenticationApi() {
    return new vrchat.AuthenticationApi(this.configuration);
  }
  // Step 3. Calling getCurrentUser on Authentication API logs you in if the user isn't already logged in.
  getCurrentUser() {
    return this.authenticationApi.getCurrentUser().then((res) => {
      const currentUser = res.data;
      console.log(`Logged in as: ${currentUser.displayName}`);
    });
  }
}

export default new VrchatLogin();
