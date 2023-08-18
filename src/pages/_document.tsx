import globalStyles from '@/utils/globalStyles'
import { Html, Head, Main, NextScript } from 'next/document'
import { useEffect } from 'react'



export default function Document() {

  useEffect(() => {
    globalStyles()
  }, [])

  return (
    <Html lang="en" className='bg-black'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
