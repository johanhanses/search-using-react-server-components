import { TableData } from './interface'

interface ResultTableProps {
  tableData: TableData[]
  searchParams: any
}

export default function ResultTable({ tableData, searchParams }: ResultTableProps) {
  const searchString = searchParams.search
  console.log(searchString)

  const filteredData = tableData.filter((data) => data.name.includes(searchString))

  return (
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
  )
}
