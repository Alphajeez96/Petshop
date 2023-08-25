import { AxiosError } from 'axios'
import { useToast } from 'vue-toastification'

interface ValidationError {
  [field: string | number]: string[]
}

interface ErrorResponse {
  error?: string
  errors?: ValidationError
}

const toast = useToast()

const showDefaultNotification = (message: string): void => {
  toast.error(message)
}

const showValidationNotification = (errors: ValidationError, title: string): void => {
  const errorCount = Object.values(errors).length

  if (errorCount < 1) {
    return showDefaultNotification(title)
  }

  const firstErrorValue = Object.values(errors)[0]
  const message = Array.isArray(firstErrorValue) ? firstErrorValue[0] : title

  showDefaultNotification(message)
}

const errorHandler = (error: AxiosError): void => {
  const data: ErrorResponse = error.response?.data || {}
  const status = error.response?.status
  const message: string = data.error || 'An Error Occured'

  switch (status) {
    // Handle validation errors
    case 422:
      showValidationNotification(data.errors || {}, message)
      break

    // Any other generic notification
    default:
      showDefaultNotification(message)
  }
}

export default errorHandler
