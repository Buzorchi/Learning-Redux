import ProductPage from "./pages/ProductPage"
import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from "react-router-dom"
import './App.css'
import './index.css'
import StoreList from "./pages/StoreList"
import CategoryList from "./pages/CategoryList"
import CategoryPage from "./pages/CategoryPage"
import ProductDetailsPage from "./pages/ProductDetailsPage"

const router = createBrowserRouter(


  createRoutesFromElements(
    <>
    <Route path="/" element={<ProductPage/>} />
    <Route path="/storelist" element={<StoreList/>} />
    <Route path="/categorylist" element={<CategoryPage/>} />
    <Route path="categorylist" element={<CategoryList/>}/>
    <Route path="/product/:id" element={<ProductDetailsPage/>}></Route>

    </>
  )
)

function App(){
  return (
    <>
    <RouterProvider router={router}/>
    </>
 
  )
}

export default App