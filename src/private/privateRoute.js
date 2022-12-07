import { Outlet, useHistory } from "react-router-dom"
const PrivateRoute = ({ children }) => {
  let { user } = useAuth()
  history = useHistory()
  return user ? <Outlet /> : <Navigate to="/"></Navigate>
}
export default PrivateRoute
