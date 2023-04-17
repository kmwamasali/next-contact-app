import type { NextApiRequest, NextApiResponse } from 'next'
import type { Contact } from '../../../../../interfaces'

export default function ContactHandler(
  req: NextApiRequest,
  res: NextApiResponse<Contact>
) {
  const { query, method } = req
  const id = parseInt(query.id as string, 10)
  const name = query.name as string

  switch (method) {
    case 'GET':
      // Get data from your database
      res.status(200).json({
          id, name: `Contact ${id}`, phone: parseInt(`705${id}`), email: `${id}@email.com`, birthday: `03-10-${id}`, createdAt: `17-04-${id}`,
          avatar: ''
      })
      break
    case 'PUT':
      // Update or create data in your database
      res.status(200).json({
          id, name: `Contact ${id}`, phone: parseInt(`705${id}`), email: `${id}@email.com`, birthday: `03-10-${id}`, createdAt: `17-04-${id}`,
          avatar: ''
      })
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}