import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { PostList } from "../components/posts/PostList"
import { PostDetails } from "../components/posts/PostDetails"
import { TagsList } from "../components/tags/TagsList"
import { CategoriesList } from "../components/categories/CategoryList"
import { Categories } from "../components/categories/Categories"
import { CategoryForm } from "../components/categories/CategoryForm"
import { CategoryEdit } from "../components/categories/CategoryEdit"
import { UserList } from "../components/users/userList"
import { Users } from "../components/users/users"
import { UserDetails } from "../components/users/userDetails"
import { CommentList } from "../components/comments/CommentList"
import { CommentForm } from "../components/comments/CommentForm"
import { UpdateCommentForm } from "../components/comments/UpdateComment"

export const ApplicationViews = ({ token, setToken }) => {
  return <>
    <Routes>
      <Route path="/login" element={<Login setToken={setToken} />} />
      <Route path="/register" element={<Register setToken={setToken} />} />
      <Route element={<Authorized token={token} />}>
        {/* Add Routes here */}
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:postId" element={<PostDetails />} />
        <Route path="/categories" element={<CategoriesList />} />
        <Route path="/category/new" element={<CategoryForm />} />
        <Route path="/categories/:catId" element={<Categories />} />
        <Route path="/categories/:catId/edit" element={<CategoryEdit />} />
        <Route path="/tags" element={<TagsList />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:userId" element={<UserDetails />} />
        <Route path="/comments" element={<CommentList />} />
        <Route path="/comments/new" element={<CommentForm />} />
        <Route path="/comments/edit/:commentId" element={<UpdateCommentForm />} />
      </Route>
    </Routes>
  </>
}
