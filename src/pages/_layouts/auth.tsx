import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <>
      <header>Auth base layout</header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
