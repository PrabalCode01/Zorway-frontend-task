import React,{useState} from 'react'

import './TimeTable.css'
import Table from './TableComponents/Table'
import { Modal } from './TableComponents/Modal'




const Timetable = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [rows, setRows] = useState([
      
    ]);
  


const [rowToEdit, setRowToEdit] = useState(null);

const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };


const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };



const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };


  return (
    <div className='styletable'>
        <span className='header'>ECE Sec1</span>
     <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow}/>
     <button onClick={() => setModalOpen(true)} className="btn">
        Edit
      </button>
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </div>
  )
}

export default Timetable
