#!/bin/bash

# Configurar el repositorio remoto (si no está configurado)
git remote add origin https://github.com/lfernandez312/React.git || echo "Repositorio remoto ya configurado"

# Añadir todos los archivos al área de staging
git add .

# Hacer un commit con un mensaje por defecto o el mensaje pasado como argumento
git commit -m "${1:-'Actualización automática de mi proyecto React'}"

# Subir los cambios al repositorio remoto (rama principal: 'main' o 'master')
git push -u origin main || git push -u origin master

echo "¡Los cambios se han subido exitosamente a GitHub!"
