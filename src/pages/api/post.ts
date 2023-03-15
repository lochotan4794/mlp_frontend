import type { NextApiRequest, NextApiResponse } from 'next'


type ListData = {
    name: string
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