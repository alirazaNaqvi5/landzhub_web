import { Navigate } from "react-router-dom";
import { useAuth } from "./useAuth"

export const ProtectedRoute = ({ children }) => {
  const {user} = useAuth();
//   console.log("user=================>",user.user);
  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};