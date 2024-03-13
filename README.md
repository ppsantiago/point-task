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
- `findOneTask`: Recibe un ID y devuelve la tarea correspondiente.

## Actualizaciones

- `UUID`: Las tareas tenian como id la fecha de creacion en timestamp.
- `react-router-dom`: Ruta dinamica para visualizar una tarea.
