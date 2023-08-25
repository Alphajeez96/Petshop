import { describe, it, expect } from 'vitest'
import { type Blob } from '@/types/global'

import {
  retrieveFile,
  retrieveBlobData,
  getRandomArraySubset,
  trimText,
  capitalizeText,
  formatCurrency,
  underscoreFormatter,
  getInitials
} from './global'
describe('Global Utility Functions', () => {
  describe('retrieveFile', () => {
    it('should retrieve the file URL', () => {
      const file: string = 'dog-cough-syrup'
      const expectedUrl: string = 'http://pet-shop.buckhill.com.hr/api/v1/file/dog-cough-syrup'

      const result: string = retrieveFile(file)
      expect(result).toBe(expectedUrl)
    })
  })

  describe('retrieveBlobData', () => {
    it('should retrieve blob data', () => {
      const inputData: Blob[] = [
        {
          title: 'Title 1',
          content: 'Content 1',
          metadata: {
            image: ''
          }
        },
        {
          title: 'Second title',
          content: 'This is the second content', // Changed content for diversity
          metadata: {
            image: ''
          }
        }
      ]

      const expectedOutput: Blob[] = [...inputData]
      const result: Blob[] = retrieveBlobData(inputData)

      expect(result).toEqual(expectedOutput)
    })
  })

  describe('getRandomArraySubset', () => {
    it('should get a random array subset', () => {
      const dataArray: number[] = [1, 2, 3, 4, 5, 6]
      const numberOfItems: number = 3

      const result: number[] = getRandomArraySubset(dataArray, numberOfItems)

      expect(result).toHaveLength(numberOfItems)
      expect(result.every((item) => dataArray.includes(item))).toBe(true)
    })
  })

  describe('trimText', () => {
    it('should trim text', () => {
      const text: string = 'This should work as expected yeah?'
      const maxLength: number = 15
      const expectedOutput: string = 'This should ...'

      const result: string = trimText(text, maxLength)

      expect(result).toBe(expectedOutput)
    })

    it('should not trim text if maxLength is greater than text length', () => {
      const text: string = 'Short text'
      const maxLength: number = 50

      const result: string = trimText(text, maxLength)

      expect(result).toBe(text)
    })
  })

  describe('capitalizeText', () => {
    it('should capitalize text', () => {
      const inputText: string = 'hello world'
      const expectedOutput: string = 'Hello world'

      const result: string = capitalizeText(inputText)

      expect(result).toBe(expectedOutput)
    })

    it('should return an empty string if input is empty', () => {
      const inputText: string = ''

      const result: string = capitalizeText(inputText)

      expect(result).toBe('')
    })
  })

  describe('formatCurrency', () => {
    it('should format currency', () => {
      const inputValue: number = 15.67
      const expectedOutput: string = '15,67 Kn'

      const result: string = formatCurrency(inputValue)

      expect(result).toBe(expectedOutput)
    })

    it('should return an empty string if input is not provided', () => {
      const inputValue: number = NaN

      const result: string = formatCurrency(inputValue)

      expect(result).toBe('')
    })
  })

  describe('underscoreFormatter', () => {
    it('should format text with underscores', () => {
      const inputText: string = 'example_text'
      const expectedOutput: string = 'Example Text'

      const result: string = underscoreFormatter(inputText)

      expect(result).toBe(expectedOutput)
    })

    it('should return an empty string if input is empty', () => {
      const inputText: string = ''

      const result: string = underscoreFormatter(inputText)

      expect(result).toBe('')
    })
  })
})

describe('getInitials', () => {
  it('should return initials for valid first and last names', () => {
    const firstName: string = 'Prince'
    const lastName: string = 'Chukwudire'
    const expectedOutput: string = 'PC'

    const result: string = getInitials(firstName, lastName)

    expect(result).toBe(expectedOutput)
  })

  it('should return an empty string if either first or last name is missing', () => {
    const firstName: string = 'John'
    const lastName: string = ''
    const expectedOutput: string = ''

    const result: string = getInitials(firstName, lastName)

    expect(result).toBe(expectedOutput)
  })

  it('should return an empty string if both first and last names are missing', () => {
    const firstName: string = ''
    const lastName: string = ''
    const expectedOutput: string = ''

    const result: string = getInitials(firstName, lastName)

    expect(result).toBe(expectedOutput)
  })
})
