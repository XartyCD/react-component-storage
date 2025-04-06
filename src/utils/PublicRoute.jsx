import { Outlet } from "react-router-dom"
import NavigateMenu from "../example-components/NavigateMenu/NavigateMenu.jsx"

const PublicRoutes = () => {
  return (
    <div>
      <NavigateMenu />
      <Outlet />
    </div>
  )
}

export default PublicRoutes
