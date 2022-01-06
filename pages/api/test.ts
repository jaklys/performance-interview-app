export default function handler(req: any, res: any) {
  setTimeout(() => {
    const status = Math.random() * 100 > 10 ? 200 : 500;
    res.status(status);
    res.end(status === 200 ? "DONE" : "ERROR");
  }, Math.floor(Math.random() * 5 * 1000))
}
