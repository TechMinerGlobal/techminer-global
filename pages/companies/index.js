import Layout from '../../components/Layout'
import Link from 'next/link'

export default function Companies() {
  return (
    <Layout>
      <section className="container py-16">
        <h1 className="text-3xl font-bold mb-6">The Companies</h1>
        <ul className="space-y-6">
          <li>
            <Link href="/companies/network"><a className="font-semibold">🌐 TechMiner Global Network</a></Link>
            <p className="text-gray-300">Connectivity, secure data storage, and EV charging.</p>
          </li>
          <li>
            <Link href="/companies/solutions"><a className="font-semibold">💼 TechMiner Global Solutions</a></Link>
            <p className="text-gray-300">Technology consulting and business solutions.</p>
          </li>
          <li>
            <Link href="/companies/services"><a className="font-semibold">🛠️ TechMiner Global Services</a></Link>
            <p className="text-gray-300">Installation, maintenance, and customer support.</p>
          </li>
        </ul>
      </section>
    </Layout>
  )
}
