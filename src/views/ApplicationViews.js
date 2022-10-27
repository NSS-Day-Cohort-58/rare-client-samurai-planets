import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { Posts } from "../components/posts/Posts"
import { PostDetails } from "../components/posts/PostDetails"

export const ApplicationViews = ({ token, setToken }) => {
  return <>
    <Routes>
      <Route path="/login" element={<Login setToken={setToken} />} />
      <Route path="/register" element={<Register setToken={setToken} />} />
      <Route element={<Authorized token={token} />}>
        {/* Add Routes here */}
        <Route path="/posts" element={<Posts setToken={setToken} />} />
        <Route path="post/:postId" element={<PostDetails setToken={setToken} />} />
      </Route>
    </Routes>
  </>
}
