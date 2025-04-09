-- Crear tabla de productos
CREATE TABLE IF NOT EXISTS productos (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  tipo_ropa TEXT NOT NULL,
  color TEXT NOT NULL,
  precio DECIMAL(10,2) NOT NULL,
  descripcion TEXT,
  imagen_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Insertar productos de ejemplo
INSERT INTO productos (tipo_ropa, color, precio, descripcion, imagen_url) VALUES
('Camiseta Brooklyn', 'Negro', 29.99, 'Camiseta Brooklyn negra', 'https://ocgqgemvcfgzzxjxowxj.supabase.co/storage/v1/object/public/ropaa//camiseta-beige.jpg'),
('Camiseta Brooklyn', 'Beige', 29.99, 'Camiseta Brooklyn beige y negra', 'https://ocgqgemvcfgzzxjxowxj.supabase.co/storage/v1/object/public/ropaa//camiseta-negra.jpg'); 