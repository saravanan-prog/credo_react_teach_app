export default function ListData({ studentData, handleDelete, handleUpdate }) {
  return (
    <>
      {studentData.map((value, index) => {
        return (
          <div key={index}>
            <div>
              <p> Student Name : {value.name} </p>
              <p> Student Picked Course : {value.course} </p>
            </div>
            <div>
              <button onClick={() => handleUpdate(index)}>update</button>
              <button onClick={() => handleDelete(index)}>delete</button>
            </div>
            <hr />
          </div>
        );
      })}
    </>
  );
}
