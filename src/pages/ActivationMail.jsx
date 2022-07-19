import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../utils/notification/Notification'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

function ActivationEmail() {
    const {activation_token} = useParams()
    const [err, setErr] = useState('')
    const [success, setSuccess] = useState('')

    useEffect(() => {
        if(activation_token){
            const activationEmail = async () => {
                try {
                    const res = await axios.post('https://trainable-backend.onrender.com/user/activation', {activation_token})
                    setSuccess(res.data.msg)
                } catch (err) {
                    err.response.data.msg && setErr(err.response.data.msg)
                }
            }
            activationEmail()
        }
    },[activation_token])

    return (
        <div className="active_page">
            <Navbar/>
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
            <Footer />
        </div>
    )
}

export default ActivationEmail
