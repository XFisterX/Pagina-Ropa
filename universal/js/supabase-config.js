// Configuración de Supabase
import { createClient } from '@supabase/supabase-js'

// Credenciales de Supabase
const supabaseUrl = 'https://ocgqgemvcfgzzxjxowxj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jZ3FnZW12Y2Znenp4anhvd3hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5NTQyOTksImV4cCI6MjA1MzUzMDI5OX0.06dKY5_nl-vgDU1x0WC-vpvZnMAbyQDX3eKamE2MoR4'

// Crear el cliente de Supabase
export const supabase = createClient(supabaseUrl, supabaseKey)

// Funciones para interactuar con Supabase
export async function getProducts() {
    const { data, error } = await supabase
        .from('productos')
        .select('*')
    
    if (error) {
        console.error('Error al obtener productos:', error)
        return []
    }
    
    return data
}

export async function getProductById(id) {
    const { data, error } = await supabase
        .from('productos')
        .select('*')
        .eq('id', id)
        .single()
    
    if (error) {
        console.error(`Error al obtener el producto con ID ${id}:`, error)
        return null
    }
    
    return data
}

export async function getProductsByType(tipo_ropa) {
    const { data, error } = await supabase
        .from('productos')
        .select('*')
        .eq('tipo_ropa', tipo_ropa)
    
    if (error) {
        console.error(`Error al obtener productos de tipo ${tipo_ropa}:`, error)
        return []
    }
    
    return data
}

export async function getProductsByColor(color) {
    const { data, error } = await supabase
        .from('productos')
        .select('*')
        .eq('color', color)
    
    if (error) {
        console.error(`Error al obtener productos de color ${color}:`, error)
        return []
    }
    
    return data
}

export async function addProduct(product) {
    const { data, error } = await supabase
        .from('productos')
        .insert([product])
    
    if (error) {
        console.error('Error al agregar producto:', error)
        return null
    }
    
    return data
}

export async function updateProduct(id, updates) {
    const { data, error } = await supabase
        .from('productos')
        .update(updates)
        .eq('id', id)
    
    if (error) {
        console.error('Error al actualizar producto:', error)
        return null
    }
    
    return data
}

export async function deleteProduct(id) {
    const { data, error } = await supabase
        .from('productos')
        .delete()
        .eq('id', id)
    
    if (error) {
        console.error('Error al eliminar producto:', error)
        return null
    }
    
    return data
} 