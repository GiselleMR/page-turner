import { useEffect, useState } from 'react';
import * as postAPI from '../../utilities/post-api';

export default function ForumPage() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [posts, setPosts] = useState([]);

useEffect(() => {
  async function getAllPost()  {
    const data = await postAPI.getAll();
    setPosts(data);
  }
  getAllPost();
},[]);

  const handleSubmit = async (e) => {
    e.preventDefault();
      const response = await postAPI.addPost({ title, body });
      const updatedPost = [...posts]
      updatedPost.unshift(response);
      setPosts(updatedPost);
      setTitle('');
      setBody('');

  };

  return (
    <div className="Forum">
      <h1>Forum</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea id="body" value={body} onChange={(e) => setBody(e.target.value)} />
        </div>
        <button type="submit" className="postBtl">Create Post</button>
      </form>
      {
        posts.map((p, idx) =>(
          <div key={idx} className="PostBRD">
            <h3>{p.title}</h3>
            <p>{p.body}</p>
            <p>{p.user.name}</p>
          </div>
        ))
      }
    </div>
  );
}