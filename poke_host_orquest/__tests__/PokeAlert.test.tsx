import React from 'react';
import { render } from '@testing-library/react';
import PokeAlert from '@/components/PokeAlert/PokeAlert';

describe('PokeAlert component', () => {
  it('renders correctly when showAlert is true', () => {
    const onCloseAlert = jest.fn();
    const dataAlert = { message: 'Success', type: 'success' };

    const { getByText } = render(
      <PokeAlert showAlert={true} onCloseAlert={onCloseAlert} dataAlert={dataAlert} />
    );

    expect(getByText('Poke Alert!')).toBeInTheDocument();
    expect(getByText('Success')).toBeInTheDocument();
  });

  it('does not render when showAlert is false', () => {
    const onCloseAlert = jest.fn();
    const dataAlert = { message: 'Error', type: 'error' };

    const { queryByText } = render(
      <PokeAlert showAlert={false} onCloseAlert={onCloseAlert} dataAlert={dataAlert} />
    );

    expect(queryByText('Poke Alert!')).not.toBeInTheDocument();
    expect(queryByText('Error')).not.toBeInTheDocument();
  });


});
