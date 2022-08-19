import React from "react";
import NavBar from './components/NavBar/NavBar';
import { Route, Routes, Navigate } from 'react-router-dom';
import ContactList from "./components/contact/ContactList/ContactList";
import AddContact from './components/contact/AddContact/AddContact';
import EditContact from './components/contact/EditContact/EditContact';
import ViewContact from './components/contact/ViewContact/ViewContact';
import './App.css';

function App() {
  return (
    <React.Fragment>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Navigate to={<ContactList/>} />} />
            <Route path="/contact/list" element={<ContactList/>} />
            <Route path="/contact/add" element={<AddContact/>} />
            <Route path="/contact/edit" element={<EditContact/>} />
            <Route path="/contact/view/:contactId" element={<ViewContact/>} />
        </Routes>
    </React.Fragment>
  );
}

export default App;
