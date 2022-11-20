import cookie from "cookie";
import { NextApiRequest, NextApiResponse } from "next";
import { API_URL } from "../../config/index";

const register = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { name, email, password, profileText } = req.body;

    const apiRes = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        profileText,
      }),
    });

    const data = await apiRes.json();

    // // signupに失敗した場合
    // if (!apiRes.ok) {
    //   console.log("api response is bad pattern");
    //   res.status(apiRes.status).json(data.error);
    // }

    if (apiRes.ok) {
      // Set Cookie
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", data.paseto, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          maxAge: 60 * 60 * 24 * 7, // 1 week
          sameSite: "strict",
          path: "/",
        })
      );

      res.status(200).json(data);
      console.log("ststus ok!!!!!!!!!!!!!!!!!!!");
    } else {
      res.status(apiRes.status).json(data.error);
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};

export default register;
