import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <>
      <header>App base layout</header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
