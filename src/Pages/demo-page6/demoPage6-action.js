

export const addNewStudent = (oldState,updaterFn) => {

    let newStudent =   {
        name: "Ramesh",
        age: 28,
        course: "Javascript",
    }
    
    updaterFn([
      ...oldState,
      newStudent
    
    ]);
  };



  export const handleUpdate = (profileIndex,oldState,updaterFn) => {

    const updatedState = oldState.map(
      (value, index) => {

        if (index == profileIndex) {
          value.name = "Taj"
          value.age = 22
          value.course = "vue Js"
        }

        return value
      }
    )

    updaterFn(updatedState)

  }

  export const handleDelete = (profileIndex,oldState,updaterFn) => {

    const afterDeleteRecord = oldState.filter((value, index) => index != profileIndex)
    updaterFn(afterDeleteRecord)

  }