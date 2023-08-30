import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client';

export const config = {
    api: {
      bodyParser: false,
      externalResolver: true,
    },
  };

const prisma = new PrismaClient()


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    const data = await prisma.toggletable.findMany()

    res.status(200).json(data)
}