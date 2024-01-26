import React from 'react'
import { useSelector } from 'react-redux'

const CategoryList = () => {
  const categories = useSelector((state) => state.categories.categories);
  console.log(categories)
  return (
    <div>
      <p>{categories}</p>
    </div>
  )
}

export default CategoryList
