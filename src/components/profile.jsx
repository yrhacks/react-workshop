export default function Profile(props) {
  return (
    <div className="github">
      {/* <div>{JSON.stringify(props.data)}</div> */}
      <div className="github-avatar">
        <img src={props.data.avatar_url} alt="avatar" />
      </div>
      <h2 className="github-name">{props.data.name}</h2>
      <div className="github-handle">@{props.data.login}</div>
      <div className="github-follow">
        <div>{props.data.followers} Follower</div>-
        <div>{props.data.following} Following</div>
      </div>
      <a
        target="_blank"
        rel="noreferrer"
        href={props.data.html_url}
        className="gradient-text github-link"
      >
        Go To Account
      </a>
    </div>
  );
}
