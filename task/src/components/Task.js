import React, { useState,useEffect } from "react";

function Task() {


  let task = [
    {
      taskId: 1,
      taskName: "Calpe installing",
      taskStatus: 0,
      parentId: null,
    },
    {
      taskId: 2,
      taskName: "Cable Tray Installation",
      taskStatus: 0,
      parentId: 1,
    },
    {
      taskId: 3,
      taskName: "Tray Installation",
      taskStatus: 0,
      parentId: 2,
    },
    {
      taskId: 4,
      taskName: "Tray Connection",
      taskStatus: 0,
      parentId: 3,
    },
    {
      taskId: 5,
      taskName: "Calpe installing",
      taskStatus: 0,
      parentId: 4,
    },
    {
      taskId: 6,
      taskName: "Gaugeing",
      taskStatus: 0,
      parentId: null,
    },
  ];

  const [tasks, setTasks] = useState();
  
  useEffect(()=>
  {
    if (JSON.parse(localStorage.getItem("tasks")) === null) {
    localStorage.setItem('tasks',JSON.stringify(task));
    setTasks(JSON.parse(localStorage.getItem("tasks"))) 
    }
    else
    {
      setTasks(JSON.parse(localStorage.getItem("tasks"))) 
    }
  },[])



const plus = document.querySelector(".plus");




// plus.addEventListener("click", (a)=> {
//   var a = 1;
//   a++;
//   num.innerText = a;
// });
// var a = 1;
// plus.addEventListener("click", (a)=> {

//   a++;
//   num.innerText = a;
// }
// );
let [num, setNum]= useState(0);

const handleNum = (e)=>{

  let ls = (tasks.map(z=>
    {
      if(z.taskId===e.taskId){
        z.taskStatus+=1;
      }
      return z;
    }))
    localStorage.setItem("tasks",JSON.stringify(ls));
    setTasks(JSON.parse(localStorage.getItem("tasks")));
};

  

  const deleteItem = (index) => () =>
    setTasks((items) => items.filter((_, i) => i !== index));

  return (
    <div className="container mt-5">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Task name </th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
            {tasks&&tasks.map((item, index) => (
              <tr key={index}>
                <th scope="row">{item.taskId}</th>
                <td>{item.taskName}</td>
                <td className="num">{item.taskStatus}</td>
                <td>
                  <button onClick={()=>handleNum(item)} className="btn btn-primary plus">
                    Start
                  </button>
                  <button onClick={deleteItem(index)} className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Task;
