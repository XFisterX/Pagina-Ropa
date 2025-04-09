# FibreRogue - Tienda de Ropa Online

Este proyecto es una tienda de ropa online desarrollada con HTML, CSS, JavaScript y Supabase como backend.

## Características

- Diseño responsive
- Catálogo de productos
- Categorías de productos
- Integración con Supabase para la gestión de datos
- Carrito de compras (en desarrollo)

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5
- Font Awesome
- Supabase (PostgreSQL, Autenticación, Storage)

## Configuración del proyecto

1. Clona este repositorio
2. Instala las dependencias:
   ```
   npm install
   ```
3. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
   ```
   SUPABASE_URL=tu_url_de_supabase
   SUPABASE_KEY=tu_clave_de_supabase
   DATABASE_URL=tu_url_de_base_de_datos
   ```
4. Inicia el servidor de desarrollo:
   ```
   npm start
   ```

## Estructura del proyecto

```
/
├── index.html              # Página principal
├── universal/              # Recursos universales
│   ├── css/                # Estilos CSS
│   │   └── styles.css      # Estilos principales
│   ├── js/                 # Scripts JavaScript
│   │   ├── app.js          # Lógica principal
│   │   ├── config.js       # Configuración
│   │   └── supabase-config.js # Configuración de Supabase
│   └── images/             # Imágenes
├── .env                    # Variables de entorno (no subir a GitHub)
├── .gitignore              # Archivos a ignorar por Git
├── package.json            # Dependencias y scripts
└── README.md               # Documentación
```

## Despliegue

Este proyecto está desplegado en GitHub Pages: [https://xfisterx.github.io/Pagina-Ropa/](https://xfisterx.github.io/Pagina-Ropa/)

## Contacto

- Email: fibrerogue@gmail.com
- Teléfono: 3491 540034 / 3491 455980
- Instagram: [@fibrerogue](https://www.instagram.com/fibrerogue?igsh=dzdwbDl0ZXo1dmYx) 