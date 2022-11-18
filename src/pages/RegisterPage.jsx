import { SignUp } from '../componets/auth/SignUp'
import { Link } from 'react-router-dom'
import './styles/RegisterPage.scss'

const RegisterPage = () => {
  return (
    <div className='regLogin'>
      <SignUp />
      {/* <p>
        Already have an account? <Link to='/login'>Sing in</Link>
      </p> */}
    </div>
  )
}

export default RegisterPage