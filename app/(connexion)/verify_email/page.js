import { verifyWitnCredentials } from '@/actions/authActions'
import React from 'react'


const VerifyPage = async ({searchParams: {token}}) => {
    const res = await verifyWitnCredentials(token)

  return (
      <div>{res?.msg}</div>
  )
}

export default VerifyPage