import TaskDisplay from "./TaskDisplay";

function TaskList({tasks, onDelete, onEdit, onUpdate}){

     const renderedTasks = tasks.map((task) => {
        return <TaskDisplay onUpdate={onUpdate} onEdit={onEdit} onDelete={onDelete} key={task.id} task={task} />;
     });
     return <div>{renderedTasks}</div>;
}
export default TaskList; 