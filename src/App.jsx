import { useState } from "react";
import "./App.css";
import Profile from "./components/profile";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

async function getProfile() {
  const res = await fetch("https://api.github.com/users/ishaan1013");
  return await res.json();
}

function App() {
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [profile, setProfile] = useState(null);

  return (
    <div className="App">
      <div className="gradient-blob blob-top" />
      <h1>
        React <span className="gradient-text">YRHacks</span> Workshop
      </h1>
      <div className="link-buttons">
        <a href="https://beta.reactjs.org/">
          React Docs <FaExternalLinkAlt className="button-icon" />
        </a>
        <a href="https://yrhacks2023.notion.site/yrhacks2023/YRHacks-2023-2f2aae5945264974b9d8e182e5ec5a40">
          YRHacks Notion <FaExternalLinkAlt className="button-icon" />
        </a>
      </div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Click Me! Current Count: {count}
      </button>
      <div className="divider" />
      <button
        disabled={clicked}
        onClick={async () => {
          const profile = await getProfile();
          console.log("profile", profile);
          setProfile(profile);
          setClicked(true);
        }}
      >
        Fetch Ishaan's GitHub Info
        <FaGithub className="button-icon" />
      </button>

      {profile ? <Profile data={profile} /> : null}
    </div>
  );
}

export default App;
