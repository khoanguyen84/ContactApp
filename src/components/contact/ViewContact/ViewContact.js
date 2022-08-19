import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import Spinner from "../../Spinner/Spinner";
import ContactService from './../../../services/ContactService';
import GroupService from './../../../services/GroupService';
function ViewContact() {
    const { contactId } = useParams();
    const [state, setState] = useState({
        loading: false,
        contact: {},
        group: {},
        errorMessage: ""
    })

    useEffect(function () {
        try {
            setState({ ...state, loading: true });
            async function fetchData() {
                let contactRes = await ContactService.getContact(contactId);
                let groupsRes = await GroupService.getGroups();
                setState({
                    ...state,
                    contact: contactRes.data,
                    group: groupsRes.data.find((gr) => gr.id === contactRes.data.groupId),
                    loading: false
                })
            }
            fetchData();
        } catch (error) {
            setState({
                ...state,
                loading: false,
                errorMessage: error.message
            })
        }
    }, [])

    const { loading, contact, group, errorMessage } = state;
    return (
        <React.Fragment>
            <section className="view-heading">
                <div className="container my-2">
                    <h3 className="me-2 text-warning">View Contact</h3>
                    <p className="fst-italic">Duis occaecat proident dolor exercitation reprehenderit pariatur eiusmod commodo deserunt. Nisi nisi laborum adipisicing mollit enim sint voluptate sint velit sit elit. Ut magna in irure et. Consectetur duis sint laboris non et esse dolore eu pariatur officia Lorem ut dolore. Excepteur ipsum consequat consectetur veniam nulla.</p>
                </div>
            </section>
            <section className="view-detail">
                {loading ? <Spinner /> : (
                    <div className="container ">
                        <div className="row align-items-center">
                            <div className="col-3">
                                <img className="avatar-lg" src={contact.photoUrl} alt="" />
                            </div>
                            <div className="col-9">
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
                                    <li class="list-group-item">
                                        Company: <span className="fw-bold">{contact.company}</span>
                                    </li>
                                    <li class="list-group-item">
                                        Title: <span className="fw-bold">{contact.title}</span>
                                    </li>
                                    <li class="list-group-item">
                                        Group: <span className="fw-bold">{group.name}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <Link to={"/contact/list"} className="btn btn-warning">Back</Link>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </React.Fragment>
    )
}

export default ViewContact;