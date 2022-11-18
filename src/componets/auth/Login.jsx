import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {FormAuth } from './Form' 
import {useDispatch} from 'react-redux'
import { setUser, checkUser } from '../../store/reducers/userSlise'
import { useNavigate } from 'react-router-dom'



const Login = ({ check }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({user})=> {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken
        }))
        navigate('/')
      })
      .catch(()=> {
        dispatch(checkUser())
      })
      // ()=>alert('Логин или пароль неверен')
  }



  return (
    <FormAuth 
      titleForm='Вход'
      title='Войти'
      handleClick={handleLogin}
      checkedLogin={check}
      titleCheckBtn='Зарегистрироваться'
      pathPage='/registration'
    />
  )
}

export {Login}