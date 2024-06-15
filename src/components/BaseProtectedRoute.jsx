import { Navigate } from 'react-router-dom'

export default function BaseProtectedRoute({ allow, redirectPath = "/login", children }) {
    if (!allow) {
      return <Navigate to={redirectPath} />;
    }

    return children;
}