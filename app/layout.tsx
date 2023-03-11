import './globals.css'
import { SearchForm } from './search-form'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-center items-center max-w-xl mx-auto">
        <SearchForm />
        {children}
      </body>
    </html>
  )
}

export const dynamic = 'force-dynamic'
