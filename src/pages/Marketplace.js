import React, { useEffect, useState } from 'react';

function Marketplace() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Mock fetch marketplace items
    setTimeout(() => {
      setItems([
        {
          _id: '1',
          name: 'Army Textbook Set',
          description: 'Used textbooks for military studies.',
          price: 1500,
          seller: { name: 'John Doe', contact: 'john@example.com' },
        },
        {
          _id: '2',
          name: 'Camping Tent',
          description: '2-person waterproof tent.',
          price: 3500,
          seller: { name: 'Jane Smith', contact: 'jane@example.com' },
        },
      ]);
    }, 1000);
  }, []);

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Resource Marketplace</h2>

      <input
        type="text"
        placeholder="Search items..."
        className="form-control mb-3"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {filteredItems.length === 0 ? (
        <p>No items found.</p>
      ) : (
        <div className="row">
          {filteredItems.map(({ _id, name, description, price, seller }) => (
            <div key={_id} className="col-md-4 mb-3">
              <div className="card p-3 shadow-sm h-100">
                <h5>{name}</h5>
                <p>{description}</p>
                <p><strong>Price:</strong> ₹{price}</p>
                <p><strong>Seller:</strong> {seller.name}</p>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => alert(`Contact seller at: ${seller.contact}`)}
                >
                  Contact Seller
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Marketplace;
