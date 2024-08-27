import { createContext, useContext, useEffect, useState } from "react";

export const CategoryContext = createContext();

const CategoryContextProvider = ({ children }) => {
  const [categoryData, setCategoryData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all'); // La catégorie par défaut

  const fetchCategoryData = async () => {
    try {
      const response = await fetch(`https://api.example.com/category/${selectedCategory}`);
      const data = await response.json();
      console.log(data)
      setCategoryData(data);
    } catch (error) {
      console.error('Failed to fetch category data:', error);
    }
  };

  useEffect(() => {
    fetchCategoryData();
  }, [selectedCategory]);

  const contextValue = {
    categoryData,
    selectedCategory,
    setSelectedCategory
  };

  return (
    <CategoryContext.Provider value={contextValue}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContextProvider;
