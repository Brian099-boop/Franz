import React from 'react';

const Blog = () => {
  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: 'Welcome to Vapor World: Your Trusted Vape Shop',
      content:
        'At Vapor World, we take pride in offering the best vaping experience with top-quality products, a wide range of flavors, and excellent customer service. Whether you’re a beginner or a pro, we have something for everyone.',
      image: '/b1.jpg',
    },
    {
      id: 2,
      title: 'Top 5 Flavors You Must Try This Month',
      content:
        'Explore our latest and most popular flavors, including the all-time favorite "Blueberry Blast" and the exotic "Mango Tango." Find out what makes these flavors irresistible and why customers love them.',
      image: '/b2.jpg',
    },
    {
      id: 3,
      title: 'Why Quality Matters in Vaping Products',
      content:
        'Discover why using high-quality vaping devices and e-liquids is essential for safety and satisfaction. Learn how Vapor World ensures every product meets industry standards.',
      image: '/b3.jpg',
    },
    {
      id: 4,
      title: 'Tips for Maintaining Your Vape Device',
      content:
        'Get expert tips on cleaning and maintaining your vape device for optimal performance and longevity. Proper care ensures you always have the best experience.',
      image: '/b4.jpg',
    },
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-4xl text-center font-bold mb-10 text-white">Vape Shop Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition duration-300 ease-in-out hover:shadow-xl hover:scale-105"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">{post.title}</h3>
              <p className="text-gray-400 mt-2">{post.content.slice(0, 100)}...</p>
              <a href={`/blog/${post.id}`} className="text-blue-400 hover:underline mt-4 block">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
