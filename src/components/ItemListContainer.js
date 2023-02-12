import { useEffect, useState } from "react";
import ItemList from "../pages/ItemList/ItemList";
import { Form, useParams } from "react-router-dom";
import Loading from "./Loading/Loading";
import {
    getFirestone,
    getDocs,
    collection,
    query,
    where,
} from "firebase/firestone";

const ItemListContainer = () => {
    const [ products, setProducts ] = useState ([]);
    const { loading, setLoading } = useState (true);
    const { category } = useParams ();
    
    const getProducts = () => {
        const db = getFirestone();
        const queryBase = collection(db, "items");
        const querySnapshot = category
           ? query(queryBase, where("categoryId", "==", category))
           : queryBase;

           getDocs(querySnapshot)
             .then((response) => {
               const data = response.docs.map((doc) => {
                   return { id: doc.id, ...doc.data() };
               });
               setLoading(false);
               setProducts(data);
             })
             .catch((error) => console.log(error));
    };

    useEffect (() => {
        getProducts();
    }, [category]);
    
    return <div>{loading ? <Loading /> : <ItemList productos={products} />}</div>;
};

export default ItemListContainer;