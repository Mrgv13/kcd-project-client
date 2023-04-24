import { useEffect, useState } from 'react'

const useValidation = (value, validations) => {
  const [isEmptyErr, setIsEmptyErr] = useState(true)
  const [isEmailErr, setIsEmailErr] = useState(false)
  const [minLengthErr, setMinLengthErr] = useState(false)
  const [maxLengthErr, setMaxLengthErr] = useState(false)
  const [inputValid, setInputValid] = useState(false)
  const [errorText, setErrorText] = useState('')

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          if (value.length < validations[validation]) {
            setMinLengthErr(true)
            setErrorText(
              `Длинна должна привышать ${validations[validation]} символов`,
            )
          } else {
            setMinLengthErr(false)
          }
          break

        case 'maxLength':
          if (value.length > validations[validation]) {
            setMaxLengthErr(true)
            setErrorText(
              `Длинна не должна привышать ${validations[validation]} символов`,
            )
          } else {
            setMaxLengthErr(false)
          }
          break
        case 'isEmail':
          const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

          if (re.test(String(value).toLowerCase())) {
            setIsEmailErr(false)
          } else {
            setIsEmailErr(true)
            setErrorText(`Введите корректный адрес электронной почты`)
          }
          break
      }
    }
  }, [value])

  useEffect(() => {
    if (minLengthErr || maxLengthErr || isEmailErr) {
      setInputValid(false)
    } else {
      setInputValid(true)
    }
    setErrorText('')
  }, [isEmptyErr, minLengthErr, maxLengthErr, isEmailErr])

  return {
    isEmptyErr,
    minLengthErr,
    maxLengthErr,
    isEmailErr,
    errorText,
    inputValid,
  }
}

export default useValidation
