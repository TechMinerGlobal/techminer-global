import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-28">

          <div className="max-w-3xl">

            <span className="inline-block bg-blue-500/20 text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Technology • Innovation • Global Solutions
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Engineering
              <span className="text-blue-400"> Tomorrow's </span>
              Technology Today
            </h1>

            <p className="text-xl text-gray-300 mb-10 leading-8">
              TechMiner Global partners with organisations to design,
              build and manage innovative technology solutions that
              drive growth, improve security and accelerate digital
              transformation.
            </p>

            <div className="flex flex-wrap gap-5">

              <Link
                href="/services"
                className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-lg font-semibold"
              >
                Explore Services
              </Link>

              <Link
                href="/contact"
                className="border border-white/30 hover:bg-white hover:text-slate-900 transition px-8 py-4 rounded-lg font-semibold"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* About Preview */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <h2 className="text-4xl font-bold mb-8">
              Technology That Powers Business
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              We help businesses modernise their technology,
              strengthen cybersecurity, migrate to the cloud and
              build intelligent software solutions.
            </p>

            <p className="text-lg text-gray-600">
              From strategy to deployment, TechMiner Global provides
              reliable technology services that enable organisations
              to innovate with confidence.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="rounded-xl bg-gray-100 p-8">
              <h3 className="text-4xl font-bold text-blue-600">10+</h3>
              <p className="mt-2 text-gray-600">
                Technology Services
              </p>
            </div>

            <div className="rounded-xl bg-gray-100 p-8">
              <h3 className="text-4xl font-bold text-blue-600">
                Global
              </h3>
              <p className="mt-2 text-gray-600">
                Business Reach
              </p>
            </div>

            <div className="rounded-xl bg-gray-100 p-8">
              <h3 className="text-4xl font-bold text-blue-600">
                Secure
              </h3>
              <p className="mt-2 text-gray-600">
                Infrastructure
              </p>
            </div>

            <div className="rounded-xl bg-gray-100 p-8">
              <h3 className="text-4xl font-bold text-blue-600">
                24/7
              </h3>
              <p className="mt-2 text-gray-600">
                Support
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Services */}

      <section className="bg-gray-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-4">
            Our Core Services
          </h2>

          <p className="text-center text-gray-600 text-lg mb-16">
            Delivering scalable, secure and future-ready technology.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "Software Development",
              "Artificial Intelligence",
              "Cloud Infrastructure",
              "Cyber Security",
              "Network Engineering",
              "Technology Consulting",
            ].map((service) => (

              <div
                key={service}
                className="bg-white rounded-xl p-8 shadow hover:shadow-xl transition"
              >

                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6">

                  <span className="text-2xl">✓</span>

                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {service}
                </h3>

                <p className="text-gray-600">
                  Professional solutions designed to improve
                  efficiency, security and business growth.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose TechMiner Global?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="text-center">

              <h3 className="text-2xl font-semibold mb-4">
                Innovation
              </h3>

              <p className="text-gray-600">
                Modern technologies that keep your business ahead of
                the competition.
              </p>

            </div>

            <div className="text-center">

              <h3 className="text-2xl font-semibold mb-4">
                Security
              </h3>

              <p className="text-gray-600">
                Enterprise-grade security practices protecting your
                infrastructure and data.
              </p>

            </div>

            <div className="text-center">

              <h3 className="text-2xl font-semibold mb-4">
                Partnership
              </h3>

              <p className="text-gray-600">
                Long-term technology partnerships focused on business
                success.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-blue-600 text-white">

        <div className="max-w-6xl mx-auto px-6 py-24 text-center">

          <h2 className="text-5xl font-bold mb-6">
            Ready to Build the Future?
          </h2>

          <p className="text-xl mb-10 text-blue-100">
            Let's create innovative technology solutions together.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Get Started
          </Link>

        </div>

      </section>

    </main>
  );
}