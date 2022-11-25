import { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";
import { API_URL } from "../../config/index";

const user = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    if (!req.headers.cookie) {
      res.status(403).json({ message: "Not Authorized" });
      return;
    }

    const { token } = cookie.parse(req.headers.cookie);

    const apiRes = await fetch(`${API_URL}/users/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const user = await apiRes.json();
    console.log(user)

    if (apiRes.ok) {
      res.status(200).json({ user });
    } else {
      res.status(403).json({ message: "User forbidden" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};
export default user;
