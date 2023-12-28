import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import SignUp from "../../SignUp/SignUp";
import { addCustomer } from "../../../store/actions/customers/add_customer";


export const AddCustomer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip_code, setZip_code] = useState('');
    const [password, setPassword] = useState('');


    const saveData = () => {

        const objData = {
            first_name: first_name,
            last_name: last_name,
            phone: phone,
            email: email,
            street: street,
            city: city,
            state: state,
            zip_code: zip_code,
            password: password
        };

        dispatch(addCustomer(objData))
            .then(() => {
                console.log("objData", objData);
                navigate('/');
            })
            .catch((err) => {
                console.error('Failed to add student:', err);
            });
    };



    return (
        <div>
            <h2>Customers details from Customer_data Component </h2>
            <SignUp
                First_name={first_name}
                setFirst_name={setFirst_name}
                Last_name={last_name}
                setLast_name={setLast_name}
                Phone={phone}
                setPhone={setPhone}
                Email={email}
                setEmail={setEmail}
                Street={street}
                setStreet={setStreet}
                City={city}
                setCity={setCity}
                State={state}
                setState={setState}
                Zip_code={zip_code}
                setZip_code={setZip_code}
                Password={password}
                setPassword={setPassword}
                saveData={saveData}
            />
        </div>
    );
};