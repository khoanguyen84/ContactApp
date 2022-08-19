import axios from "axios";
import { GROUP_API } from './CommonService';

class GroupService{
    static getGroups(){
        return axios.get(GROUP_API);
    }
}

export default GroupService;