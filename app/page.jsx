'use client';
import ListProducts from '@/components/products/listProducts';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get(`${process.env.API_URL}/api/products`);
        setProductsData(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getProducts();
  }, []);

  return <ListProducts data={productsData} />;
};

export default HomePage;
