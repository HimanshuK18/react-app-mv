import React, { useContext, useEffect, useState } from "react";
import { NotesContext, Action } from '../state/noteState';
import Dialog from '@mui/material/Dialog';
import './note.css';


type Note = {
  id?: number;
  lat: number;
  lng: number;
  note: string;
  username: string;
}
export type NoteProps = {
  lat: number,
  lng: number,
  Opened: boolean,
  close: () => void
}

const NoteAddComponent: React.FC<NoteProps> = (props: NoteProps) => {
  let formData: Note = {
    "lat": 0,
    "lng": 0,
    "note": "",
    "username": ""
  };
  const { dispatch } = useContext(NotesContext);
  let [noteData, setNoteDate] = useState(formData);
  let [dialogOpen, setDailogOpen] = useState(props.Opened);

  useEffect(() => {
    setDailogOpen(props.Opened);
  }, [props.Opened]);

  const handleNoteData = (e: any) => {
    e.preventDefault();
    handleClose();
    const dispatchObject: Action = {
      type: 'save',
      payload: noteData
    };
    props.close();
    setNoteDate(formData);
    dispatchObject.payload.lat = props.lat;
    dispatchObject.payload.lng = props.lng;
    
    dispatch(dispatchObject);
  };

  const setData = (name: string, value: string) => {
    setNoteDate({ ...noteData, [name]: value });
  }
  const handleClose = () => {
    setDailogOpen(false);
  };

  return (<>
    <Dialog open={dialogOpen} onClose={handleClose}>
      <div className="add-note-container" data-testid='note-add'>
        <h3 className="add-note-title">Add Note</h3>
        <div className="form-container">
          <div className="form-row">
            <label htmlFor="note" className="form-label">Add Note: </label>
            <input data-testid="note-input" type="text" required id="note" pattern="[A-Za-z]"
              onChange={(event) => setData('note', event.target.value)} title="Please enter text value" className="form-input" />
          </div>
          <div className="form-row">
            <label htmlFor="username" className="form-label">User Name: </label>
            <input data-testid="username-input" type="text" required id="username" pattern="[A-Za-z]"
              onChange={(event) => setData('username', event.target.value)} title="Please enter text value" className="form-input" />
          </div>
        </div>
        <div className="divButton">
          <button data-testid="Button-Save" className="save-button" onClick={handleNoteData}>Save</button>
        </div>
      </div>
    </Dialog>
  </>);
};

export default NoteAddComponent;
export type { Note };
