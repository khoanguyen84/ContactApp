import axios from "axios";
import { CONTACT_API } from './CommonService';

class ContactService{
    static getContacts(){
        return axios.get(CONTACT_API);
    }

    static getContact(contactId){
        return axios.get(`${CONTACT_API}/${contactId}`);
    }
}

export default ContactService;