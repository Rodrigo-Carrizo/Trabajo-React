import "./Item.css"

const Item = ({ producto }) => {
    return (
        <li width="200" className="product">
            <img alt={producto.title} src={producto.image} widht="200"/>
            <h1>{producto.title}</h1>
            <h1>{producto.category}</h1>
            <h1>{producto.description}</h1>          
        </li>
    );
};

export default Item;