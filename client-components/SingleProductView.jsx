import Image from "next/image"
import '@/client-components/client-components-styles/CartProduct.css'

function SingleProductView({ element }) {
    console.log(element);

    return (
        <div className="cart-product-box">
            <div className="imagen-box">
                <Image className="img-card" src={element.image} alt={element.title} width={100} height={100} />
            </div>
            <div className="info-cart-product">
                <div className="datos-cart-product single-products-datos">
                    <p className="description-card">Nombre: <i>{element.title}</i></p>
                    <p className="price-card">Precio: <i><strong>{element.price}</strong></i></p>
                    <p className="description-card">Descripcion: <i>{element.description}</i></p>
                    <p className="description-card">Categoria: <i>{element.category}</i></p>
                </div>
            </div>
        </div>
    )
}

export default SingleProductView