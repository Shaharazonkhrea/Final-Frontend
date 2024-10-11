import {
	signInWithGoogle
} from "../firebaseConfig"
import { useContext, useState } from "react"
import AuthContext from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"

const SignIn = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const navigate = useNavigate()

    if (user) {
        navigate("/favorites")
        return <></>
    }
    return (
        <div className="sign-in container">
            <h2>Sign in with Google</h2>
            <button onClick={signInWithGoogle}>Sign In</button>
        </div>
    )
}

export default SignIn