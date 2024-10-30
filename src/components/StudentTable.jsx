// Stateless Component

import React from 'react';

export default function StudentTable({ toogleModalForm, toogleModalDetail, students, handleEditStudent, handleDeleteStudent, }) {
  return (
    <div className="table-responsive">
      <table className="table caption-top table-bordered table-hover">
        <caption>List of Students</caption>
        <thead>
          <tr>
            <th scope="col" className="px-3" colSpan="4">
              <button onClick={() => toogleModalForm(false)} className="btn btn-primary float-end fw-bold">
                <i className="bi bi-plus-circle"></i> Add New
              </button>
            </th>
          </tr>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">NIM</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{student.name}</td>
              <td>{student.nim}</td>
              <td>
                <button onClick={() => handleDeleteStudent(index)} className="btn btn-outline-danger btn-sm float-end">
                  <i className="bi bi-trash"></i>
                </button>
                <button 
                onClick={() => handleEditStudent(student, index)} 
                className="btn btn-outline-warning btn-sm mx-2 float-end"
                >
                  <i className="bi bi-pencil"></i>
                </button>
                <button 
                onClick={() => toogleModalDetail(student)} 
                className="btn btn-outline-primary btn-sm float-end"
                >
                  <i className="bi bi-info-circle"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
