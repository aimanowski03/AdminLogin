  <template>
    <div class="app-container">
      <div class="login-form">
        <h1>Admin Login</h1>
        <form @submit.prevent="login">
          <div class="input-group">
            <label for="username">Username</label>
            <input
              v-model="username"
              type="text"
              id="username"
              placeholder="Enter your username"
              required
            />
          </div>
          <div class="input-group">
            <label for="password">Password</label>
            <input
              v-model="password"
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div class="remember-me">
            <input
              v-model="rememberMe"
              type="checkbox"
              id="rememberMe"
            />
            <label for="rememberMe">Remember me</label>
          </div>
          <button type="submit">Login</button>
        </form>
        <p class="forgot-password" @click="forgotPassword">Forgot Password?</p>
        <p class="error" v-if="errorMessage">{{ errorMessage }}</p>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: "App",
    data() {
      return {
        username: "",
        password: "",
        rememberMe: false,
        errorMessage: "",
      };
    },
    methods: {
      login() {
        // Example login logic
        if (this.username === "admin" && this.password === "password") {
          this.errorMessage = "";
          alert("Login successful!");
          // You can redirect or take other actions here
        } else {
          this.errorMessage = "Invalid username or password!";
        }
      },
      forgotPassword() {
        alert("Forgot Password clicked!");
        // Here you can handle the forgot password logic (e.g., show a modal or redirect to a recovery page)
      }
    },
  };
  </script>

  <style scoped>
  .app-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f7fa;
  }

  .login-form {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 350px; /* Ensure the form does not exceed this width */
    box-sizing: border-box; /* Include padding in the width calculation */
  }

  h1 {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
  }

  .input-group {
    margin-bottom: 15px;
  }

  .input-group label {
    font-size: 14px;
    margin-bottom: 5px;
    display: block;
  }

  .input-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    box-sizing: border-box; /* Include padding and border in the width calculation */
  }

  button {
    width: 100%;
    padding: 10px;
    background-color: #28a745; /* Green color */
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }

  button:hover {
    background-color: #218838; /* Darker green on hover */
  }

  .remember-me {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }

  .remember-me input {
    margin-right: 5px;
  }

  .forgot-password {
    text-align: center;
    color: #28a745; /* Green color for the link */
    cursor: pointer;
    font-size: 14px;
    margin-top: 10px;
  }

  .forgot-password:hover {
    text-decoration: underline;
  }

  .error {
    color: red;
    text-align: center;
    margin-top: 10px;
  }
  </style>
