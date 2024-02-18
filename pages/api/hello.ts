import { connectDB } from '@/lib/database';
import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();
  res.status(200).json({
    message: 'Hello from Next.js!',
  });
}
