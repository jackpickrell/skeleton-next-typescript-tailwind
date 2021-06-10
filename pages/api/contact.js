export default function contactAPI(req, res) {
  const { name, email, phone, message } = req.body;
  setTimeout(() => {
    res.status(200).json({ success: true, name, email, phone, message });
  }, 2000);
}
