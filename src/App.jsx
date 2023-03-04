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
        <a target="_blank" rel="noreferrer" href="https://beta.reactjs.org/">
          React Docs <FaExternalLinkAlt className="button-icon" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/yrhacks/react-workshop"
        >
          This Website's Code <FaExternalLinkAlt className="button-icon" />
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

      {clicked ? (
        <>{profile ? <Profile data={profile} /> : <div>loading...</div>}</>
      ) : null}
    </div>
  );
}

export default App;
