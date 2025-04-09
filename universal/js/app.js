// Importar funciones de Supabase
import { getProducts } from './supabase-config.js'

// Función para cargar productos desde Supabase
async function loadProducts() {
    try {
        const products = await getProducts()
        displayProducts(products)
    } catch (error) {
        console.error('Error al cargar productos:', error)
        document.getElementById('products-container').innerHTML = '<p class="text-danger">Error al cargar productos. Por favor, intente nuevamente más tarde.</p>'
    }
}

// Función para mostrar productos en la página
function displayProducts(products) {
    const container = document.getElementById('products-container')
    
    if (!products || products.length === 0) {
        container.innerHTML = '<p>No hay productos disponibles.</p>'
        return
    }
    
    const productsHTML = products.map(product => `
        <div class="col-md-4 mb-4">
            <div class="card h-100">
                <img src="${product.imagen_url}" class="card-img-top" alt="${product.tipo_ropa} ${product.color}">
                <div class="card-body">
                    <h5 class="card-title">${product.tipo_ropa} ${product.color}</h5>
                    <p class="card-text">${product.descripcion}</p>
                    <p class="card-text"><strong>Precio: $${product.precio}</strong></p>
                    <button class="btn btn-primary add-to-cart" data-id="${product.id}">Agregar al Carrito</button>
                </div>
            </div>
        </div>
    `).join('')
    
    container.innerHTML = productsHTML
    
    // Agregar event listeners a los botones "Agregar al Carrito"
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-id')
            addToCart(productId)
        })
    })
}

// Función para agregar un producto al carrito
function addToCart(productId) {
    // Aquí puedes implementar la lógica para agregar productos al carrito
    alert(`Producto con ID ${productId} agregado al carrito.`)
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    loadProducts()
}) 