// Cargar variables de entorno
import dotenv from 'dotenv';
dotenv.config();

// Exportar variables de entorno
export const SUPABASE_URL = process.env.SUPABASE_URL || 'https://ocgqgemvcfgzzxjxowxj.supabase.co';
export const SUPABASE_KEY = process.env.SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jZ3FnZW12Y2ZnenhqeG94eCIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzEwMjM5NjAwLCJleHAiOjIwMjU2MTU2MDB9.YOUR-API-KEY';
export const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://postgres:123456@db.ocgqgemvcfgzzxjxowxj.supabase.co:5432/postgres'; 