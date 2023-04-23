import './progress-form.scss'

import ButtonMain from '../button/ButtonMain'

import React, { useState } from 'react'

const ProgressForm = ({ data, setData }) => {
  const [dateStart, setDateStart] = useState('')
  const [dateEnd, setDateEnd] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')

  return (
    <form className="work__form">
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
        Потрачено средств
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div className="description">
        Описание работ
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <ButtonMain
        styleComponent="default"
        text={'Добавить'}
        onClick={(e) => {
          e.preventDefault()
          setData({
            dateStart: dateStart,
            dateEnd: dateEnd,
            price: price,
            description: description,
          })
        }}
      />
    </form>
  )
}

export default ProgressForm
