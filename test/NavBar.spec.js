import { render, fireEvent } from '@testing-library/vue'
import NavBar from '~/components/NavBar/NavBar.vue'

describe('NavBar', () => {
  test('has Templates menu selected initially', () => {
    const { getByText } = render(NavBar)
    const templatesMenuItem = getByText('Templates')
    expect(templatesMenuItem).toHaveClass('selected')
  })

  test('has Leaderboard menu selected after clicked', async () => {
    const { getByText } = render(NavBar)
    const leaderboardMenuItem = getByText('Leaderboard')
    await fireEvent.click(leaderboardMenuItem)
    expect(leaderboardMenuItem).toHaveClass('selected')
  })

  test('has profile dropdown hidden initially', () => {
    const { getByText } = render(NavBar)
    const profileDropdown = getByText('View your profile')
    expect(profileDropdown).not.toBeVisible()
  })

  test('has profile dropdown visible once the avatar is clicked', async () => {
    const { getByText, getByTestId } = render(NavBar)
    const navBarAvatar = getByTestId('nav-bar-avatar')
    await fireEvent.click(navBarAvatar)
    const profileDropdown = getByText('View your profile')
    expect(profileDropdown).toBeVisible()
  })
})
