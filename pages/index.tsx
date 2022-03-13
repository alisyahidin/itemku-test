import type { NextPage } from 'next'
import ScrollableCard from '../components/Card/Scrollable'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Scrollable from '../components/Scrollable'

const lengthItem = 10

const Home: NextPage = () => {
  return (<div className="bg-white">
    <Navbar />
    <main className="min-h-[80vh] mb-8">
      <div className="mx-4 mb-4 mt-6">
        <h2 className="font-bold">Termurah di Seluruh Indonesia</h2>
      </div>
      <Scrollable direction="x" className="gap-3 py-2 px-5">
        {[...new Array(lengthItem)].map((_, idx) => (
          <ScrollableCard
            key={idx}
            className={idx === lengthItem - 1 ? 'pr-5' : ''}
            productCode="600-diamond"
            productName="600 Diamond"
            gameName={idx % 2 == 0 ? "PUBG Mobile" : undefined}
            image="https://cdn.akamai.steamstatic.com/steam/apps/570/header.jpg"
            stock={{ value: Math.ceil(Math.random() * 2000), type: idx % 2 === 1 ? 'available' : 'limited' }}
            price={{ discount: idx % 3 === 1 ? null : 10, original: 10000, final: 9000 }}
            delivery={idx % 3 === 2 ? "10 menit kirim" : undefined}
            sold={Math.ceil(Math.random() * 100)}
          />
        ))}
      </Scrollable>
      <div className="mx-4 mb-4 mt-6">
        <h2 className="font-bold">Produk Mobile Legends terpopuler</h2>
      </div>
      <Scrollable direction="x" className="gap-3 py-2 px-5">
        {[...new Array(lengthItem)].map((_, idx) => (
          <ScrollableCard
            key={idx}
            className={idx === lengthItem - 1 ? 'pr-5' : ''}
            productCode="600-uc"
            productName="600 UC"
            gameName="PUBG Mobile"
            image="https://cdn.akamai.steamstatic.com/steam/apps/570/header.jpg"
            stock={{ value: 100, type: idx % 2 === 1 ? 'available' : 'limited' }}
            price={{ discount: 10, original: 10000, final: 9000 }}
            delivery="10 menit kirim"
            sold={1}
          />
        ))}
      </Scrollable>
    </main>
    <Footer />
  </div>)
}

export default Home
