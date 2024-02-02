"use server"

import User from "@/lib/models/User"


export const signUpWithCredential = async (data) => {
       
    await connectToDatabase()

    try {
        const user = await User.findOne({ email: data.email })
        if (user) throw new Error('Email already exist')
        
        if (data.password) {
            const salt = await bcrypt.genSalt(10)
            data.password = await bcrypt.hash(data.password, salt);

            const token = generateToken({ user: data })
            
            await sendEmail({
                to: data.email,
                url: `${BASE_URL}/verify_email?token=${token}`,
                text: 'VERIFY EMAIL'
            })
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
        console.log(userExist, 'tt')
        if (userExist) return  true
        
       else return false
    } catch (err) {
        redirect(`/errors?error=${err.message}`)
    }
}