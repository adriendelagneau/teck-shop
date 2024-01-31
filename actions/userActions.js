'use server'

export const subscribeToNewsletter = async (email) => {
    await connectToDatabase();

    try {
        // Verify if user have already subscribe
        const user = await Newsletter.findOne({email: email})
        if (user) return { msg: "your already subscribe to our newsletter" }
        
        const newSubscriber = new Newsletter({email})

        await newSubscriber.save()
        return { msg: "your subscribe to our newsletter" }
  
    } catch (err) {
      console.log('Error getting user with order history:', err);
      redirect(`/errors?error=${err.message}`);
    }
  };