import { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";
import { API_URL } from "../../config/index";

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { name, password } = req.body;

    const apiRes = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
      }),
    });

    const data = await apiRes.json();

    if (apiRes.ok) {
      // Set Cookie
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", data.access_token, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          maxAge: 60 * 60 * 24 * 7, // 1 week
          sameSite: "strict",
          path: "/",
        })
      );

      res.status(200).json({ user: data });
    } else {
      res.status(apiRes.status).json({ message: data });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};

export default login;
