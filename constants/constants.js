export const Provincias = [{
    "id": "1",
    "nombre": 'Pinar del Río',
    "municipios": ["Consolación del Sur", "Guane", "La Palma", "Los Palacios", "Mantua", "Minas de Matahambre", "Pinar del Río", "San Juan y Martínez", "San Luis", "Sandino", "Viñales"]
}, {
    "id": "2",
    "nombre": 'Artemisa',
    "municipios": [
        "Alquízar", "Artemisa", "Bauta", "Caimito", "Guanajay", "Güira de Melena", "Mariel", "San Antonio de los Baños", "Bahía Honda", "San Cristóbal", "Candelaria"]
}, {
    "id": "3",
    "nombre": 'Mayabeque',
    "municipios": ["Batabanó", "Bejucal", "Güines", "Jaruco", "Madruga", "Melena del Sur", "Nueva Paz", "Quivicán", "San José de las Lajas", "San Nicolás de Bari", "Santa Cruz del Norte"]
}, {
    "id": "4",
    "nombre": 'La Habana',
    "municipios": [
        "Arroyo Naranjo", "Boyeros", "Centro Habana", "Cerro", "Cotorro", "Diez de Octubre", "Guanabacoa", "Habana del Este", "Habana Vieja", "La Lisa", "Marianao", "Playa", "Plaza", "Regla", "San Miguel del Padrón"]
}, {
    "id": "5",
    "nombre": 'Matanzas',
    "municipios": ["Calimete", "Cárdenas", "Ciénaga de Zapata", "Colón", "Jagüey Grande", "Jovellanos", "Limonar", "Los Arabos", "Martí", "Matanzas", "Pedro Betancourt", "Perico", "Unión de Reyes"]
}, {
    "id": "6",
    "nombre": 'Cienfuegos',
    "municipios": ["Abreus", "Aguada de Pasajeros", "Cienfuegos", "Cruces", "Cumanayagua", "Palmira", "Rodas", "Santa Isabel de las Lajas"]

}, {
    "id": "7",
    "nombre": 'Villa Clara',

    "municipios": ["Caibarién", "Camajuaní", "Cifuentes", "Corralillo", "Encrucijada", "Manicaragua", "Placetas", "Quemado de Güines", "Ranchuelo", "Remedios", "Sagua la Grande", "Santa Clara", "Santo Domingo"]
}, {
    "id": "8",
    "nombre": 'Sancti Spíritus',
    "municipios": [
        "Cabaigúan", "Fomento", "Jatibonico", "La Sierpe", "Sancti Spíritus", "Taguasco", "Trinidad", "Yaguajay"]
}, {
    "id": "9",
    "nombre": 'Ciego de Ávila',
    "municipio": ["Ciro Redondo", "Baraguá", "Bolivia", "Chambas", "Ciego de Ávila", "Florencia", "Majagua", "Morón", "Primero de Enero", "Venezuela"]
}, {
    "id": "10",
    "nombre": 'Camagüey',
    "municipios": [
        "Camagüey", "Carlos Manuel de Céspedes", "Esmeralda", "Florida", "Guaimaro", "Jimagüayú", "Minas", "Najasa", "Nuevitas", "Santa Cruz del Sur", "Sibanicú", "Sierra de Cubitas", "Vertientes"]
}, {
    "id": "11",
    "nombre": 'Las Tunas',
    "municipios": [
        "Amancio Rodríguez", "Colombia", "Jesús Menéndez", "Jobabo", "Las Tunas", "Majibacoa", "Manatí", "Puerto Padre"]
}, {
    "id": "12",
    "nombre": 'Holguín',
    "municipios": [
        "Antilla", "Báguanos", "Banes", "Cacocum", "Calixto García", "Cueto", "Frank País", "Gibara", "Holguín", "Mayarí", "Moa", "Rafael Freyre", "Sagua de Tánamo", "Urbano Noris"]
}, {
    "id": "13",
    "nombre": 'Santiago de Cuba',
    "municipios": [
        "Contramaestre", "Guamá", "Julio Antonio Mella", "Palma Soriano", "San Luis", "Santiago de Cuba", "Segundo Frente", "Songo la Maya", "Tercer Frente"]
}, {
    "id": "14",
    "nombre": 'Guantánamo',
    "municipios": [
        "Baracoa", "Caimanera", "El Salvador", "Guantánamo", "Imías", "Maisí", "Manuel Tames", "Niceto Pérez", "San Antonio del Sur", "Yateras"]
}, {
    "id": "15",
    "nombre": 'Isla de la Juventud'
},
{
    "id": 16,
    "nombre": "Granma",
    "municipios": [
        "Bartolomé Masó", "Bayamo", "Buey Arriba", "Campechuela", "Cauto Cristo", "Guisa", "Jiguaní", "Manzanillo", "Media Luna", "Niquero", "Pilón", "Río Cauto", "Yara"]
}]

