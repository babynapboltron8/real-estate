const projects = [
  {
    title: "Elegant Homes",
    description: "Discover luxurious living in our modern residences.",
    imageUrl: "/images/modern.jpg",
  },
  {
    title: "Urban Oasis Residences",
    description:
      "Explore the charm of our cutting-edge urban retreats in the heart of the city.",
    imageUrl: "/images/urban_oasis.jpg",
  },
  {
    title: "Sustainable Living Community",
    description:
      "Embrace eco-friendly living in our sustainable residential project.",
    imageUrl: "/images/sustainable_living.jpg",
  },
];

export default function Gallery() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container max-w-5xl mx-auto p-6">
        <h2 className="text-4xl font-bold text-center mb-8">Project Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-56 object-cover object-center rounded-t-md"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <a href="#" className="text-blue-500 mt-4 inline-block">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
