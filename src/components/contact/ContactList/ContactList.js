import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import ContactService from './../../../services/ContactService';
import Spinner from './../../Spinner/Spinner';
function ContactList() {
    const [state, setState] = useState({
        loading: false,
        contacts: [],
        errorMessage: ''
    });

    useEffect(function () {
        try {
            setState({ ...state, loading: true });
            async function fetchContact() {
                let contactRes = await ContactService.getContacts();
                setState({
                    ...state,
                    contacts: contactRes.data,
                    loading: false
                })
            }
            fetchContact();
        } catch (error) {
            setState({
                ...state,
                errorMessage: error.message,
                loading: false
            })
        }
    }, []);
    const { loading, contacts, errorMessage } = state;
    return (
        <React.Fragment>
            <section className="create-contact my-2">
                <div className="container">
                    <div className="d-flex align-items-center">
                        <h3 className="me-2">Contact Manager</h3>
                        <Link to={"/contact/add"} className="btn btn-primary btn-sm">
                            <i className="fa fa-plus-circle me-2"></i>
                            New
                        </Link>
                    </div>
                    <p className="fst-italic">Ea pariatur do cillum irure aute culpa irure. Ipsum aliqua anim qui ullamco ipsum elit elit occaecat aute ad ex culpa. Dolore quis ut ullamco consectetur elit irure dolor proident est.</p>
                    <div className="d-flex aligin-items-center">
                        <input type="search" className="w-25 me-3" placeholder="Search contact name" />
                        <button className="btn btn-outline-secondary">Search</button>
                    </div>
                </div>
            </section>
            <section className="contact-list">
                <div className="container">
                    {
                        loading ? <Spinner /> : (
                            <div className="row">
                                {
                                    contacts.map((contact) =>
                                    (<div className="col-6 mb-4" key={contact.id}>
                                        <div className="card ">
                                            <div className="card-body">
                                                <div className="row align-items-center">
                                                    <div className="col-3">
                                                        <img className="avatar-sm" src={contact.photoUrl} alt="" />
                                                    </div>
                                                    <div className="col-8">
                                                        <ul class="list-group">
                                                            <li class="list-group-item">
                                                                Name: <span className="fw-bold">{contact.name}</span>
                                                            </li>
                                                            <li class="list-group-item">
                                                                Mobile: <span className="fw-bold">{contact.mobile}</span>
                                                            </li>
                                                            <li class="list-group-item">
                                                                Email: <span className="fw-bold">{contact.email}</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-1">
                                                        <div className="d-flex flex-column align-items-center">
                                                            <Link to={`/contact/view/${contact.id}`} className="btn btn-sm btn-warning mb-2">
                                                                <i className="fa fa-eye"></i>
                                                            </Link>
                                                            <Link to={"/contact/edit"} className="btn btn-sm btn-primary mb-2">
                                                                <i className="fa fa-edit"></i>
                                                            </Link>
                                                            <button className="btn btn-sm btn-danger">
                                                                <i className="fa fa-trash"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                    )
                                }
                            </div>
                        )
                    }

                </div>
            </section>
        </React.Fragment>
    )
}

export default ContactList;