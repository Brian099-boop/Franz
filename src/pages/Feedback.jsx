import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Shop = () => {
  // State to hold user data and product reviews data
  const [users, setUsers] = useState([]);
  const [reviews, setReviews] = useState([]);

  // Fetch user data from the fake user API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
        
        // Adding 2 additional users
        const additionalUsers = [
          {
            id: 11,
            name: 'Jessica Bloom',
            email: 'jessica.bloom@fakemail.com',
            address: { city: 'Rosewood', street: 'Lavender Lane' },
            company: { name: 'Bloom & Co.' },
          },
          {
            id: 12,
            name: 'Liam Florist',
            email: 'liam.florist@fakemail.com',
            address: { city: 'Sunset Valley', street: 'Petunia Path' },
            company: { name: 'Floral Horizons' },
          },
        ];
        
        setUsers([...userResponse.data, ...additionalUsers]);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    // Fetch product reviews (feedback) from the fake comments API
    const fetchReviews = async () => {
      try {
        const reviewResponse = await axios.get('https://jsonplaceholder.typicode.com/comments');
        setReviews(reviewResponse.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchUsers();
    fetchReviews();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-4xl text-center font-extrabold mb-10 text-indigo-700">Meet Our Users</h2>

      {/* User Grid (3 boxes in a row) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {users.map((user) => {
          // Filter reviews related to the user (using email as a mock link to product)
          const productReviews = reviews.filter(review => review.email === user.email);

          return (
            <div
              key={user.id}
              className="relative group bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <div className="pl-6 pr-6 pt-6 pb-4">
                <h3 className="text-xl font-semibold text-white">{user.name}</h3>
                <p className="text-gray-100 mt-2">{user.email}</p>
                <p className="text-gray-100 mt-2">{user.address.city}, {user.address.street}</p>
                <p className="text-lg font-bold text-yellow-400 mt-4">Company: {user.company.name}</p>

                {/* Product Reviews */}
                <div className="mt-4">
                  <h4 className="text-lg text-white font-semibold">Product Reviews:</h4>
                  <ul className="mt-2 text-gray-200">
                    {productReviews.length > 0 ? (
                      productReviews.map((review) => (
                        <li key={review.id} className="mt-2">
                          <p>"{review.body}"</p>
                          <p className="text-sm text-yellow-300">By: {review.name}</p>
                        </li>
                      ))
                    ) : (
                      <p className="text-sm text-gray-300">No reviews yet.</p>
                    )}
                  </ul>
                </div>
              </div>

              {/* Updated Hover Effect with Gradients */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-0 group-hover:opacity-70 transition-all duration-300 ease-in-out"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                <span className="text-white text-lg font-semibold px-6 py-2 rounded-lg bg-opacity-50 bg-gray-800">
                  View Profile
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
