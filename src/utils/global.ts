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

export const parseInputToNumber = (input: string | number): number => {
  if (input) {
    const sanitizedValue = input.replace(/[^\d.]/g, '') // Remove non-numeric characters
    return parseFloat(sanitizedValue) // Parse the sanitized value to a float
  }

  return 0
}
