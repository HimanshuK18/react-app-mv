/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NoteAddComponent, { Note } from './Note';

const props = {
    lat: 0,
    lng: 0,
    Opened: false,
    close: jest.fn()
};


const notes: Note[] = [
    { id: 1, lat: 37.7749, lng: -122.4194, note: 'Note 1', username: 'User 1' },
    { id: 2, lat: 34.0522, lng: -118.2437, note: 'Note 2', username: 'User 2' }
];

describe('NoteAddComponent', () => {
    it('should render correctly', () => {
        const mockNotesContextValue = {
            notesSaved: notes,
        };
        jest.spyOn(React, "useContext").mockReturnValue(mockNotesContextValue);
        const { getByTestId } = render(<NoteAddComponent {...props} />);
        expect(getByTestId('note-add')).toBeTruthy();

    });

    it('should update noteData based on input', async () => {
        const props = {
            lat: 0,
            lng: 0,
            Opened: true,
            close: jest.fn()
        };
        render(<NoteAddComponent {...props} />);

        const noteInput = screen.getByTestId('note-input') as HTMLInputElement;
        const usernameInput = screen.getByTestId('username-input') as HTMLInputElement;

        fireEvent.change(noteInput, { target: { value: 'hello world' } });
        fireEvent.change(usernameInput, { target: { value: 'johndoe' } });

        expect(noteInput.value).toEqual('hello world');
        expect(usernameInput.value).toEqual('johndoe');
    });

    it('should trigger close and dispatch actions when save button is clicked', async () => {
        const props = {
            lat: 37.7749,
            lng: -122.4194,
            Opened: true,
            close: jest.fn()
        };
        const dispatch = jest.fn();

        jest.spyOn(React, 'useContext').mockImplementation(() => ({ dispatch }));

        render(<NoteAddComponent {...props} />);

        const noteInput = screen.getByTestId('note-input');
        const usernameInput = screen.getByTestId('username-input');
        const saveButton = screen.getByTestId('Button-Save');

        fireEvent.change(noteInput, { target: { value: 'hello world' } });
        fireEvent.change(usernameInput, { target: { value: 'johndoe' } });
        fireEvent.click(saveButton);

        expect(props.close).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
            type: 'save',
            payload: {
                lat: 37.7749,
                lng: -122.4194,
                note: 'hello world',
                username: 'johndoe'
            }
        });
    });
});
