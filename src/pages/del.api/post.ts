import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  try {
    const {page, limit} = req.query;

    const {data} = await axios.get(serverRuntimeConfig.URL_API, {
      params: {
        _page: page,
        _limit: limit,
      }
    });

    res.json(data);
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
};
