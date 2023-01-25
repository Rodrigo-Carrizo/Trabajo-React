const ItemDetail = ({ product }) => {
    return (
        <div width="200" className="product">
            <img alt={product.title} src={product.image} widht="200"/>
            <h1>{product.title}</h1>
            <h2>{product.category}</h2>
            <h3>{product.description}</h3>          
        </div>
    );
};

export default ItemDetail;