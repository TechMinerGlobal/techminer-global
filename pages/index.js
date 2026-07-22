import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <header className="bg-gradient-to-b from-black/60 via-black to-black">
        <section className="container py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Technology Made Simple</h1>
            <p className="text-xl text-gray-300 mb-8">Helping people, businesses, and communities connect, protect, power, and grow.</p>

            <div className="flex flex-wrap gap-4">
              <a href="#get-started" className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-black font-semibold rounded">Get Started</a>
              <a href="#services" className="inline-flex items-center px-6 py-3 border border-gray-700 text-gray-200 rounded">Explore Services</a>
            </div>
          </div>
        </section>
      </header>

      <section id="get-started" className="container py-16">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">This is where we'll make it stand out</h2>
          <p className="text-gray-300 mb-6">Most tech websites talk about technology. We'll talk about people. For example, instead of saying "We deploy decentralized storage nodes." we'll say "We help protect your important information with secure and reliable storage solutions."</p>
        </div>
      </section>

      <section id="services" className="container py-12 border-t border-gray-800">
        <h2 className="text-2xl font-bold mb-6">The Four Pillars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start gap-4">
            <div className="text-3xl">🌐</div>
            <div>
              <h3 className="font-semibold">Connect</h3>
              <p className="text-gray-300">Helping people stay connected.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-3xl">🛡️</div>
            <div>
              <h3 className="font-semibold">Protect</h3>
              <p className="text-gray-300">Keeping your information safe.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-3xl">⚡</div>
            <div>
              <h3 className="font-semibold">Power</h3>
              <p className="text-gray-300">Supporting cleaner energy.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-3xl">🚀</div>
            <div>
              <h3 className="font-semibold">Grow</h3>
              <p className="text-gray-300">Helping you embrace technology.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-12 border-t border-gray-800">
        <h2 className="text-2xl font-bold mb-6">The Companies</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-900 rounded-lg">
            <h4 className="font-semibold">TechMiner Global Network</h4>
            <p className="text-gray-300 mt-2">Connectivity, secure data storage, and EV charging.</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg">
            <h4 className="font-semibold">TechMiner Global Solutions</h4>
            <p className="text-gray-300 mt-2">Technology consulting and business solutions.</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg">
            <h4 className="font-semibold">TechMiner Global Services</h4>
            <p className="text-gray-300 mt-2">Installation, maintenance, and customer support.</p>
          </div>
        </div>
 </section>

{/* About */}
<section className="container py-16 border-t border-gray-800">
  <h2 className="text-3xl font-bold mb-6">About TechMiner Global</h2>

  <p className="text-gray-300 text-lg leading-8 max-w-4xl">
    TechMiner Global helps individuals, businesses, and communities adopt
    modern technology through secure connectivity, decentralized data
    storage, telecommunications, EV charging solutions, and professional
    technology services. Our goal is to make technology simple, reliable,
    and accessible for everyone.
  </p>
</section>

{/* Contact */}
<section className="container py-16 border-t border-gray-800">
  <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

  <div className="grid md:grid-cols-2 gap-8">

    <div className="bg-gray-900 rounded-xl p-6">
      <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>

      <p className="text-gray-300 mb-3">
        📧 info@techminerglobal.com
      </p>

      <p className="text-gray-300 mb-3">
        🌐 www.techminerglobal.com
      </p>

      <p className="text-gray-300">
        We welcome enquiries from individuals, businesses, and partners
        looking for innovative technology solutions.
      </p>
    </div>

    <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl p-8">
      <h3 className="text-2xl font-bold mb-4">
        Technology Made Simple
      </h3>

      <p className="text-white">
        Whether you're looking for secure storage, connectivity,
        telecommunications, EV charging, or technology services,
        TechMiner Global is here to help.
      </p>
    </div>

  </div>
</section>

<footer className="border-t border-gray-800 py-8 text-center text-gray-400">
  © {new Date().getFullYear()} TechMiner Global. All Rights Reserved.
</footer>

</Layout>
)
}