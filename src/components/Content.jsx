import React from 'react';

const Content = () => {
  return (
    <div>
      {/* White and Black Space Section */}
      <div className="relative h-screen bg-white text-black flex items-center justify-center">
        {/* Overlay Content */}
        <div className="text-center px-6 max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">ADOPTION</h1>
          <p className="text-lg italic mb-6">
            Re-homing dogs is one of the most crucial aspects of our work. Not only does it give one of our rescue dogs a new life in a loving home, but at the same time, it makes room at the Centre for another dog that needs our help.
          </p>
          <p className="mb-6">
            Our aim is to always re-home dogs within the Philippines. If you think you can provide a happy, healthy, and safe home in the Philippines for one of our rescue dogs, please <a href="/contact" className="text-blue-500 hover:text-blue-700 transition duration-300">Contact Us about Adoption</a>.
          </p>
          <strong className="text-xl block mb-6">NEWS</strong>
          <p className="mb-6">
            IWCT’s rescue policy means that the individual who alerts us to a dog in need of rescuing must take responsibility for it once it is well enough to leave our care. That means they either adopt the dog themselves or find it a suitable home among family or friends.
          </p>
          <p className="mb-6">
            This means we have fewer dogs remaining at the Centre for prolonged periods of time and can therefore accommodate more dogs in need.
          </p>
        </div>
      </div>

      {/* Available Pets Section */}
      <div className="container mx-auto py-16">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-extrabold text-black">Dogs Available for Adoption</h2>
          <p className="text-4xl pb-4 text-gray-400">Below are dogs who could be considered for adoption:</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Milly */}
          <div className="relative group bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-indigo-700 hover:shadow-2xl">
            <img
              src="1.jpg"
              alt="Milly"
              className="w-full h-[300px] object-cover group-hover:opacity-90 transition-opacity duration-300"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white group-hover:text-yellow-300 transition duration-300">Milly</h3>
              <p className="text-gray-400 mt-2 group-hover:text-white transition duration-300">
                Milly was found by Doc Roland, hungry and weak with a gaping wound on her head back in May 2023. She is now happy and healthy, she looks older for her age due to the severity of her parasitic infection. However, she is just as friendly and playful as any other dog. Her best friend is Divi, it would be wonderful if they could be adopted together.
              </p>
              <p className="text-xl font-bold text-blue-500 mt-4">Age: 2 Years</p>
            </div>
          </div>

          {/* Divi */}
          <div className="relative group bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-indigo-700 hover:shadow-2xl">
            <img
              src="2.jpg"
              alt="Divi"
              className="w-full h-[300px] object-cover group-hover:opacity-90 transition-opacity duration-300"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white group-hover:text-yellow-300 transition duration-300">Divi</h3>
              <p className="text-gray-400 mt-2 group-hover:text-white transition duration-300">
                Divi was found by street dog feeder Jeff outside a DiviMart. She was weak, riddled with worms, and bald from mange. Now she is a happy, healthy, and playful little dog. Her best friend is Milly, and it would be lovely if they could be adopted together.
              </p>
              <p className="text-xl font-bold text-blue-500 mt-4">Age: 3 Years</p>
            </div>
          </div>

          {/* Cooper */}
          <div className="relative group bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-indigo-700 hover:shadow-2xl">
            <img
              src="3.jpg"
              alt="Cooper"
              className="w-full h-[300px] object-cover group-hover:opacity-90 transition-opacity duration-300"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white group-hover:text-yellow-300 transition duration-300">Cooper</h3>
              <p className="text-gray-400 mt-2 group-hover:text-white transition duration-300">
                Cooper was rescued by Suzanne when homeless Josie alerted her to him. He was chained up on a construction site for long periods of time without food or water. The site owner relinquished ownership to us. Cooper has begun rehabilitation in the Enrichment Park and is bouncy and excitable like Cheksa was. He will need an experienced home who can allow him to regularly exercise on a lead or run in enclosed, secure dog parks.
              </p>
              <p className="text-xl font-bold text-blue-500 mt-4">Age: 4 Years</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
