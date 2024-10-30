// Functional Component

import React from 'react';

export default function StudentForm({ toogleModal, student, onChange, onSubmit, isEdit }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{isEdit ? 'Edit Student' : 'Form New Student'}</h5>
          <button 
          type="button" 
          className="btn-close" 
          data-bs-dismiss="modal" 
          aria-label="Close" 
          onClick={() => toogleModal(isEdit)}
          ></button>
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form label">
                Student Name
              </label>
              <input type="text" name="name" id="name" className="form-control" value={student.name} onChange={onChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="nim" className="form label">
                NIM
              </label>
              <input type="text" name="nim" id="nim" className="form-control" inputMode="numeric" value={student.nim} onChange={onChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="birthDate" className="form label">
                Birth Date
              </label>
              <input type="date" name="birthDate" id="birthDate" className="form-control" value={student.birthDate} onChange={onChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form label">
                Address
              </label>
              <textarea name="address" id="address" className="form-control" value={student.address} onChange={onChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="guardianName" className="form label">
                Guardian Name
              </label>
              <input type="text" name="guardianName" id="guardianName" className="form-control" value={student.guardianName} onChange={onChange} />
            </div>
          </form>
        </div>
        <div className="modal-footer mt-5">
          {isEdit ? (
            <button type="button" className="btn btn-warning" onClick={onSubmit}>
              <i className="bi bi-pencil-square"></i> Update
            </button>
          ) : (
            <button type="button" className="btn btn-primary" onClick={onSubmit}>
              <i className="bi bi-save"></i> Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
