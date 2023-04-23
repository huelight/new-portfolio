import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase";


const Login = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
       const userDocRef = await createUserDocumentFromAuth(user)
    }
    return (
        <div>
            <h1 style={{ color: "white" }}>Login Now</h1>
            <button onClick={logGoogleUser}> Signin with Google Popup</button>
    </div>
    )
}

export default Login;