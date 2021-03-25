import './style.css';
export const PostCard = ({ title, cover, body, id }) => (
  <div className="post">
    <img src={cover} alt={title} />
    <div className="post-content">
      <h2 className="post-title">{title} {id}</h2>
      <p className="post-text">{body}</p>
    </div>
  </div>
);
