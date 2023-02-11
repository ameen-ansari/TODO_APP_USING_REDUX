import style from "/styles/Todo.module.css";
import useTodo from "@/Hooks/useTodo";
import { useSelector } from "react-redux";

const Todo = () => {
  let data: any = useSelector((store: any): any => store.reducers.slice1);
  const { input, addTodoH, inputH, goGithub, deleteH, updateH, updateTodoH } =
    useTodo();

  return (
    <>
      <div className={style.intro}>
        <p
          title="https://github.com/ameen-ansari/AppFromRedux"
          onClick={goGithub}
        >
          By Ameen Ansari
        </p>
      </div>
      <div className={style.parent}>
        <div>
          <h2
            title="https://github.com/ameen-ansari/AppFromRedux"
            style={{ textAlign: "center" }}
            className="mb-5"
          >
            Todo App By Redux
          </h2>
          <div className="input-group">
            <input
              onChange={inputH}
              type="text"
              className="form-control"
              placeholder="Write Todo Here"
              aria-label="Write Todo Here"
              aria-describedby="basic-addon2"
              value={input.value}
            />
            <button
              onClick={addTodoH}
              className="input-group-text adderC"
              id="adder"
            >
              Add
            </button>
            <button
              onClick={updateTodoH}
              className="input-group-text"
              style={{ display: "none" }}
              id="updater"
            >
              Update
            </button>
          </div>
          <h2 className="mt-5"  style={{ textAlign: "center" }}>
            {data.length == 0 ? "Add Some Thing Now..." : "TODOs"}
          </h2>
        </div>
      </div>
      <div className="spinner-border my-2" id="spiner" style={{display:'none' ,margin:'auto'}} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className={style.todoParent}>
        {data.map((doc: any, i: number) => {
          return (
            <div key={i} className="card">
              <div className="card-body">
                <h2>{doc.value}</h2>
              </div>
              <div className={style.btns}>
                <button onClick={() => deleteH(doc)}>Delele</button>
                <button onClick={() => updateH(doc)}>Update</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Todo;
