import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="login-form">
        <div>
          <label htmlFor="username">User Name:</label>
          <input type="text" name="username" id="username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />
        </div>
      </div>
      <button type="submit">Login</button>
    </div>
  );
}
