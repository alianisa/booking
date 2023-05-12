import { useState } from 'react'
import { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { Book, Room } from 'shared/types'
import { parseQuery, serializeQuery } from 'shared/lib'
import { bookRoom } from 'shared/api'
import { Booking, BookingAlert, BookingForm } from 'widgets'

type Props = {
  data: {
    book: Book
    room: Room
  }
  query: any
}

type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  comment: string
}

export default function BookingPage({ data, query }: Props) {
  const [alert, setAlert] = useState<any>(null)
  const { hotelId, roomId, checkInDate: queryCheckInDate, checkOutDate: queryCheckOutDate } = query
  const { checkInDate, checkOutDate, persons } = parseQuery(query)

  const onSubmit = async (formData: FormData) => {
    const bookData = {
      checkInDate: queryCheckInDate,
      checkOutDate: queryCheckOutDate,
      contacts: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
      },
      persons,
      comment: formData.comment,
    }
    const response = await bookRoom({ bookData, hotelId, roomId })
    setAlert(response)
  }

  const title = `Бронирование ${data.book.hotelName}`
  const hotelHref = {
    pathname: `/hotels/${hotelId}`,
    query: {
      ...serializeQuery({
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
        persons: persons,
      }),
    },
  }
  const searchHref = {
    pathname: '/search',
    query: {
      ...serializeQuery({
        city: data.book.city,
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
        persons: persons,
      }),
    },
  }

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <BookingAlert alert={alert} hotelHref={hotelHref} />
      <div className="mx-auto flex max-w-7xl flex-col py-5">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-2">
            <Link className="inline-flex w-fit cursor-pointer items-center gap-1 hover:text-red-500" href={searchHref}>
              <p className="text-lg">Гостиницы</p>
            </Link>
            <ChevronRightIcon className="h-5 w-5" />
          </div>
          <div className="flex items-center gap-2">
            <Link className="inline-flex w-fit cursor-pointer items-center gap-1 hover:text-red-500" href={hotelHref}>
              <p className="text-lg">{data.book.hotelName}</p>
            </Link>
            <ChevronRightIcon className="h-5 w-5" />
          </div>
          <p className="cursor-default text-lg">Бронирование</p>
        </div>
        <Booking checkInDate={checkInDate} checkOutDate={checkOutDate} persons={persons} data={data} />
        <BookingForm onSubmit={onSubmit} />
      </div>
    </>
  )
}

export async function getServerSideProps({ resolvedUrl, query }: GetServerSidePropsContext) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}${resolvedUrl}`)
  const data = await res.json()

  return { props: { data, query } }
}
