import { loginUser } from "../Redux/UserRedux";
import { publicRequest, userRequest } from "../RequestMethods";

const storedData = localStorage.getItem('persist:jobio');
const user = storedData ? JSON.parse(JSON.parse(storedData).user) : null;
const userId = user?.userInfo?.[0]?.id;



// signup
export const signUpData = async (data) => {
    console.log('first check',data);
    try {
        const res = await publicRequest.post('/signup', data);
        console.log('Response Status:', res.status);
    } catch (err) {
        console.log(err);
    }
}

// signin
export const signInData = async (loginData, dispatch) => {
    try {
        const res = await publicRequest.post('/signin', loginData)
        console.log('Response Status:', res.status);
        const { _id: id, accessToken, type } = res.data;
        const userData = { id, accessToken, type };
        dispatch(loginUser(userData))
    } catch (error) {
        console.log(error);
    }
}

// all users
export const getAllUsers=async()=>{
    try {
        const res = await userRequest.get('/allusers')
        console.log('Response Status:', res.status);
        return res.data
    } catch (error) {
        console.log(error);
    }
}

// view profile
export const viewProfile = async () => {
    try {
        const res = await userRequest.get(`/Viewprofile/${userId}`)
        console.log('Response Status:', res.status);
        return res.data
    } catch (error) {
        console.log(error);
    }
}