/* eslint-disable jest/no-identical-title */
/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import Marker from './Marker';

describe('Marker Component', () => {
  it ('should render with currentType Marker', () => {
    const { getByTestId } = render(<Marker lat={0} lng={0} text="test message" username="user1" markerType="currentType" />);
    expect(getByTestId('current-map-marker')).toBeTruthy();
  });

  it ('should render with noteType Marker', () => {
    const { getByText } = render(<Marker lat={0} lng={0} text="test message" username="user1" markerType="noteType" />);
    expect(getByText('test message')).toBeTruthy();
  });
});
