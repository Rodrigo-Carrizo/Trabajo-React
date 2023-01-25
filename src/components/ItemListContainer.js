import ItemCount from "./ItemCount";
import React, { useEffect, useState } from "react";
import ItemList from "../pages/ItemList/ItemList";
import { useParams } from "react-router-dom";

const arreglo = [
    { name: "producto 1", id: "soug" },
    { name: "producto 2", id: "souhg" },
    { name: "producto 3", id: "sougf" },
    { name: "producto 4", id: "sougr" },
    { name: "producto 5", id: "sougt" },
    { name: "producto 6", id: "sougy" },
]
const ItemListContainer = ({greeting}) => {
    const [ products, setProducts ] = useState ([]);
    const [filteredProducts, setFilteredProducts] = useState({});
    const { category } = useParams ();

const getProducts = fetch('https://fakestoreapi.com/products', {
    method: "GET",
    headers: {
        "conten-type": "json",
    },
});

//const getProduct = fetch('https://fakestoreapi.com/products/${idProducto}', {
//    method: "GET",
//});

//const addProduct = fetch('https://fakestoreapi.com/products',{
 //   method: "POST",
 //   body: JSON.stringify({
 //           title: 'test product',
 //           price: 13.5,
 //           description: 'lorem ipsum set',
 //           image: 'https://i.pravatar.cc',
 //           category: 'electronic'
 //       }),
//});
   
    useEffect (() => {
        getProducts
        .then ((res) => {
            return res.json();
        })
        .then((response) => {
            setProducts(response);
        })
        .catch((error) => console.log(error));
    }, []);

//    useEffect (() => {
//        getProduct
//        .then ((resp) => {
//            return resp.json()
//        })
//        .then((data) => {
//            setSingleProduct(data);
//        })
//        .catch((error) => {
//        console.log(error);
//    });
//}, []);

 //   useEffect (() => {
 //       addProduct
 //       .then (response => response.json())
 //       .then(productoCreado => {
 //           alert ("el id del producto creado es" + productoCreado.id);
 //           console.log(productoCreado)
 //       })
 //       .catch((error) => {
 //           console.log(error);
 //       });
 //   }, []);

    useEffect (() => {
        if(category) {
        const removeCharacters = category?.includes("%20") 
        ? category.replace("%20"," ") 
        : category;
        console.log(removeCharacters);
        const filterProducts = products.filter((product) => {
            return  product.category === removeCharacters;
        });
        setFilteredProducts(filterProducts);
        }
    }, [category]);
    
    return (
    <div>
        {greeting}
        <ItemCount />
        <ItemList productos={category ? filteredProducts : products} /> 
        <h1>Este es un producto especifico</h1> 
    </div>
    );
};

export default ItemListContainer;