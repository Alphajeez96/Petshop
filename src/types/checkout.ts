export interface Checkout {
  details: {
    firstName?: string
    lastName?: string
    addressLine1?: string
    addressLine2?: string
    consent?: boolean
    cardNumber?: string
    cvv?: string
    expiry?: string
    iBAN?: string
    name?: string
    refCode?: string
    swiftCode?: string
    text: string
  }
  type: string
}

export interface Address {
  firstName: string
  lastName: string
  addressLine1: string
  addressLine2: string
  city: string
  state: string
  zip: string
  country: string
}

export interface Payment {
  details: {
    [key: string]: string | boolean
  }
  type: string
}
