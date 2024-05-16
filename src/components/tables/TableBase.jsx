import Link from 'next/link'
import { resetThreadId, saveThreadId } from '@/lib/slices/threadSlice/threadSlice'
import { useDispatch } from 'react-redux'

export const TableBase = ({ type, data }) => {
  const commentsHeader = ['ID', 'Author', 'Text', 'Date', 'Actions'];
  const threadsHeader = ['ID', 'Author', 'Title', 'Date', 'Actions'];
  const usersHeader = ['ID', 'Username', 'First Name', 'Last Name', 'Role', "isBanned", 'Registration Date', 'Actions'];

  const dispatch = useDispatch();
  const commentsData =(type==="comments") ? data.map(item => ({
    id: item.id,
    author: item.author?.username,
    text: item.text,
    date: item.date.substring(0, 10),
    actions: [ 'Delete']
  })) : [];


  const threadsData =(type==="threads") ? data.map(data => ({
      id: data.id,
      author: data.author?.username,
      title: data.title,
      date: data.date.substring(0, 10),
      actions: ['Show',  'Delete']
    })
  ) : [];

  const usersData =(type==="users") ? data.map(data => ({
    id: data.id,
    username: data.username,
    firstName: data.firstName,
    lastName: data.lastName,
    role: data.role.name,
    isBanned: data.enabled ? 'No' : 'Yes',
    registrationDate: data.registered_at.substring(0, 10),
    actions: [ data.role.name === "USER" ? 'Make Moderator':'Make User',  data.enabled ? 'Ban' : 'Unban']
  })
) : [];
  console.log("Data", data)
  const onDeleteClick = (id, type) => {
    if (type === 'threads') {
      fetch(`http://localhost:8080/thread/moderator/${id}/delete`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('accessToken') ? `Bearer ${localStorage.getItem('accessToken')}` : '',
        },
      }).then(response => {
        if (!response.status !== 204) {
          console.log('Помилка при видаленні коментаря')
        } else {
          return response.json()
        }
      }).then(data => {
        console.log(data)
      }).catch(error => {
        console.error('Error fetching data:', error)
      })
    } else if (type === 'comments') {
      fetch(`http://localhost:8080/comment/moderator/${id}/delete`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('accessToken') ? `Bearer ${localStorage.getItem('accessToken')}` : '',
        },
      }).then(response => {
        if (!response.status !== 204) {
          console.log('Помилка при видаленні коментаря')
        } else {
          return response.json()
        }
      }).then(data => {
        console.log(data)
      }).catch(error => {
        console.error('Error fetching data:', error)
      })
    }
  }

  const onBanClick = (id) => {
    fetch(`http://localhost:8080/users/admin/${id}/ban`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('accessToken') ? `Bearer ${localStorage.getItem('accessToken')}` : '',
      },
    }).then(response => {
      if (!response.status !== 204) {
        console.log('Помилка при бані')
      } else {
        return response.json()
      }
    }).then(data => {
      console.log(data)
    }).catch(error => {
      console.error('Error fetching data:', error)
    })
  }

  const onUnbanClick = (id) => {
    fetch(`http://localhost:8080/users/admin/${id}/unban`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('accessToken') ? `Bearer ${localStorage.getItem('accessToken')}` : '',
      },
    }).then(response => {
      if (!response.status !== 204) {
        console.log('Помилка при розбані')
      } else {
        return response.json()
      }
    }).then(data => {
      console.log(data)
    }).catch(error => {
      console.error('Error fetching data:', error)
    })
  }

  const onMakeModeratorClick = (id) => {
    fetch(`http://localhost:8080/users/admin/${id}/set_moderator`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('accessToken') ? `Bearer ${localStorage.getItem('accessToken')}` : '',
      },
    }).then(response => {
      if (!response.status !== 204) {
        console.log('Виникла помилка')
      } else {
        return response.json()
      }
    }).then(data => {
      console.log(data)
    }).catch(error => {
      console.error('Error fetching data:', error)
    })
    }


  const onMakeUserClick = (id) => {
    fetch(`http://localhost:8080/users/admin/${id}/set_user`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('accessToken') ? `Bearer ${localStorage.getItem('accessToken')}` : '',
      },
    }).then(response => {
      if (!response.status !== 204) {
        console.log('Виникла помилка')
      } else {
        return response.json()
      }
    }).then(data => {
      console.log(data)
    }).catch(error => {
      console.error('Error fetching data:', error)
    })
  }

  const preFetchThread = (id) => {
    dispatch(resetThreadId())
    dispatch(saveThreadId(id))


  }

  const dataToShow = type === 'comments' ? commentsData : type === 'threads' ? threadsData : usersData;
  const headerData = type === 'comments' ? commentsHeader : type === 'threads' ? threadsHeader : usersHeader;

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
              {row.actions.map((action, index) => {
                if (action === 'Delete') {
                  return <button key={index} onClick={() => onDeleteClick(row.id, type)}
                                 className="text-primary  hover:bg-primary hover:text-[#000]">{action}</button>;
                } else if (action === 'Ban') {
                  return <button key={index} onClick={() => onBanClick(row.id)}
                                 className="text-primary  hover:bg-primary hover:text-[#000]">{action}</button>;
                } else if (action === 'Unban') {
                  return <button key={index} onClick={() => onUnbanClick(row.id)}
                                 className="text-primary  hover:bg-primary hover:text-[#000]">{action}</button>;
                }
                else if (action==='Show') {
return <Link href={`/thread/${row.id}`} key={index}>
                    <a onClick={() => preFetchThread(row.id)}
                       className="text-primary  hover:bg-primary hover:text-[#000]">{action}</a>
                  </Link>;
                }



                  else if (action === 'Make Moderator') {
                  return <button key={index} onClick={() => onMakeModeratorClick(row.id)}
                                 className="text-primary  hover:bg-primary hover:text-[#000]">{action}</button>;
                } else if (action === 'Make User') {
                  return <button key={index} onClick={() => onMakeUserClick(row.id)}
                                 className="text-primary  hover:bg-primary hover:text-[#000]">{action}</button>;
                } else {
                  return null;
                }
              })}
            </td>
          )}
        </tr>
      ))}
      </tbody>
    </table>
  )
}
