// Stateful component
import React, { Component } from 'react';
import StudentTable from '../components/StudentTable';
import StudentForm from '../components/StudentForm';
import StudentDetail from '../components/StudentDetail';

export default class StudentContainer extends Component {
  state = {
    modalForm: false,
    modalDetail: false,
    isEdit: false,
    editedStudent: null,
    students: [
        {
            name: 'Achmad Zahrul Ali Zadan',
            nim: '123123',
            birthDate: "",
            address: 'Jl. Jenderal',
            guardianName: 'Siti',
        },
        {
            name: 'abc',
            nim: '234',
            birthDate: "",
            address: 'Jl. Matahari',
            guardianName: 'Lala',
        }
    ],
    currentStudent: {
        name: "",
        nim: '',
        birthDate: "",
        address: "",
        guardianName: "",
    },
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState)=> ({
        currentStudent: {
            ...prevState.currentStudent,
            [name]: value,
        },
    }));
  }

  toogleModalForm = (isEdit = false) => {
    this.setState({ isEdit: isEdit, modalForm: !this.state.modalForm });
  };

  handleEditStudent = (student, index) => {
    this.setState({ modalForm: !this.state.modalForm, isEdit: true, currentStudent: student, editedStudent: index });
  }

  toogleModalDetail = () => {
    this.setState({ modalDetail: !this.state.modalDetail });
  };

  handleDeleteStudent = (index) => {
    const data = this.state.students;
    const newStudents = data.slice(0, index).concat(data.slice(index + 1));
    this.setState((prevState) => ({
        students: newStudents,
    }));
  }

  handleInfoStudent = (student) =>{
    this.setState({ currentStudent: student });
    this.toogleModalDetail();
  }

  handleAddOrUpdateStudent = () => {
    const { currentStudent, isEdit } = this.state;

    if(isEdit) {
        const index = this.state.editedStudent;
        const updateStudents = [...this.state.students];
        console.log(index, updateStudents);
        updateStudents[index] = currentStudent;
        this.setState({ students: updateStudents });
    }else{
        this.setState((prevState) => ({
            students: [...prevState.students, currentStudent],
        }));
    }
    this.setState({ currentStudent: {
        name: "",
        nim: '',
        birthDate: "",
        address: "",
        guardianName: "",
    }});
    this.toogleModalForm(this.state.isEdit);
  };

  render() {
    return (
      <>
        <StudentTable 
        students={this.state.students} 
        handleEditStudent={this.handleEditStudent}
        toogleModalForm={this.toogleModalForm} 
        toogleModalDetail={this.handleInfoStudent} 
        handleDeleteStudent={this.handleDeleteStudent}
        />
        {this.state.modalForm && 
        <StudentForm 
        isEdit={this.state.isEdit}
        onSubmit={this.handleAddOrUpdateStudent}
        onChange={this.handleInputChange}
        toogleModal={this.toogleModalForm} student={this.state.currentStudent} 
        />}
        {this.state.modalDetail && (
            <StudentDetail toogleModal={this.toogleModalDetail} student={this.state.currentStudent} />
        )}
      </>
    );
  }
}
