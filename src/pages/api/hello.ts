// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
//const severUrl = "http://127.0.0.1:8000/";
const severUrl = "https://blog.centralglobalbackend.de/";

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}


async function getPostList() {
  try {
    const response = await fetch(
      `https://blog.centralglobalbackend.de/blog/list/all/`
    );
    const json = await response.json();
    return json.disposable;
  } catch (e) {
    console.error(e);
    return true;
  }
}