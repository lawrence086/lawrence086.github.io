import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { db } from '../components/firebase';
import { useParams } from 'react-router';

const Details = () => {  

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState('');
    const [location, setLocation] = useState('');
    const [userid, setUserid] = useState('');
    

    const {id} = useParams();

    useEffect(() =>{
        db.collection('users').doc(id).get()
        .then((user) => {
            setUserid(user.id);
            setName(user.data().name);
            setSurname( user.data().surname);
            setAge(user.data().age)
            setLocation(user.data().location)              
            })
            
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])

    const updateUser = () => {
     
        db.collection('users').doc(userid).update({
            name: name,
            surname: surname,
            age: age,
            location: location
        })
        .then(() => { console.log('user updated') })
        .catch((err) => { console.log(err) })
    }

    // delete data

    const deleteUser = () => {

        db.collection('users').doc(userid).delete()
        .then(() => { console.log('user deleted') })
        .catch((err) => { console.log(err) })
    }

    //get data by id

   

    return ( 
            <div className='MainDiv'>
                        <div className="jumbotron text-center bg-sky">
                            <h3 className="head">Student Registration Data</h3>
                        </div>

                        <div className="container">
                            <table id="example" className="display table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Surname</th>
                                        <th>Age</th>
                                        <th>Location</th>
                                        <th>Delete Data</th>
                                        <th>Update Data</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="tr" key={userid}>
                                        <td>{id}</td>
                                        <td>{name}</td>
                                        <td>{surname}</td>
                                        <td>{age}</td>
                                        <td>{location}</td>
                                        <td><button onClick={deleteUser}>Delete</button></td>
                                        <td><button onClick={updateUser}>Update</button></td>
                                    </tr>

                                    {/* {info.map((student, i) => 
                                            <tr className="tr" key={i}>
                                                <td>{student.id}</td>
                                                <td>{student.name}</td>
                                                <td>{student.surname}</td>
                                                <td>{student.age}</td>
                                                <td>{student.location}</td>
                                                <td><button >Delete</button></td>
                                                <td><button onClick={updateUser}>Edit</button></td>
                                            </tr>
                                        )
                                    } */}
                                </tbody>
                            </table>
                                <div>
                                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /> <br /><br />
                                <input type="text" value={surname} onChange={(e)=>{setSurname(e.target.value)}} /> <br /><br />
                                <input type="text" value={age} onChange={(e)=>{setAge(e.target.value)}} /> <br /><br />
                                <input type="text" value={location} onChange={(e)=>{setLocation(e.target.value)}} /> <br /><br />
                                	
                                </div>
                                    
                        </div>
                    </div>
                    
                )
            }
        
export default Details