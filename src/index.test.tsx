import { render, screen } from '@testing-library/react';
import { PrismThemeGithub } from '.';

describe('<PrismThemeGithub/>', () => {
  it('render', async () => {
    render(<PrismThemeGithub>Hello</PrismThemeGithub>);

    const elem = await screen.findByText('Hello');

    expect(elem.className).toBe('PrismThemeGithub');
  });
});
