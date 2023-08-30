
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchComponent from './SearchNote';
import { Note } from '../note/Note';

const notes: Note[] = [
  { id: 1, lat: 37.7749, lng: -122.4194, note: 'Note 1', username: 'User 1' },
  { id: 2, lat: 34.0522, lng: -118.2437, note: 'Note 2', username: 'User 2' }
];

describe('SearchComponent', () => {
  it("displays the search component", () => {
    const mockNotesContextValue = {
      notesSaved: notes,
    };
    jest.spyOn(React, "useContext").mockReturnValue(mockNotesContextValue);
    const { getByTestId } = render(<SearchComponent />);
    expect(getByTestId('note-search')).toBeTruthy();
  });
  it('should render input fields for note and username', () => {
    const { getByPlaceholderText } = render(<SearchComponent />);
    const noteInput = getByPlaceholderText('Search Note');
    const usernameInput = getByPlaceholderText('Search User Name');
    expect(noteInput).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
  });

  it('should filter notes based on note input', () => {
    const mockNotesContextValue = {
      notesSaved: notes,
    };
    jest.spyOn(React, "useContext").mockReturnValue(mockNotesContextValue);
    const { getByText, getByPlaceholderText, queryByText } = render(<SearchComponent />);
    const noteInput = getByPlaceholderText('Search Note');
    fireEvent.change(noteInput, { target: { value: 'Note 1' } });
    const filteredNote = getByText('Note 1');

    expect(filteredNote).toBeInTheDocument();
    expect(queryByText('Note 2')).toBeNull();
  });

  it('should filter notes based on username input', () => {
    const mockNotesContextValue = {
      notesSaved: notes,
    };
    jest.spyOn(React, "useContext").mockReturnValue(mockNotesContextValue);
    const { getByText, getByPlaceholderText, queryByText } = render(<SearchComponent />);

    const usernameInput = getByPlaceholderText('Search User Name');
    fireEvent.change(usernameInput, { target: { value: 'User 1' } });

    const filteredNote = getByText('User 1');
    
    expect(filteredNote).toBeInTheDocument();
    expect(queryByText('User 2')).toBeNull();
  });
});