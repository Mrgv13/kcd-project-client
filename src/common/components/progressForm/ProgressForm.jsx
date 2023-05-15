import './progress-form.scss'

import ButtonMain from '../button/ButtonMain'

import { createWorkAtt } from '../../http/workAtt-api'

import React, { useState } from 'react'
import CurrencyInput from 'react-currency-input-field'

const ProgressForm = ({ id }) => {
  const [dateStart, setDateStart] = useState('')
  const [dateEnd, setDateEnd] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')

  const addWorkAtt = (workAtt) => {
    createWorkAtt(workAtt).then((data) => data)
  }

  return (
    <form className="work__form">
      <div className="description">
        Название
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength={700}
          required
        />
      </div>
      <div className="date">
        <span>Продолжительность выполнения, дней</span>
        <div className="date__input">
          <input
            type="date"
            value={dateStart}
            onInput={(e) => setDateStart(e.target.value)}
            required
          />
          <input
            type="date"
            value={dateEnd}
            onInput={(e) => setDateEnd(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="price">
        Цена
        <CurrencyInput
          onValueChange={(value) => setPrice(value)}
          prefix="₽ "
          groupSeparator=" "
          decimalSeparator="."
          maxLength={12}
          step={1}
        />
      </div>

      <ButtonMain
        styleComponent="default"
        text={'Добавить'}
        onClick={(e) => {
          e.preventDefault()

          addWorkAtt({
            date_start: dateStart,
            date_end: dateEnd,
            price: +price,
            work_name: description,
            workId: id,
          })
          window.location.reload()
        }}
      />
    </form>
  )
}

export default ProgressForm
