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
import { PostEdit } from "../components/posts/PostEdit"
import { PostForm } from "../components/posts/PostForm"
import { CommentList } from "../components/comments/CommentList"
import { CommentForm } from "../components/comments/CommentForm"
import { UpdateCommentForm } from "../components/comments/UpdateComment"
import { AuthorDetails } from "../authors/AuthorDetails"
import { AuthorList } from "../authors/AuthorList"

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
        <Route path="/posts/:postId/edit" element={<PostEdit />} />
        <Route path="/categories" element={<CategoriesList />} />
        <Route path="/category/new" element={<CategoryForm />} />
        <Route path="/categories/:catId" element={<Categories />} />
        <Route path="/categories/:catId/edit" element={<CategoryEdit />} />
        <Route path="/tags" element={<TagsList />} />
        <Route path="/authors" element={<AuthorList />} />
        <Route path="/authors/:authorId" element={<AuthorDetails />} />
        <Route path="/comments" element={<CommentList />} />
        <Route path="/comments/new" element={<CommentForm />} />
        <Route path="/comments/edit/:commentId" element={<UpdateCommentForm />} />
      </Route>
    </Routes>
  </>
}
