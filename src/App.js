import './App.css'
import React from 'react'

function App() {
  const [oklad, setOklad] = React.useState('')
  const [days, setDays] = React.useState('')
  const [prem, setPrem] = React.useState('')
  const [shtraf, setShtraf] = React.useState('')
  const [otpusk, setOtpusk] = React.useState(0)
  const [boln, setBoln] = React.useState(0)
  // const [month, setMonth] = React.useState('')
  const [isActive, setActive] = React.useState(false)

  // const arr = [16, 19, 22, 21, 18, 21, 21, 23, 22, 21, 21, 22]

  const changeHandler1 = (e) => {
    setOklad(e.target.value)
  }

  const changeHandler2 = (e) => {
    setDays(e.target.value)
  }

  const changeHandler3 = (e) => {
    setPrem(e.target.value)
  }

  const changeHandler4 = (e) => {
    setShtraf(e.target.value)
  }
  
  const changeHandler5 = (e) => {
    setOtpusk(e.target.value)
  }

  const changeHandler6 = (e) => {
    setBoln(e.target.value)
  }

  // const changeHandler5 = (e) => {
  //   setMonth(e.target.value)
  // }

  const toggleClass = () => {
    setActive(!isActive)
  }

  return (
    <div className='container'>
      <div className='row main-content mt-50'>
        <div className='col-md p-0'>
          <div className='shapka p-15 mb-15'>Начисление зарплаты</div>
          <div className='align-center p-20'>
            <div class='input-group mb-3'>
              <span class='input-group-text' id='basic-addon1'>
                В день
              </span>
              <input
                value={oklad}
                onChange={changeHandler1}
                type='text'
                class='form-control'
                placeholder='0'
                aria-label='Username'
                aria-describedby='basic-addon1'
              ></input>
            </div>
            <div class='input-group mb-3'>
              <span class='input-group-text' id='basic-addon1'>
                Количество отработанных дней
              </span>
              <input
                value={days}
                onChange={changeHandler2}
                type='text'
                class='form-control'
                placeholder='0'
                aria-label='Username'
                aria-describedby='basic-addon1'
              ></input>
            </div>
            <div class='input-group mb-3'>
              <span class='input-group-text' id='basic-addon1'>
                Премия
              </span>
              <input
                value={prem}
                onChange={changeHandler3}
                type='text'
                class='form-control'
                placeholder='0'
                aria-label='Username'
                aria-describedby='basic-addon1'
              ></input>
            </div>
            <div class='input-group mb-3'>
              <span class='input-group-text' id='basic-addon1'>
                Штраф
              </span>
              <input
                value={shtraf}
                onChange={changeHandler4}
                type='text'
                class='form-control'
                placeholder='0'
                aria-label='Username'
                aria-describedby='basic-addon1'
              ></input>
            </div>
            <div class='input-group mb-3'>
              <span class='input-group-text' id='basic-addon1'>
                Отпуск
              </span>
              <input
                value={otpusk}
                onChange={changeHandler5}
                type='text'
                class='form-control'
                placeholder='0'
                aria-label='Username'
                aria-describedby='basic-addon1'
              ></input>
            </div>
            <div class='input-group mb-3'>
              <span class='input-group-text' id='basic-addon1'>
                Больничный
              </span>
              <input
                value={boln}
                onChange={changeHandler6}
                type='text'
                class='form-control'
                placeholder='0'
                aria-label='Username'
                aria-describedby='basic-addon1'
              ></input>
            </div>
            {/* <div class='input-group mb-3'>
              <span class='input-group-text' id='basic-addon1'>
                Номер месяца рассчета оплаты
              </span>
              <input
                value={month}
                onChange={changeHandler5}
                type='text'
                class='form-control'
                aria-label='Username'
                aria-describedby='basic-addon1'
              ></input>
            </div>
            <p>Количество рабочих дней в месяце:  {arr[month-1]}</p> */}
            <button
              className='btn brown btn-secondary mt-15'
              type='button'
              id='button-addon2'
              onClick={toggleClass}
            >
              Рассчитать
            </button>
            <div className={isActive ? 'd-block' : 'd-none'}>
              <p className='mt-15'>Начисленная сумма зарплаты: {(oklad * days + Number(prem) - shtraf + boln * 0.6 * oklad + oklad * otpusk).toFixed(2)}</p>
              <p className='mt-15'>Сумма налога: {((oklad * days + Number(prem) - shtraf + boln * 0.6 * oklad + oklad * otpusk) * 0.13).toFixed(2)}</p>
              <p className='mt-15'>Сумма ЗП за вычетом НДФЛ: {((oklad * days + Number(prem) - shtraf + boln * 0.6 * oklad + oklad * otpusk) - (oklad * days + Number(prem) - shtraf + boln * 0.6 * oklad + oklad * otpusk) * 0.13).toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
