import Layout from '../components/Layout'

export default function Contact() {
  return (
    <Layout>
      <section className="container py-16">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p className="text-gray-300">Reach out to us at <a href="mailto:info@techminer.global" className="underline">info@techminer.global</a>.</p>
      </section>
    </Layout>
  )
}
