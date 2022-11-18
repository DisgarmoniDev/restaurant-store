import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useDispatch} from 'react-redux'
import { setUser } from '../../store/reducers/userSlise'
import {FormAuth } from './Form' 
import { useNavigate } from 'react-router-dom'


const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken
        }))
        navigate('/')
      })
      .catch(console.error)

  }

  return (
    <FormAuth 
      titleForm='Регистрация'
      title='Зарегистрироваться'
      handleClick={handleRegister}
      titleCheckBtn='Авторизоваться'
      pathPage='/login'
    />
  )
}

export {SignUp}