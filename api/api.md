Rutas:

\*user:
get : "/currentuser" => Devuelve el usuario actual
get : "/login" => renderiza la vista "login"
post : "/login" => hace el login con los campos (user,password)
get: "/register" => renderiza la vista "register"
post : "/register" => hace el register con los campos (name,email,user,password)
get : "/logout" => desloguea al usuario

\*product:
get: "/products/{shop.id}" => devuelve todos los productos
post: "/addproduct/{shop.id}" => hace la funcion "addproduct" la cual es para insertar un producto con los campos (name,price,description,image,
category,amount) image es un arreglo que puedes poner hasta 3 imagenes, solo hay que hacer required una sola, las demás no son obligatorias
post: "/editproduct/{product.id}/{shop.id}" => edita el producto el cual debe de ser enviado por parametro(id)
delete: "/deleteproduct/{product.id}/{shop.id}" => elimina el producto, del cual envias por parametro su id
delete: "/deleteopinionproduct/:id" =>elimina la opinion realizada por el usuario en cuestion
post: "/editopineproduct/:id" =>edita la opinion del producto
post: "/opineproduct/:id =>Opinar sobre el producto
post: "/assesmentproduct/:id" => valora el producto
get: "/mostsellers" => devuelve los 5 productos mas vendidos
get: "/recents" => devuelve los 5 ultimos añadidos
get: "/updateproducts" => devuelve los 5 ultimos actualizados

\*category:
get: "/allcategory" => devuelve en json las categorias para ser seleccionadas por el usuario
get: "/category" => renderiza la vista category y envia en json las categorias
get: "/addcategory" => renderiza la vista de añadir categoria
get: "/editcategory/:id" => renderiza la vista editcategory y envia un json de la categoria a editar
delete: "/removecategory/:id" => elimina la categoria enviada por parametro
post: "/editcategory/:id" => edita la categoria
post: "/addcategory" => añade una categoría (name)

\*Cestas:
get: "/basket/:id" => devuelve la cesta del usuario actual
get: "/addproductstobasket" => añade un producto a la cesta
delete: "/removeproductstobasket/:id" => borra de la cesta el producto enviado por parametro (id)
delete: "/removebasket/:id => borra la cesta enviada por paramtero (id)

\*Compras:
get: "/buys" => renderiza la vista de las compras hechas y envia las compras en un json
get: "/deliveredbuys/:id" => marca en entregada la compra pasada por parametro (id)
get: "/bestsellers" => envia en json los 10 productos mas vendidos

\*shop:
get: "/shops" => envia todas las tiendas
post: "/addshop" => anade una tienda
patch: "/editshop/{shop.id}" =>edita una tienda
get: "/editshop/{shop.id}" =>enviar una tienda
delete: "/deleteshop/{shop.id} => elimina una tienda