export const estadoInicialAdministrador = {
    id: '',
    nombre: '',
    tienda: '',
    usuario: '',
    contraseña: ''
}

export const estadoInicialCategoria = {
    categoria: '',
    tienda: '',
}

export const estadoInicialInfo = {
    tienda: '',
    servicios: '',
    ayuda: '',
    sobreNosotros: '',
    correo: '',
    direccion: '',
    telefono: '',
}

export const estadoInicialMaterial = {
    material: '',
    tienda: '',
}

export const estadoInicialProductos = {
    nombre: '',
    id: '',
    descripcion: '',
    tienda: '',
    categoria: '',
    material: '',
    precio: '',
    cantidad: '',
    fotos: []
}

export const estadoInicialTiendas = {
    id: '',
    nombre: '',
    administrador: '',
    usuario: '',
    contrasena: '',
    correo: '',
    provincia: ''
}

export const TABLA_ADMIN = {
    Nombre: '',
    Tienda: '',
    Usuario: '',
    Contraseña: ''
}

export const TABLA_TIENDAS = {
    Nombre: '',
    Administrador: '',
    Usuario: '',
    Contraseña: '',
    Provincia: ''
}

export const TABLA_PRODUCTOS = {
    Nombre: '',
    Categoria: '',
    Material: '',
    Precio: '',
    Cantidad: '',
}

export const ENDPIONTS = {
    tiendas: 'https://0m9fgs4l-5000.usw3.devtunnels.ms/shop/shops',
    material: 'https://0m9fgs4l-5000.usw3.devtunnels.ms/material/material',
    categoria: 'https://0m9fgs4l-5000.usw3.devtunnels.ms/category/category',
    agregar_tienda: 'https://0m9fgs4l-5000.usw3.devtunnels.ms/shop/addshop',
    editar_tienda: 'https://0m9fgs4l-5000.usw3.devtunnels.ms/shop/editshop',
    borrar_tienda: 'https://0m9fgs4l-5000.usw3.devtunnels.ms/shop/deleteshop',
    administradores: 'https://0m9fgs4l-5000.usw3.devtunnels.ms/shop/adminshops',
    editar_administradores: 'https://0m9fgs4l-5000.usw3.devtunnels.ms/user/updateuser',
    agregar_categoria: 'https://0m9fgs4l-5000.usw3.devtunnels.ms/category/addcategory',
    agregar_material: 'https://0m9fgs4l-5000.usw3.devtunnels.ms/material/addmaterial',
    agregar_informacion: 'https://0m9fgs4l-5000.usw3.devtunnels.ms/information/addinformation',
    editar_informacion: 'https://0m9fgs4l-5000.usw3.devtunnels.ms/information/editinformation',
    traerInfoTienda: 'https://0m9fgs4l-5000.usw3.devtunnels.ms/information/information',
    traer_una_tienda: 'https://0m9fgs4l-5000.usw3.devtunnels.ms/shop/shop',
    agregar_producto: 'https://0m9fgs4l-5000.usw3.devtunnels.ms/product/addproduct',
    editar_producto: 'https://0m9fgs4l-5000.usw3.devtunnels.ms/product/editproduct',
    material_por_tienda: 'https://0m9fgs4l-5000.usw3.devtunnels.ms/material/material',
    categoria_por_tienda: 'https://0m9fgs4l-5000.usw3.devtunnels.ms/category/category',
    producto_por_tienda: 'https://0m9fgs4l-5000.usw3.devtunnels.ms/product/products',
    obtener_un_producto: 'https://0m9fgs4l-5000.usw3.devtunnels.ms/product/product',
    obtener_producto: 'https://0m9fgs4l-5000.usw3.devtunnels.ms/product',
    obtener_un_material: 'https://0m9fgs4l-5000.usw3.devtunnels.ms/material',
    obtener_una_categoria: 'https://0m9fgs4l-5000.usw3.devtunnels.ms/category',
    eliminarProducto: 'https://0m9fgs4l-5000.usw3.devtunnels.ms/product/deleteproduct',
    eliminarCategoria: 'https://0m9fgs4l-5000.usw3.devtunnels.ms/category/removecategory',
    eliminarMaterial: 'https://0m9fgs4l-5000.usw3.devtunnels.ms/material/deletematerial',
    editar_categoria: 'https://0m9fgs4l-5000.usw3.devtunnels.ms/category/editcategory',
    editar_material: 'https://0m9fgs4l-5000.usw3.devtunnels.ms/material/editmaterial',
}


export const PRODUCTOS_CESTA = []