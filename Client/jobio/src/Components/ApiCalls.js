import { loginUser } from "../Redux/UserRedux";
import { publicRequest, userRequest } from "../RequestMethods";

const storedData = localStorage.getItem('persist:jobio');
const user = storedData ? JSON.parse(JSON.parse(storedData).user) : null;
const userId = user?.userInfo?.[0]?.id;



// signup
export const signUpData = async (data) => {
    const newData = { ...data, state: 'active' }
    // console.log('first check', data);
    try {
        const res = await publicRequest.post('/signup', newData);
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
        const { _id: id, accessToken, type, state } = res.data;
        const userData = { id, accessToken, type, state };
        dispatch(loginUser(userData))
    } catch (error) {
        console.log(error);
    }
}

// all users
export const getAllUsers = async () => {
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

// edit profile
export const editProfile = async (data) => {
    try {
        const res = await userRequest.put(`/editprofile/${userId}`, data)
        console.log('Response Status:', res.status);
    } catch (error) {
        console.log(error);

    }
}

// delete profile
export const deleteProfile = async () => {
    try {
        const res = await userRequest.delete(`/deleteprofile/${userId}`)
        console.log('Response Status:', res.status);
    } catch (error) {
        console.log(error);
    }
}


// <-------------------forgot pass-------------------> //
// forgot password
export const forgotPassword = async (data) => {
    console.log('data check', data);
    try {
        const res = await publicRequest.post('/forgotpassword', data)
        console.log('Response Status:', res.status);
        // console.log('res.data',res.data);
    } catch (error) {
        console.log(error);
    }
}

// otp validation
export const otpValidation = async (data) => {
    console.log('otp validation data', data);
    try {
        const res = await publicRequest.post('/otpvalidation', data)
        console.log('Response Status:', res);
        return res.data;

    } catch (error) {
        console.log(error);
    }
}

export const changePassword = async (data) => {
    console.log(data);
    try {
        const res = await publicRequest.put('/changepass', data)
        console.log('Response Status:', res);
    } catch (error) {
        console.log(error);
    }
}


// <-------------------Alerts-------------------> //
// send alert
export const sendAlert=async(data)=>{
    try {
        const newData = { ...data, user: 'Admin' }
        const res = await userRequest.post('/sendalert', newData)
        console.log('Response Status:', res.status);
    } catch (error) {
        console.log(error);
    }
}

//get alert
export const getAlert = async () => {
    try {
        const res = await userRequest.get('/getalert')
        console.log('Response Status:', res.status);
        return res.data
    } catch (error) {
        console.log(error);
    }
}


// <-------------------Chats-------------------> //
// create chat
export const createChat = async (data) => {
    console.log(data);
    try {
        const res = await userRequest.post('/createchat', data)
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

// user chats
export const userChats = async () => {
    try {
        const res = await userRequest.get(`/chats/${userId}`)
        console.log('Response Status:', res.status);
        return res.data
    } catch (error) {
        console.log(error);
    }
}

// send message
export const sendMessage = async (chatId, senderId, text) => {
    try {
        const res = await userRequest.post(`/chat/messages/`, {
            chatId: chatId,
            senderId: senderId,
            text: text,
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

// fetch chat b/w users
export const viewMessages = async (chatId) => {
    try {
        const res = await userRequest.get(`/chat/messages/${chatId}`)
        return res.data
    } catch (error) {
        console.log(error);
    }
}