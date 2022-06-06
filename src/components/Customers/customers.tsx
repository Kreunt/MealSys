import React, { useEffect, useState } from "react";
import axios from "axios";

import { CustomerList } from "./customer-list";

export const Customers = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [dateOfSubscription, setDateOfSubscription] = useState("");
    const [dateOfSubscriptionEnd, setDateOfSubscriptionEnd] = useState("");
    const [paidAmount, setPaidAmount] = useState("");
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCustomers();
    }, []);

    const fetchCustomers = async () => {
        axios
            .get("http://localhost:4001/api/customers/all")
            .then(response => {
                setCustomers(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.log("Es ist ein Fehler aufgetreten: ", error);
            }
            );
    };

    const handleInputsReset = () => {
        setName("");
        setAge("");
        setAddress("");
        setPhone("");
        setDateOfSubscription("");
        setDateOfSubscriptionEnd("");
        setPaidAmount("");
    };

    const handleCustomerSubmit = () => {
        if(name.length > 0 && age.length > 0 && address.length > 0 && phone.length > 0 && dateOfSubscription.length > 0 && dateOfSubscriptionEnd.length > 0 && paidAmount.length > 0) {
           handleCustomerCreate();
           console.info(`Customer ${name} created`);
           handleInputsReset();
        }
    }
    const handleCustomerCreate = () => {
        axios
            .post("http://localhost:4001/api/customers/create", {
                name: name,
                age: age,
                address: address,
                phone: phone,
                dateOfSubscription: dateOfSubscription,
                dateOfSubscriptionEnd: dateOfSubscriptionEnd,
                paidAmount: paidAmount
            })
            .then(() => {
                fetchCustomers();
                handleInputsReset();
            })
            .catch(error => {
                console.log("Es ist ein Fehler aufgetreten: ", error);
            });
    };

    const handleCustomerRemove = (id: number, title: string) => {
        axios
            .put(`http://localhost:4001/api/customers/delete`, { id: id })
            .then(() => {
                fetchCustomers();
                alert(`${title} wurde gelöscht!`);
            })
            .catch(error => {
                console.log("Es ist ein Fehler aufgetreten: ", error);
            });
    }
    
    const handleCustomerUpdate = (customer: any) => {
        axios
            .put(`http://localhost:4001/api/customers/update`, customer)
            .then(() => {
                fetchCustomers();
                alert(`${customer.name} wurde erfolgreich geändert!`);
            })
            .catch(error => {
                console.log("Es ist ein Fehler aufgetreten: ", error);
            });
    }

    return (
        <div className="customer-list-wrapper">
            <div className="customer-list-form">
                <div className="form-wrapper" onSubmit={handleCustomerSubmit}>

                    <div className="form-row">
                        <fieldset>
                            <label className="form-label" htmlFor="name">Enter name:</label>
                            <input className="form-input" type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                        </fieldset>

                        <fieldset>
                            <label className="form-label" htmlFor="age">Enter age:</label>
                            <input className="form-input" type="number" id="age" name="age" value={age} onChange={(e) => setAge(e.target.value)} />
                        </fieldset>

                        <fieldset>
                            <label className="form-label" htmlFor="address">Enter address:</label>
                            <input className="form-input" type="text" id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                        </fieldset>

                        <fieldset>
                            <label className="form-label" htmlFor="phone">Enter phone:</label>
                            <input className="form-input" type="text" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </fieldset>

                        <fieldset>
                            <label className="form-label" htmlFor="dateOfSubscription">Enter date of subscription:</label>
                            <input className="form-input" type="date" id="dateOfSubscription" name="dateOfSubscription" value={dateOfSubscription} onChange={(e) => setDateOfSubscription(e.target.value)} />
                        </fieldset>

                        <fieldset>
                            <label className="form-label" htmlFor="dateOfSubscriptionEnd">Enter date of subscription end:</label>
                            <input className="form-input" type="date" id="dateOfSubscriptionEnd" name="dateOfSubscriptionEnd" value={dateOfSubscriptionEnd} onChange={(e) => setDateOfSubscriptionEnd(e.target.value)} />
                        </fieldset>

                        <fieldset>
                            <label className="form-label" htmlFor="paidAmount">Enter paid amount:</label>
                            <input className="form-input" type="number" id="paidAmount" name="paidAmount" value={paidAmount} onChange={(e) => setPaidAmount(e.target.value)} />
                        </fieldset>
                    </div>
                </div>

                <button className="btn btn-add" onClick={handleCustomerSubmit}>Add Customer</button>
            </div>
            <CustomerList customers={customers} loading={loading} handleCustomerRemove={handleCustomerRemove} handleCustomerUpdate={handleCustomerUpdate} />
        </div>
    );
}