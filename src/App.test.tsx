import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import * as showApiHandler from './service/api/showApiHandler';
import { Show } from './models/Show';
import { store } from './redux/store';
import { Provider } from 'react-redux';

test('renders main page', () => {
  render(
      <Provider store={store}>
        <App />
      </Provider>
  );
  const linkElement = screen.getByText(/Show List/i);
  expect(linkElement).toBeInTheDocument();
});

test('moves to show page', async () => {

  jest.spyOn(showApiHandler, 'getAllShows').mockResolvedValue(returnApi);

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/Show List/i);
  expect(linkElement).toBeInTheDocument();

  await waitFor(() => screen.getByRole('heading'));

  fireEvent.click(screen.getByText('Bad Girls'));

  const linkElementShowScreen = screen.getByText(/Step inside HMP Larkhall and meet the women of G-Wing, who've committed various offences that range from shoplifting to murder./);

  expect(linkElementShowScreen).toBeInTheDocument();
})

const returnApi: Show[] = [
  {
    id: 1308,
    image: {
      medium: "https://static.tvmaze.com/uploads/images/medium_portrait/7/18492.jpg",
      original: "https://static.tvmaze.com/uploads/images/original_untouched/7/18492.jpg"
    },
    name: "Bad Girls",
    description: "<p>Step inside HMP Larkhall and meet the women of G-Wing, who've committed various offences that range from shoplifting to murder. <b>Bad Girls</b> shows what life is like for these women in the 'inside world' and also shows the real-life problems (and maybe behaviour!) of the officers who watch them!</p>",
    shortDescription: "<p>Step inside HMP Larkhall and meet the women of ....... be behaviour!) of the officers who watch them!</p>",
    linkToReview: "https://www.tvmaze.com/shows/1308/bad-girls",
    score: 7.8
  }
]