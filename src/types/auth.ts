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

export interface User extends SignUp {
  uuid: string
  created_at?: string
}

export interface ResetPassword extends Login {
  token: string
  password_confirmation: string
}
