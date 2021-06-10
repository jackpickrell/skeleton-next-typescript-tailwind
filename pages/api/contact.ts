import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean;
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export default function contactAPI(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, email, phone, message } = req.body;
  setTimeout(() => {
    res.status(200).json({ success: true, name, email, phone, message });
  }, 2000);
}
