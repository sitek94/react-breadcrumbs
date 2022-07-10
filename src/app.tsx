import {PlayerStatsPage} from 'pages'
import {HomePage} from 'pages/home.page'
import {PlayerPage} from 'pages/player.page'
import {PlayersPage} from 'pages/players.page'
import {TeamPage} from 'pages/team.page'
import {TeamsPage} from 'pages/teams.page'
import {RouteObject, useRoutes} from 'react-router-dom'

import {AppLayout} from 'ui-kit/app-layout'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {index: true, element: <HomePage />},
      {
        path: 'teams',
        children: [
          {index: true, element: <TeamsPage />},
          {
            path: ':teamId',
            children: [
              {index: true, element: <TeamPage />},
              {
                path: 'players',
                children: [
                  {index: true, element: <PlayersPage />},
                  {
                    path: ':playerId',
                    children: [
                      {index: true, element: <PlayerPage />},
                      {
                        path: 'stats',
                        element: <PlayerStatsPage />,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]

function App() {
  return useRoutes(routes)
}

export default App
