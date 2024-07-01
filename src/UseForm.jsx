import { useState } from "react";

function createData() {
  return {
    username: "",
    password: "",
    remember: false,
  };
}

export function useForm(initialValue = {}) {
  const [data, setData] = useState(createData());
  
  

  function handleInputChange(event) {
    const { name, value, type, checked } = event.target;
    
    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });

  }

  function handleResetForm(event) {
    event.preventDefault()
    setData(createData());
  }

  return [data, handleInputChange, handleResetForm];
}
