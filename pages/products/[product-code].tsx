import { useRouter } from "next/router"

const DetailProduct = () => {
  const router = useRouter()
  console.log(router.query['product-code'])
  return (
    <div>DetailProduct</div>
  )
}

export default DetailProduct