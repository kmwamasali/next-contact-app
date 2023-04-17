// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { Contact } from '../../interfaces'

const contacts: Contact[] = [{ "createdAt": "2023-02-02T17:44:01.066Z", "name": "Mr. Swangie 18", "avatar": "https://cdn.shopify.com/s/files/1/0697/8715/products/ds_inflatable_swan_1_1200x1200.jpg?v=1522145276", "email": "aosdjaisjd@sda.com", "phone": "234567891", "birthday": "2014-01-28T00:00:00.000Z", "id": "129", "intent": "update" },
{ "createdAt": "2023-02-12T13:12:08.303Z", "name": "Why Horse - cause I like horses", "avatar": "https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?cs=srgb&dl=pexels-helena-lopes-1996333.jpg&fm=jpg", "email": "somethingnotemail@asd.com", "phone": "1223424234", "birthday": "2019-06-04", "id": "133" }]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Contact[]>
) {
  res.status(200).json(contacts)
}
