import './globals.css'
import { SearchForm } from './search-form'

export const metadata = {
  title: 'Johan Hanses | Search in React server component',
  description: 'Built using React 18 and Next 13 app-dir'
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
