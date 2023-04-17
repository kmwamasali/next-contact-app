import Image from 'next/image'
import { Inter } from 'next/font/google'
import useSwr from 'swr'
import Link from 'next/link'
import type { Contact } from '../interfaces'

const inter = Inter({ subsets: ['latin'] })

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Home() {
  const { data, error, isLoading } = useSwr<Contact[]>('/api/usersapi/v1/contacts', fetcher)

  if (error) return <div>Failed to load users</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return null
   
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        {data.map((contact) => (
          <Link
            key={contact.id}
            href="/user/"
            target=""
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              {contact.name}
            </h2>
            <p className={inter.className}>
              {contact.avatar}
            </p>
          </Link>
        ))}
      </div>
    </main>
  )
}
