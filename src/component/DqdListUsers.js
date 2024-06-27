import React from 'react'

export default function DqdListUsers({renderDqdListUsers}) {
  console.log("DqdListUsers",renderDqdListUsers);
  //hien thi du lieu
  let dqdElementUser = renderDqdListUsers.map((dqdUser,index)=>{
    return(
      <>
      <tr>
        <td>{dqdUser.id}</td>
        <td>{dqdUser.UserName}</td>
        <td>{dqdUser.Password}</td>
        <td>{dqdUser.Phone}</td>
        <td>{dqdUser.Email}</td>
        <td>...</td>
      </tr>
      </>
    )
  })
  return (
    <div className='row'>
      <div className='col-md-12'>
      <table className='table table-bordered'>
        <thead>
            <tr>
                <th> Id</th>
                <th> UserName </th>
                <th> Password </th>
                <th> Email </th>
                <th> Phone </th>
                <th> Chuc Nang </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
      </table>
      </div>
      
    </div>
  )
}
