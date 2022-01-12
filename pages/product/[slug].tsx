import { useRouter } from 'next/router'
import commerce from '@lib/api/commerce'
import { Layout } from '@components/common'
import { ProductView } from '@components/product'
import { useEffect, useState } from 'react'
import { Product } from '@commerce/types/product'

export default function Slug() {
  const [products, setProducts] = useState<{ product: Product, relatedProducts: Product[] } | null>(null);
  const { product, relatedProducts } = products || {};

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    (async () => {
      if(!slug) {
        return
      }

      const { product } = await commerce.getProduct({
        variables: { slug }
      });

      await fetch(`/api/test`)

      const { products: relatedProducts } = await commerce.getAllProducts({
        variables: { first: 4 },
      });

      setProducts({ product, relatedProducts });
    })()
  }, [slug]);

  if(!product || !relatedProducts) {
    return <h1>Loading...</h1>
  }

  return <ProductView product={product} relatedProducts={relatedProducts} />
}

Slug.Layout = Layout
