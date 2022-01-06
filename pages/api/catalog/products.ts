import data from "./data.json";

export default function handler(req: any, res: any) {
  setTimeout(() => {
    res.end(JSON.stringify(data))
  }, 200)
}
