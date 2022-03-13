import { FC, HTMLAttributes } from "react"
import Image from "next/image"
import clsx from "clsx"
import Link from "next/link"

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  productCode: string,
  productName: string,
  gameName?: string,
  image: string,
  stock: {
    value: number,
    type: 'available' | 'limited'
  },
  price: {
    discount?: number | null,
    original: number,
    final: number
  },
  delivery?: string,
  sold: number,
}

const Card: FC<CardProps> = ({
  productCode = '',
  productName = '',
  image = '',
  gameName,
  stock,
  price,
  delivery,
  sold,
  ...props
}) => (
  <Link href={`/products/${productCode}`}>
    <a draggable={false} className={props.className}>
      <div className="flex flex-col rounded-xl shadow w-[165px] flex-shrink-0 h-full">
        <div className="relative h-[75px] w-full">
          <Image
            alt={productName}
            className="rounded-t-xl"
            loading="lazy"
            layout="fill"
            objectFit="cover"
            src={image}
          />
        </div>
        <div className="p-2 flex-grow space-y-4">
          <div>
            <h3 className="font-semibold">{productName}</h3>
            {gameName && <p className="text-gray-400 leading-5">{gameName}</p>}
          </div>
          <div
            className={clsx([
              "inline-block rounded-md px-1 border-[1px] font-medium",
              stock.type === 'available' ? 'border-green-700 text-green-700' : 'border-orange-700 text-orange-700'
            ])}
          >
            Stok {stock.value > 999 ? '999+' : stock.value}
          </div>
          {price.discount && <div className="space-x-3">
            <span className="bg-red-500 text-white rounded-md py-[2px] px-1">{price.discount}%</span>
            <span className="text-gray-400 line-through">Rp{price.original.toLocaleString('id')}</span>
          </div>}
          <p className="text-xl text-orange-500 font-bold">Rp{price.final.toLocaleString('id')}</p>
          <p className="inline-block px-[3px] bg-green-200 text-green-700 font-medium rounded-md">{delivery}</p>
        </div>
        <div className="p-2">
          <p className="text-gray-400">{sold} produk terjual</p>
        </div>
      </div>
    </a>
  </Link>
)

export default Card