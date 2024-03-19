# Point Task - Experimental branch

## Instalación

```bash
git clone https://github.com/ppsantiago/point-task
cd point-task
npm install
npm run dev
```

> [!NOTA]
> Esta aplicación utiliza localStorage para almacenar las tareas.

## Contexto Global - Zustand

- `addTask`: Recibe una tarea como parámetro.
- `deleteTask`: Recibe el ID de una tarea como parámetro.
- `changeColumnTask`: Recibe el ID de una tarea y el estado actualizado como parámetros.
- `statuses`: Constante de los estados
- `statusIcons`: Clave valor de estados con iconos
- `statusColor`: Clave valor de estados con colores
- `saveTask`: Recibe el objeto tarea
- `saveSubtask`: Recibe ID de la tarea y el objeto subtarea
- `changeStatusSubtask`: Recibe el ID de la tarea, el IA de la subtarea, el objeto subtarea y su estado.
- `deleteSubtask`: Recibe el ID de la tarea y el ID de la subtarea

## Actualizaciones

- `Actualizacion de fecha sub tarea`: Se agrego funcionalidad para modificar la fecha de una sub tarea
- `Mejora del store`: Se elimina task[] del store
- `Vista de tarea`: Se creo vista individual de tarea
- `Edicion de tarea`: Edicion desde vista de tarea: descripcion, status, delete
- `Creacion de subtareas`: Titulo y descripcion
- `Edicion de subtarea`: Estado, eliminar
- `Interfaz de comentarios`: se visualizan los comentarios
- `UUID`: Las tareas tenian como id la fecha de creacion en timestamp.
- `react-router-dom`: Ruta dinamica para visualizar una tarea.
