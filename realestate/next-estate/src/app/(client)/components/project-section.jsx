export default function ProjectSection() {
  const projects = [
    {
      title: "Modern Residence",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "/images/modern.jpg", // Replace with your project image URL
    },
    {
      title: "Urban Oasis",
      description:
        "A cutting-edge urban retreat designed to harmonize with the bustling cityscape.",
      imageUrl: "/images/urban_oasis.jpg", // Replace with your project image URL
    },
    {
      title: "Sustainable Living",
      description:
        "Embrace eco-friendly living with our sustainable residential project.",
      imageUrl: "/images/sustainable_living.jpg", // Replace with your project image URL
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container max-w-5xl mx-auto p-6">
        <h2 className="text-4xl font-bold text-center mb-8">Our Project</h2>
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
