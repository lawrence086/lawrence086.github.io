import { useState } from 'react';
import Validation from './Validation';

const useForm = (submitForm) =>{
const [values, setValues] = useState({
    name: "",
    surname: "",
    age: "",
    location: "",
});

const [errors, setErrors] = useState({});
// const [dataIsCorrect, setDataIsCorrect] = useState(false);

const handleChange = (event) => {
    setValues({
        ...values,
        [event.target.name]: event.target.value,
    });
};

const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    // setDataIsCorrect(true);
};

// useEffect(() =>{
//     if(Object.keys(errors).length === 0 && dataIsCorrect){
//         submitForm(true);
//     } 
// // eslint-disable-next-line react-hooks/exhaustive-deps
// },[errors]);

return {handleChange, handleFormSubmit, errors, values};
};
export default useForm;