import { publicRequest } from "../RequestMethods";


// signup
export const signUpData = async (data) => {
    console.log(data);
    try {
        const res = await publicRequest.post('/signup', data);
        console.log('Response Status:', res.status);
    } catch (err) {
        console.log(err);
    }
}