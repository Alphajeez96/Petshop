export interface Login {
  email: string
  password: string
}

export interface SignUp extends Login {
  first_name: string
  last_name: string
  address: string
  phone_number: string
  password_confirmation: string
  is_marketing?: boolean
}
