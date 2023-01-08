import PropTypes from "prop-types";
import { ListItem } from "./ListItem";
import { useDroppable } from "@dnd-kit/core";
import { useEffect, useLayoutEffect, useState } from "react";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}


export const ListMobile = ({ todos, status, handleEditTodo, handleDelete }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: `${status}`,
    data: {
      accepts: ['todo']
    }
  })
  const style = {
    transform: isOver ? "scale(1.1)" : undefined,
  };
  const total = todos.length
  return (
    <div className="flex flex-col w-full h-full px-10 pb-6 space-y-6 text-center card" ref={setNodeRef}>
      <div className="sticky top-0 z-10 w-full mt-3 text-2xl bg-base-300" style={style}>
        <span >{status} {total ? <span className="mt-2 badge badge-lg badge-outline ">{total}</span> : null} </span>
      </div>
      <div className="flex flex-row w-full overflow-x-scroll">
        {
          todos.map((todo) => (
            <ListItem key={todo.id} todo={todo} handleEditTodo={handleEditTodo} handleDelete={handleDelete} />
          ))
        }
      </div>
    </div >

  );
};

export const ListDeskop = ({ todos, status, handleEditTodo, handleDelete }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: `${status}`,
    data: {
      accepts: ['todo']
    }
  })
  const style = {
    transform: isOver ? "scale(1.1)" : undefined,
  };
  const total = todos.length
  return (
    <div className="desktop flex flex-col items-center text-center w-full h-full max-h-[650px] pb-6 space-y-6 card overflow-y-scroll overflow-x-clip" ref={setNodeRef}>
      <div className="sticky top-0 z-10 w-full mt-3 text-2xl bg-base-300 " style={style}>
        <span >{status} {total ? <span className="mt-2 badge badge-lg badge-outline ">{total}</span> : null} </span>
      </div>
      {
        todos.map((todo) => (
          <ListItem key={todo.id} todo={todo} handleEditTodo={handleEditTodo} handleDelete={handleDelete} />
        ))
      }
    </div >

  );
};

export const List = (props) => {
  const [width] = useWindowSize()

  console.log(width)
  return (
    <>
      {width > 1024 ? <ListDeskop {...props} /> : <ListMobile {...props} />}
    </>
  );
};

List.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  status: PropTypes.string,
  handleEditTodo: PropTypes.func,
};