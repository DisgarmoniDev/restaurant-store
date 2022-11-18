import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const FormAuth = ({ title, handleClick , titleForm, titleCheckBtn, pathPage }) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

  const {
    register,
    formState: {
      errors
    },
    handleSubmit
  } = useForm({
    mode:'onBlur'
  })

  const onSubmit = () => handleClick(email, pass) 

  const checked = useSelector(state => state.user.check)

  function checkLogAndPass (checked) {
    if (checked == 1) {
      return 'Логин или пароль неверен'
    } else {
      return ''
    }
  }

  return (
    <div className='blockForm'>
      <div className="link">
      <Link to={pathPage}><button className='toggleBtn'>{titleCheckBtn}</button></Link>
      </div>
      
      <form className='blockForm__form' onSubmit={handleSubmit(onSubmit)}>
        
        <h1 className='blockForm__form-title'>{titleForm}</h1>

        <div className="blockForm__form-email">
          <input
            {...register('emailLogin', {
              required: 'Поле обязательно к заполнению',
              pattern: {
                value: reg,
                message: 'Введён не корректный email'
              }
            })}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Логин'
          />
          <div className='error'>
            {errors?.emailLogin && <p>{errors?.emailLogin?.message || "Error!!!"}</p>}
          </div>
        </div>

        <div className="blockForm__form-pass">
        <input 
          {...register('emailPass', {
              required: 'Поле обязательно к заполнению',
              minLength: {
                value: 4,
                message: 'Минимальная длина пароля 4 символа'
              }
          })}
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder='Пароль'
        />
        <div className='error'>
          {errors?.emailPass && <p>{errors?.emailPass?.message || "Error!!!"}</p>}
        </div>
        </div>

        <div className="checkedLogin"><p>{checkLogAndPass(checked)}</p>
        <button className='blockForm__form-btn' type='submit'>
          {title}
        </button>
        </div>
        
      </form>
    </div>
  )
}

export {FormAuth}