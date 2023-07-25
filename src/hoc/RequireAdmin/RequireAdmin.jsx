import { Navigate } from "react-router-dom"

const RequireAdmin = ({ children }) => {

    const user = JSON.parse(localStorage.getItem('user'))
    if (user?.role === 'admin') {
        return children
    }
    
    return <Navigate to='/404' />
}

export default RequireAdmin