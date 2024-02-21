import { Navigate, Route, Routes } from "react-router-dom"
import { SignInPage, SignUpPage } from "../pages"

export const AuthRoutes = () => {
  return (
      <Routes>
        <Route path="/signIn" element={<SignInPage />} />
        <Route path="/signUp" element={<SignUpPage />} />

        <Route path="/*" element={<Navigate to="/auth/signIn" />} />
      </Routes>
    )
}
