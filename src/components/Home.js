import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/home.css';
import firebase from '../components/firebase';
import img2 from '../images/users.jfif';
import img3 from '../images/users1.png';
import { Link } from 'react-router-dom';


const Home = () => {
    

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState('');
    const [location, setLocation] = useState('');
    const [users, setUsers] = useState([])

    const db = firebase.firestore();


//Function to accept users
    const submitData = (e) => {
    e.preventDefault();
    // AddUsers(name, surname)
    db.collection('users').add({
        name: name,
        surname: surname,
        age: age,
        location: location
    })
    .then((res) => { console.log('user created')})
    .catch((err) => { console.log(err)})
    }

    //get all users

    useEffect(() => {
        let userinfo = [];
        db.collection('users').get()
        .then((res) => {
            res.forEach(action => {
                userinfo.push({...action.data(), id: action.id });
            })
            setUsers(userinfo);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    //delete user
    const deleteUser = (e) => {
        let uid = e.target.id

        db.collection('users').doc(uid).delete()
        .then(() => { console.log('user delete') })
        .catch((err) => { console.log(err) })
    }

    //update user
    const updateUser = (e) => {
        let uid = e.target.id
        db.collection('users').doc(uid).update({
            name: name,
            surname: surname,
            age: age,
            location: location
        })
        .then(() => { console.log('user updated') })
        .catch((err) => { console.log(err) })
    };
    

    return (
        // Column 1
        <div className="section group">
	<div className="col span_1_of_2">
	<div className="site-info">
            <div className="title">
                Student Registration Interface
            </div>
            <div className="sub-title">
                Click the area below to register..
            </div>
            <div className="box">
            <input type="file" id="file" name="image" ></input>
            <img src={img2} alt="" width="100%" height="100%"/>

            {/* Insert Form */}
            <form onSubmit={submitData}> 
            <input 
            type="text" 
            name="name" 
            value={ name } 
            placeholder="Enter your name" 
            onChange={ (e) => setName(e.target.value)}
            />

            <input 
            type="text" 
            name="surname" 
            value={ surname } 
            placeholder="Enter your surname"
            onChange={ (e) => setSurname(e.target.value)}
            />
           

            <input 
            type="number" 
            name="age" 
            value={ age } 
            placeholder="Enter your age"
            onChange={ (e) => setAge(e.target.value)}
            />
            

            <input 
            type="text" 
            name="location" 
            value={ location } 
            placeholder="Enter your location"
            onChange={ (e) => setLocation(e.target.value)} 
            />
            
            <button type="submit">Register</button>
            </form>

            </div>
        </div>
	</div>


    {/* Column 2 */}
	<div className="col span_1_of_2">
	<div className="data">Student Registration Data</div>
    <div className="sub-title">
                Click below to see registered students..
            </div>
            <div className="box">
            <input type="file" id="file" name="image" ></input>
            <img src={img3} alt="" width="100%" height="100%"/>
            <h4 className="detail">Student Details</h4>
            {/* Display Students */}
            <h5>     
                    {
                        users.map((action, pos) => (
                            <div className="home" key={pos}>
                                <Link to={"/Details/" + action.id} className="card2" key={ action.id }>
                                    <p className="card-text">{ action.name } { action.surname } </p>
                                </Link>
                                <button id={ action.id } onClick={ deleteUser } className="btn btn-danger">Delete</button>
                                <button id={ action.id } onClick={ updateUser } className="btn btn-primary">Update</button>
                            </div>
                        ))
                    }
            </h5>        
        </div>
	</div>
</div>
        
        
    )
}

export default Home;
