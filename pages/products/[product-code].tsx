import { useRef } from "react"
import Image from "next/image"
import BottomSheet, { BottomSheetAction } from "../../components/BottomSheet"
import Card from "../../components/Card"
import LoveButton from "../../components/LoveButton"
import NavbarProduct from "../../components/NavbarProduct"
import Scrollable from "../../components/Scrollable"
import DetailPhoto, { DetailPhotoAction } from "../../components/DetailPhoto"
import { useCart } from "../../state"

const DetailProduct = () => {
  const bottomSheet = useRef<BottomSheetAction>(null)
  const detailPhoto = useRef<DetailPhotoAction>(null)
  const increaseCard = useCart(state => state.increase)

  return (<>
    <NavbarProduct />
    <BottomSheet ref={bottomSheet}>
      <h2 className="font-bold mb-4">Deskripsi Produk</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ab necessitatibus quibusdam blanditiis labore vel sapiente, molestiae, consequatur quas ducimus sequi soluta recusandae architecto! Ullam beatae nulla accusamus quisquam nihil!</p>
    </BottomSheet>
    <DetailPhoto id="detail-photo" ref={detailPhoto} />
    <div className="min-h-screen">
      <Image
        onClick={() => detailPhoto.current?.open()}
        className="md:cursor-pointer"
        alt="Detail Product"
        loading="lazy"
        layout="responsive"
        width="100%"
        height={50}
        objectFit="cover"
        src="https://cdn.akamai.steamstatic.com/steam/apps/570/header.jpg"
      />
      <div className="flex flex-col h-full gap-4">
        <div className="bg-white py-8 px-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="font-bold">999 Diamond</h2>
              <p className="text-gray-400">PUBG Mobile</p>
            </div>
            <LoveButton />
          </div>
          <div className="flex items-center space-x-3 mb-3">
            <h1 className="inline price text-2xl">
              Rp{(100000).toLocaleString('id')}
            </h1>
            <span className="text-base font-normal text-gray-400">per 1 Top Up</span>
          </div>
          <div className="flex items-center space-x-3">
            <h3 className="discount-badge py-[1px]">10%</h3>
            <p className="line-through text-gray-400">Rp{(110000).toLocaleString('id')}</p>
          </div>
        </div>
        <div className="flex flex-col bg-white py-8 px-6 gap-3">
          <h2 className="font-bold mb-1">Deskripsi Produk</h2>
          <p>Description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt quo sequi...</p>
          <button onClick={() => bottomSheet.current?.open()} className="self-end text-lg text-blue-500 font-bold">
            Selengkapnya
          </button>
        </div>
        <div className="bg-white flex-grow py-8">
          <div className="px-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold">Pengiriman Tercepat</h2>
              <button className="text-blue-500 font-bold">Lihat Semua</button>
            </div>
            <p>Produk dari penjual-penjual yang memberi Garansi Pengiriman 10 menit</p>
          </div>
          <Scrollable direction="x" className="gap-3 py-2 px-6 mt-4 mb-28">
            {[...new Array(10)].map((_, idx) => (
              <Card
                key={idx}
                className={idx === 10 - 1 ? 'pr-6' : ''}
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
        </div>
      </div>
      <div className="fixed bottom-0 w-full max-w-[600px] bg-white border-t-[1px] border-gray-200 px-6 py-4">
        <button onClick={increaseCard} className="bg-orange-500 text-white text-lg font-medium rounded-lg w-full p-3">
          Tambah Ke Troli
        </button>
      </div>
    </div>
  </>)
}

export default DetailProduct