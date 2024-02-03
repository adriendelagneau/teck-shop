"use server"

import { connectToDatabase } from "@/lib/db"
import User from "@/lib/models/User"
import { redirect } from "next/navigation"
import bcrypt from "bcryptjs";
import { generateToken, verifyToken } from '@/utils/token' 
import { Resend } from 'resend'
import ContactFormEmail from "@/emails/contact-form-email";

const BASE_URL = process.env.NEXT_PUBLIC_NEXTAUTH_URL;

export const registerWithCredential = async (data) => {
       
    await connectToDatabase()

    try {
        const user = await User.findOne({ email: data.email })
        if (user) throw new Error('Email already exist')
        
        if (data.password) {
            const salt = await bcrypt.genSalt(10)
            data.password = await bcrypt.hash(data.password, salt);

            const token = generateToken({ user: data })
            

            const resend = new Resend(process.env.RESEND_API_KEY)

            let message = "hello wold"
            let name = await data.name
            let email = await data.email
            let url = `${BASE_URL}/verify_email?token=${token}`

             await resend.emails.send({
                from: 'onboardding@resend.dev',
                to: [email],
                subject: 'Contact form submission',
                text: `Name: ${name}\nEmail: ${data.email}\nMessage: ${message}`,
                react: ContactFormEmail({ email, url })
              })


            /*
            await sendEmail({
                to: data.email,
                url: `${BASE_URL}/verify_email?token=${token}`,
                text: 'VERIFY EMAIL'
            })
            */
        }
        
        return {msg: "verification mail has been send"}
    } catch (err) {
        redirect(`/errors?error=${err.message}`)
    }
}

export const findUserByEmail = async (email) => {
    
    await connectToDatabase()
    
    try {
        const userExist = await User.findOne({ email: email })

        if (userExist) return  true
        
       else return false
    } catch (err) {
        redirect(`/errors?error=${err.message}`)
    }
}

export const verifyWitnCredentials = async (token) => {
    
    await connectToDatabase()
    
    try {
        const { user } = verifyToken(token)
     
        const userExist = await User.findOne({ email: user.email })
        
        if (userExist) return { msg: "verify success !" }
        
        const newUser = new User(user)
        
        await newUser.save()
        return {msg: "verify success"}
    } catch (err) {
        redirect(`/errors?error=${err.message}`)
    }
}