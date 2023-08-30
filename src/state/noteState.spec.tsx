/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { NoteContextProvider } from '../state/noteState';
import SearchComponent from '../search/SearchNote';


const renderWithNotesContext = (component: React.ReactElement) => {
  return render(
    <NoteContextProvider>
      {component}
    </NoteContextProvider>
  );
};


test('SearchComponent renders and filters based on note text input', () => {

  const notesSaved = [
    { id: 1, note: 'Note 1', username: 'User 1' },
    { id: 2, note: 'Note 2', username: 'User 2' },
    { id: 3, note: 'Note 3', username: 'User 3' },
  ];
  const mockNotesContextValue = {
    notesSaved: notesSaved,
  };
  jest.spyOn(React, "useContext").mockReturnValue(mockNotesContextValue);
  const { getByPlaceholderText, getByText, queryByText } = renderWithNotesContext(
    <SearchComponent />
  );
  const noteInput = getByPlaceholderText('Search Note');
  fireEvent.change(noteInput, { target: { value: 'Note 1' } });

  expect(getByText('Note 1')).toBeInTheDocument();
  expect(getByText('User 1')).toBeInTheDocument();

  expect(queryByText('Note 2')).toBeNull();
  expect(queryByText('Note 3')).toBeNull();
});

test('SearchComponent renders and filters based on username text input', () => {
  const notesSaved = [
    { id: 1, note: 'Note 1', username: 'User 1' },
    { id: 2, note: 'Note 2', username: 'User 2' },
    { id: 3, note: 'Note 3', username: 'User 3' },
  ];
  const mockNotesContextValue = {
    notesSaved: notesSaved,
  };
  jest.spyOn(React, "useContext").mockReturnValue(mockNotesContextValue);
  const { getByPlaceholderText, getByText, queryByText } = renderWithNotesContext(
    <SearchComponent />
  );
  const usernameInput = getByPlaceholderText('Search User Name');
  fireEvent.change(usernameInput, { target: { value: 'User 1' } });

  expect(getByText('Note 1')).toBeInTheDocument();
  expect(getByText('User 1')).toBeInTheDocument();

  expect(queryByText('Note 2')).toBeNull();
  expect(queryByText('Note 3')).toBeNull();
});
