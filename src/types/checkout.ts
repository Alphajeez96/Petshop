type Text = 'Credit Card' | 'Cash on delivery' | 'Bank transfer'

export type PaymentTag = 'credit_card' | 'cash_on_delivery' | 'bank_transfer'

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
// export interface Payment {
//   details: CreditCard | CashDelivery | BankTransfer
//   type: PaymentTag
// }

export interface CreditCard {
  cardNumber: string
  cvv: string
  expiry: string
  text: Text
}

export interface CashDelivery extends Omit<Address, 'city' | 'state' | 'zip' | 'country'> {
  consent: boolean
  text: Text
}

export interface BankTransfer {
  iBAN: string
  name: string
  refcode: string
  swiftCode: string
  text: Text
}
