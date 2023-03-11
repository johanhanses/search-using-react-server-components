import data from './data.json'
import ResultTable from './result-table'

export default async function Home({ searchParams }: { searchParams: { search: string } }) {
  const { data: tableData } = data

  return (
    <main className="p-12">
      <ResultTable
        tableData={tableData}
        searchParams={searchParams}
      />
    </main>
  )
}
