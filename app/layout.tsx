import './globals.css'
import localFont from 'next/font/local';

import Navbar from './components/navbar.component'
import Footer from './components/footer.component'

const sourceSansPro = localFont({
  src: [
    {
      path: './fonts/SourceSansPro-ExtraLight.otf',
      weight: '200',
      style: 'normal'
    },
    {
      path: './fonts/SourceSansPro-Light.otf',
      weight: '300',
      style: 'normal'
    },
    {
      path: './fonts/SourceSansPro-Regular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/SourceSansPro-Semibold.otf',
      weight: '600',
      style: 'normal'
    },
    {
      path: './fonts/SourceSansPro-Bold.otf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './fonts/SourceSansPro-Black.otf',
      weight: '900',
      style: 'normal'
    },
  ],
  variable: '--font-source-sans-pro'
});

export const metadata = {
  title: 'Home | Community for Better Living',
  description: 'A 501c3 dedicated to improving our community',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sourceSansPro.variable}`}>
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
