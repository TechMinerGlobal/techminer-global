export default function Services() {
  const services = [
    {
      title: "Software Development",
      description:
        "Custom web applications, enterprise software and scalable digital platforms tailored to your business.",
    },
    {
      title: "Artificial Intelligence",
      description:
        "AI-powered automation, machine learning, chatbots and intelligent business solutions.",
    },
    {
      title: "Cloud Solutions",
      description:
        "Cloud migration, infrastructure management, DevOps and secure hosting solutions.",
    },
    {
      title: "Cyber Security",
      description:
        "Security assessments, penetration testing, compliance and proactive threat protection.",
    },
    {
      title: "Network Engineering",
      description:
        "Enterprise networking, infrastructure design, implementation and optimisation.",
    },
    {
      title: "Technology Consulting",
      description:
        "Strategic IT consulting, digital transformation and technology roadmaps for growth.",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Our Services</h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          TechMiner Global delivers innovative technology solutions that help
          businesses grow, modernise and stay secure in a rapidly evolving
          digital world.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h2 className="mb-4 text-2xl font-semibold">{service.title}</h2>

            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </section>

      <section className="mt-20 rounded-2xl bg-blue-600 p-12 text-center text-white">
        <h2 className="mb-4 text-4xl font-bold">
          Ready to Start Your Project?
        </h2>

        <p className="mb-8 text-lg">
          Partner with TechMiner Global to build secure, scalable and innovative
          technology solutions.
        </p>

        <a
          href="/contact"
          className="inline-block rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 transition hover:bg-gray-100"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}