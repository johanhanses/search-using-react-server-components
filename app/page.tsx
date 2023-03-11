import data from './data.json'

export default async function Home({ searchParams }: { searchParams: { search: string } }) {
  const { data: tableData } = data

  const filteredData =
    tableData.filter((data) => data.name.toLowerCase().includes(searchParams.search.toLowerCase()))
      .length > 0
      ? tableData.filter((data) =>
          data.name.toLowerCase().includes(searchParams.search.toLowerCase())
        )
      : tableData

  return (
    <main className="w-full">
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
