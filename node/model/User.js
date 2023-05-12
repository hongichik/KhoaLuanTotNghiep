import db from "./db.js";
import crypto from 'crypto';

const tableUser = "name, email, avatar, phone, address, password";

const auth = async (data) => {
    if(!data)
    {
        return false;
    }
    const [id, authToken] = data.split('|');
    const token = await decode(authToken);
    let query = "SELECT tokenable_id FROM personal_access_tokens WHERE id='"+id+"' AND token='"+token+"'";

    let results = await db.query(query);
    if(!results)
    {
        return false;
    }
    query = "SELECT "+tableUser+" FROM `users` WHERE id='"+results.tokenable_id+"'";
    results = await db.query(query);
    return results;

};


const decode = async(token) => {
    return await crypto.createHash('sha256').update(token).digest('hex');
  }

const User = {
  auth,
};
export default User;
