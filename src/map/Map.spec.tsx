/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MapComponent from './map';
import { Note } from '../note/Note';

global.fetch = jest.fn();

jest.mock('react-error-boundary');
const notes: Note[] = [
  { id: 1, lat: 37.7749, lng: -122.4194, note: 'Note 1', username: 'User 1' },
  { id: 2, lat: 34.0522, lng: -118.2437, note: 'Note 2', username: 'User 2' }
];
const currentLocation = { lat: 37.7749, lng: -122.4194 };


const setOpen = jest.fn();
beforeEach(() => {
  setOpen.mockClear();
});

describe('MapComponent', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders MapComponent correctly', () => {
    const { getByTestId } = render(
      <MapComponent notes={notes} currentLocation={currentLocation} />
    );
    const mapComponent = getByTestId('map-component');
    expect(mapComponent).toBeInTheDocument();
    const searchComponent = getByTestId('search-component');
    expect(searchComponent).toBeInTheDocument();
    const addButton = getByTestId('add-note-button');
    expect(addButton).toBeInTheDocument();
  });

  it('calls addnew function when "Add Note" button is clicked', () => {
    const { getByText } = render(
      <MapComponent notes={notes} currentLocation={currentLocation} />
    );
    const addNoteButton = getByText('Add Note');
    fireEvent.click(addNoteButton);
    expect(setOpen).toHaveBeenCalledTimes(1);
    expect(setOpen).toHaveBeenCalledWith(true);
  });

});
