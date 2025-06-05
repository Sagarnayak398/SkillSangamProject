import React, { useState } from 'react';
import './ViewMarketplace.css';

const initialPosts = [
  { id: 1, title: 'Textbooks for NDA Prep', description: 'Complete NDA material set.', contact: '9876543210' },
  { id: 2, title: 'Used Uniforms', description: 'Olive green uniforms in good condition.', contact: '9765432109' },
];

function ViewMarketplace() {
  const [posts, setPosts] = useState(initialPosts);
  const [form, setForm] = useState({ title: '', description: '', contact: '' });

  const handleSubmit = () => {
    setPosts([...posts, { ...form, id: posts.length + 1 }]);
    setForm({ title: '', description: '', contact: '' });
  };

  return (
    <div className="marketplace-container">
      <h2>Community Marketplace</h2>
      <div className="marketplace-form">
        <input
          type="text"
          placeholder="Item Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Contact Info"
          value={form.contact}
          onChange={(e) => setForm({ ...form, contact: e.target.value })}
        />
        <button onClick={handleSubmit}>Post Item</button>
      </div>

      <div className="marketplace-list">
        {posts.map(item => (
          <div className="marketplace-item" key={item.id}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <small>Contact: {item.contact}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewMarketplace;
