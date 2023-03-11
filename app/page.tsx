import data from './data.json'

export const dynamic = 'force-dynamic'

export default async function Home({ searchParams }: { searchParams: { search: string } }) {
  const { data: tableData } = data

  const searchString = searchParams.search

  const filteredData = tableData.filter((data) => data.name.includes(searchString))

  return (
    <main className="p-12">
      <section className="mt-12">
        <div className="relative overflow-x-auto min-w-[32rem]">
          <table className="w-full text-sm text-left text-gray-50">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3"
                >
                  Id
                </th>
                <th
                  scope="col"
                  className="px-6 py-3"
                >
                  Name
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {filteredData.map((data) => (
                <tr
                  key={data.id}
                  className="bg-white border-b"
                >
                  <td className="px-6 py-4">{data.id}</td>
                  <td className="px-6 py-4">{data.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}
