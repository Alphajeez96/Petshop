import moment from 'moment'
import { type Blob } from '@/types/global'

export const retrieveFile = (file: string) => {
  if (file) return `http://pet-shop.buckhill.com.hr/api/v1/file/${file}`
}

export const retrieveBlobData = (data: Blob[]): Blob[] => {
  return data.map(({ title, content, metadata }: Blob) => {
    return {
      title,
      content,
      metadata
    }
  })
}

export const getRandomArraySubset = <T>(dataArray: T[], numberOfItems: number): T[] => {
  if (numberOfItems <= 0 || numberOfItems > dataArray.length) {
    throw new Error('Invalid number of items')
  }

  const shuffledArray = dataArray.slice().sort(() => Math.random() - 0.5)
  return shuffledArray.slice(0, numberOfItems)
}

export const trimText = (text: string, maxLength: number): string => {
  if (text) {
    if (text.length <= maxLength) {
      return text
    } else {
      return text.substring(0, maxLength - 3) + '...'
    }
  }
  return ''
}

export const capitalizeText = (value: string): string => {
  if (value) {
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
  return ''
}

export const debounce = (func: () => void, delay: number): (() => void) => {
  let timer: ReturnType<typeof setTimeout>
  return () => {
    clearTimeout(timer)
    timer = setTimeout(func, delay)
  }
}

export const scrollToTop = () => {
  window.scrollTo({
    top: 0
  })
}

export const getInitials = (firstName: string, lastName: string): string => {
  if (!firstName || !lastName) return ''

  const firstInitial = firstName.charAt(0).toUpperCase()
  const lastInitial = lastName.charAt(0).toUpperCase()
  return `${firstInitial}${lastInitial}`
}

export const formatDate = (value: string): string => {
  if (!value) return ''
  return moment(value).format('D. M. YYYY')
}

export function formatCurrency(value: number): string {
  const formattedValue = value.toFixed(2).replace('.', ',')
  const parts = formattedValue.split(',')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  return `${parts.join(',')} Kn`
}
