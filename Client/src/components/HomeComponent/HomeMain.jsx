import NavBar from "./NavBar";

function HomeMain() {
  return (
    <>
      <div className="bg-gradient-to-tl from-violet-300 ">
        <NavBar />
        <div className="container mx-auto py-8">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-violet-100 table-auto rounded-lg border-gray-100">
              <thead className=" align-middle items-center justify-center ">
                <tr>
                  <th className="border rounded-lg border-gray-400 px-4  text-center py-2 bg-gray-50  ">
                    Company
                  </th>
                  <th className="border border-gray-400 px-4 py-2 bg-gray-50 text-center">
                    Job Position
                  </th>
                  <th className="border border-gray-400 px-4 py-2 bg-gray-50 text-center">
                    Location
                  </th>
                  <th className="border border-gray-400 px-12 py-2 bg-gray-50 text-center">
                    Application Link
                  </th>
                  <th className="border border-gray-400 px-4 py-2 bg-gray-50 text-center">
                    Description
                  </th>
                  <th className="border border-gray-400 px-4 py-2 bg-gray-50 text-center">
                    Salary
                  </th>
                  <th className="border border-gray-400 px-4 py-2 bg-gray-50 text-center">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 5 }).map((_, rowIndex) => (
                  <tr key={rowIndex} className="hover:bg-gray-100">
                    {Array.from({ length: 7 }).map((_, colIndex) => (
                      <td
                        key={colIndex}
                        className="border border-gray-300 px-4 py-2"
                      >
                        Row {rowIndex + 1}, Cell {colIndex + 1}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeMain;
