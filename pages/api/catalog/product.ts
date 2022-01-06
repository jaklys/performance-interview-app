import data from './data.json'

export default function handler(req: any, res: any) {
  setTimeout(() => {
    res.end(JSON.stringify({
      product: data.products.find(({ slug }: {slug: string}) => slug === req.query!.slug)
    }))
  }, 200)
}
