export default function AboutSection() {
  return (
    <section className="bg-gray-800 text-white py-16 md:py-24">
      <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center">
        {/* Column 1: Our Story */}
        <div className="w-full p-8 md:w-1/2 md:pr-8">
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-lg leading-relaxed mb-6">
            Welcome to Elegant Homes, where we redefine modern living. Our
            mission is to create spaces that go beyond the ordinary, offering a
            unique blend of luxury, comfort, and sustainability. With a
            commitment to innovative design and eco-friendly practices, we aim
            to provide you with a living experience that&apos;s both
            sophisticated and responsible.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            At Elegant Homes, we believe in the power of thoughtful architecture
            to enrich lives. Our team of dedicated professionals is passionate
            about creating homes that not only meet your expectations but exceed
            them. Join us on a journey where aesthetics meet functionality, and
            your dream home becomes a reality.
          </p>
          <p className="text-lg leading-relaxed">
            Explore our projects, discover the beauty of Elegant Homes, and
            envision the life that awaits you in our carefully crafted
            communities.
          </p>
          <button className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none">
            Learn More
          </button>
        </div>

        {/* Column 2: Image */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          {/* Adjust the height of the image to match the content */}
          <img
            src="/images/family.jpg"
            alt="About Us Image"
            className="w-full h-auto md:h-full object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
}
