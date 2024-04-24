from PIL import Image
import os

# Directorio de entrada y salida
input_dir = "uploads"
output_dir = "uploads/thumbnails"

# Asegurarse de que el directorio de salida exista
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Obtener una lista de todos los archivos en el directorio de entrada
files = os.listdir(input_dir)

# Tipos de archivos de imagen admitidos
supported_formats = (".jpg", ".jpeg", ".png", ".gif")

# Iterar sobre cada archivo en el directorio de entrada
for file in files:
    # Obtener la extensión del archivo
    _, ext = os.path.splitext(file)
    # Comprobar si el archivo es una imagen admitida
    if ext.lower() in supported_formats:
        # Abrir la imagen
        with Image.open(os.path.join(input_dir, file)) as img:
            # Calcular el nuevo tamaño con un 90% de reducción
            width, height = img.size
            new_width = int(width * 0.3)
            new_height = int(height * 0.3)
            # Redimensionar la imagen
            resized_img = img.resize((new_width, new_height))
            # Guardar la imagen redimensionada en el directorio de salida
            resized_img.save(os.path.join(output_dir, "thumb_" + file))
            # Cerrar la imagen
            resized_img.close()
            # Imprimir un mensaje de confirmación
            print(f"Imagen redimensionada y guardada como: thumb_{file}")
