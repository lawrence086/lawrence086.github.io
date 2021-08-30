
const Validation = (values) => {

let errors={};

if(!values.name){
    errors.name="Name is required."
}
if(!values.surname){
    errors.surname="Surname is required."
}
if(!values.age){
    errors.age="Age is required."
} else if(values.age.length > 3){
    errors.age="Age is invalid"
}
if(!values.location){
    errors.location="Location is required."
}
return errors;

}

export default Validation;
