import { loginUser } from "../Redux/UserRedux";
import { publicRequest } from "../RequestMethods";

const storedData = localStorage.getItem('persist:unknown');
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