import { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";
import { API_URL } from "../../config";

const remove = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("this is remove api");
  if (req.method === "POST") {
    if (!req.headers.cookie) {
      res.status(403).json({ message: "Not Authorized" });
      return;
    }

    const { token } = cookie.parse(req.headers.cookie);
    console.log(token);

    const apiRes = await fetch(`${API_URL}/users`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (apiRes.ok) {
      // Destroy cookie
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", "", {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          expires: new Date(0),
          sameSite: "strict",
          path: "/",
        })
      );

      res.status(200).json({ message: "Success" });
    } else {
      res.status(403).json({ error: "削除できませんでした" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};
export default remove;
