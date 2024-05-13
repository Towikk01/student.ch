export const TableBase = ({ type, data }) => {
  const commentsHeader = ['ID', 'Author', 'Text', 'Date', 'Actions'];
  const threadsHeader = ['ID', 'Author',  'Date', 'Actions'];
  const usersHeader = ['ID', 'Username', 'First Name', 'Last Name', 'Registration Date', 'Actions'];

  const commentsData = data ? data.map(item => ({
    id: item.id,
    author: item.author?.username,
    text: item.text,
    date: item.date.substring(0, 10),
    actions: ['Show', 'Ban', 'Delete']
  })) : [];


  const threadsData = data ? data.map(data => ({
      id: data.id,
      author: data.author?.username,

      date: data.date.substring(0, 10),
      actions: ['Show', 'Ban', 'Delete']
    })
  ) : [];


  const dataToShow = type === 'comments' ? commentsData : threadsData;
  const headerData = type === 'comments' ? commentsHeader : threadsHeader;

  return (
    <table className="w-full">
      <thead>
      <tr className="bg-black-pearl/70 border-b-primary border-[1px] justify-center">
        <th className="text-primary text-center" colSpan={headerData.length}>
          {type.toUpperCase()}
        </th>
      </tr>
      <tr className="bg-black-pearl/70 ">
        {headerData.map((header, index) => (
          <th key={index} className="text-primary text-center border-b-primary border-[1px] ">{header}</th>
        ))}
      </tr>
      </thead>
      <tbody>
      {dataToShow.map((row, index) => (
        <tr key={index} className="bg-black-pearl/50 ">
          {Object.keys(row).map((key, index) => (
            key !== 'actions' &&
            <td key={index} className="text-primary text-center border-[1px] border-b-primary">{row[key]}</td>
          ))}
          {row.actions && (
            <td className="text-primary text-center flex flex-col gap-1 border-[1px] border-b-primary">
              {row.actions.map((action, index) => (
                <button key={index} className="text-primary  hover:bg-primary hover:text-[#000]">{action}</button>
              ))}
            </td>
          )}
        </tr>
      ))}
      </tbody>
    </table>
  )
}
