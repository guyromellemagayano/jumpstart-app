import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

// Referral data type definition
export type ReferralData = {
  id?: number
  givenName: string
  surname: string
  email: string
  phone: string
  homeNameOrNumber: string
  street: string
  suburb?: string | null
  state: string
  postcode: number
  country: string
  avatarUrl?: string | null
}

// Define a separate type for error responses to avoid type conflicts
type ErrorResponse = {
  error: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ReferralData | ReferralData[] | ErrorResponse>
) {
  if (req.method === 'POST') {
    const {
      givenName,
      surname,
      email,
      phone,
      homeNameOrNumber,
      street,
      suburb,
      state,
      postcode,
      country,
      avatarUrl
    } = req.body as ReferralData

    try {
      const newReferralData = await prisma.referral.create({
        data: {
          givenName,
          surname,
          email,
          phone,
          homeNameOrNumber,
          street,
          suburb,
          state,
          postcode,
          country,
          avatarUrl
        }
      })

      return res.status(201).json(newReferralData)
    } catch (error) {
      res.status(500).json({ error: 'Failed to create referral.' })
    }
  } else if (req.method === 'GET') {
    try {
      const referrals = await prisma.referral.findMany()

      return res.status(200).json(referrals)
    } catch (error) {
      return res.status(500).json({ error: 'Failed to retrieve referrals.' })
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
