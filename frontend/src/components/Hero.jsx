
const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80"
          alt="Farm landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-6">Growing Together</h1>
          <p className="text-xl mb-8">Connecting farmers, vendors, and experts for a sustainable future</p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
