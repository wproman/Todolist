
// import React, { useState } from 'react';

// function TaskInput() {
//   const [task, setTask] = useState('');
//   const [taskList, setTaskList] = useState([]);

//   const handleInputChange = (event) => {
//     setTask(event.target.value);
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     if (task.trim() !== '') {
//       setTaskList([...taskList, { description: task, completed: false }]);
//       setTask('');
//     }
//   };

//   const markTaskAsComplete = (index) => {
//     const updatedTaskList = [...taskList];
//     updatedTaskList[index].completed = true;
//     setTaskList(updatedTaskList);
//   };

//   const deleteTask = (index) => {
//     const updatedTaskList = [...taskList];
//     updatedTaskList.splice(index, 1);
//     setTaskList(updatedTaskList);
//   };

//   return (
//     <div className="max-w-md mx-auto">
//       <form onSubmit={handleFormSubmit} className="flex mt-5">
//         <input
//           type="text"
//           value={task}
//           onChange={handleInputChange}
//           placeholder ="Your task......"
//           className="border border-purple-400 rounded-l px-4 py-2 w-full focus:outline-none focus:border-purple-900"
//         />
//         <button type="submit" className="bg-purple-700 text-white px-4 py-2 rounded-r hover:bg-purple-900 focus:outline-none w-[150px]">
//           Add Task
//         </button>
//       </form>

//       <ul className="mt-4">
//         {taskList.map((task, index) => (
//           <li key={index} className="flex items-center py-2">
//           <span className="rounded-full bg-green-900 text-white w-6 h-6 flex items-center justify-center mr-2">{index + 1}</span>
//             <span
//               className={`flex-1 font-semibold uppercase ${task.completed ? 'line-through text-gray-500' : ''}`}
//             >
//               {task.description}
//             </span>
//             {!task.completed && (
//               <button
//                 onClick={() => markTaskAsComplete(index)}
//                 className="text-white bg-orange-600 py-1 px-2 rounded-md hover:text-purple-800 focus:outline-none"
//               >
//                  Complete
//               </button>
//             )}
//             <button
//               onClick={() => deleteTask(index)}
//               className="ml-1 bg-red-600 py-1 px-2 rounded-md text-white hover:text-red-600 focus:outline-none"
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
      
//     </div>
//   );
// }

// export default TaskInput;

// import React, { useState } from 'react';

// function TaskInput() {
//   const [task, setTask] = useState('');
//   const [taskList, setTaskList] = useState([]);
//   const [completedTasks, setCompletedTasks] = useState([]);

//   const handleInputChange = (event) => {
//     setTask(event.target.value);
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     if (task.trim() !== '') {
//       setTaskList([...taskList, { description: task, completed: false }]);
//       setTask('');
//     }
//   };

//   const markTaskAsComplete = (index) => {
//     const completedTask = taskList[index];
//     setCompletedTasks([...completedTasks, completedTask]);

//     const updatedTaskList = [...taskList];
//     updatedTaskList.splice(index, 1);
//     setTaskList(updatedTaskList);
//   };

//   const deleteTask = (index) => {
//     const updatedTaskList = [...taskList];
//     updatedTaskList.splice(index, 1);
//     setTaskList(updatedTaskList);
//   };

//   return (
//     <div className="max-w-md mx-auto">
//       <form onSubmit={handleFormSubmit} className="flex mt-5">
//         <input
//           type="text"
//           value={task}
//           onChange={handleInputChange}
//           placeholder="Your task......"
//           className="border border-purple-400 rounded-l px-4 py-2 w-full focus:outline-none focus:border-purple-900"
//         />
//         <button
//           type="submit"
//           className="bg-purple-700 text-white px-4 py-2 rounded-r hover:bg-purple-900 focus:outline-none w-[150px]"
//         >
//           Add Task
//         </button>
//       </form>

//       <ul className="mt-4">
//         {taskList.map((task, index) => (
//           <li key={index} className="flex items-center py-2">
//             <span className="rounded-full bg-green-900 text-white w-6 h-6 flex items-center justify-center mr-2">
//               {index + 1}
//             </span>
//             <span className="flex-1 font-semibold uppercase">{task.description}</span>
//             {!task.completed && (
//               <button
//                 onClick={() => markTaskAsComplete(index)}
//                 className="text-white bg-orange-600 py-1 px-2 rounded-md hover:text-purple-800 focus:outline-none"
//               >
//                 Complete
//               </button>
//             )}
//             <button
//               onClick={() => deleteTask(index)}
//               className="ml-1 bg-red-600 py-1 px-2 rounded-md text-white hover:text-red-600 focus:outline-none"
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>

//       <div className="mt-4">
//         <h2>Completed Tasks</h2>
//         <ul>
//           {completedTasks.map((task, index) => (
//             <li key={index}>{task.description}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default TaskInput;


import React, { useState } from 'react';

function TaskInput() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (task.trim() !== '') {
      setTaskList([...taskList, { description: task, completed: false }]);
      setTask('');
    }
  };

  const markTaskAsComplete = (index) => {
    const completedTask = taskList[index];
    setCompletedTasks([...completedTasks, completedTask]);

    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index, 1);
    setTaskList(updatedTaskList);
  };

  const deleteTask = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index, 1);
    setTaskList(updatedTaskList);
  };

  const finishTasks = () => {
    setTaskList([]);
    setCompletedTasks([]);
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleFormSubmit} className="flex mt-5">
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Your task......"
          className="border border-purple-400 rounded-l px-4 py-2 w-full focus:outline-none focus:border-purple-900"
        />
        <button
          type="submit"
          className="bg-purple-700 text-white px-4 py-2 rounded-r hover:bg-purple-900 focus:outline-none w-[150px]"
        >
          Add Task
        </button>
        
      </form>
      <div className='mt-2'>All Task</div>
      <ul className="mt-2">
        {taskList.map((task, index) => (
          <li key={index} className="flex items-center py-2">
            <span className="rounded-full bg-green-900 text-white w-6 h-6 flex items-center justify-center mr-2">
              {index + 1}
            </span>
            <span className="flex-1 font-semibold uppercase">{task.description}</span>
            {!task.completed && (
              <button
                onClick={() => markTaskAsComplete(index)}
                className="text-white bg-orange-600 py-1 px-2 rounded-md hover:text-purple-800 focus:outline-none"
              >
                Complete
              </button>
            )}
            <button
              onClick={() => deleteTask(index)}
              className="ml-1 bg-red-600 py-1 px-2 rounded-md text-white hover:text-red-600 focus:outline-none"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-4">
  <h2>Completed Tasks</h2>
  <table className="border-collapse">
    <thead>
      <tr>
     
       
      </tr>
    </thead>
    <tbody>
      {completedTasks.map((task, index) => (
        <tr key={index}>
          <td className="border border-gray-500 px-4 py-2">{task.description}</td>
          
        </tr>
      ))}
    </tbody>
  </table>
</div>


      <div className="mt-4">
        <button
          onClick={finishTasks}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none"
        >
          Finish
        </button>
      </div>
    </div>
  );
}

export default TaskInput;
