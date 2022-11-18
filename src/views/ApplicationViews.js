import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { PostList } from "../components/posts/PostList"
import { PostDetails } from "../components/posts/PostDetails"
import { TagsList } from "../components/tags/TagsList"
import { Tags } from "../components/tags/Tags"
import { CategoriesList } from "../components/categories/CategoryList"
import { Categories } from "../components/categories/Categories"
import { UserList } from "../components/users/userList"

import { UserDetails } from "../components/users/userDetails"
import { PostForm } from "../components/posts/PostForm"

export const ApplicationViews = ({ token, setToken }) => {
  return <>
    <Routes>
      <Route path="/login" element={<Login setToken={setToken} />} />
      <Route path="/register" element={<Register setToken={setToken} />} />
      <Route element={<Authorized token={token} />}>
        {/* Add Routes here */}
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/new" element={<PostForm />} />
        <Route path="/posts/:postId" element={<PostDetails />} />
        <Route path="/categories" element={<CategoriesList />} />
        <Route path="/categories/:catId" element={<Categories />} />
        <Route path="/tags" element={<TagsList />} />
        <Route path="/tags/:tagId" element={<Tags />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:userId" element={<UserDetails />} />
      </Route>
    </Routes>
  </>
}
