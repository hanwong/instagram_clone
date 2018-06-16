import React from "react"
import PropTypes from "prop-types"
import Ionicon from "react-ionicons"
import styles from "shared/formStyles.scss"

const LoginForm = (props, context) => (
  <div className={styles.formComponent}>
    <form
      className={styles.form}
      onSubmit={props.handleSubmit}
    >
      <input 
        type="text"
        name="username"
        placeholder="Username"
        className={styles.textInput} 
        value={props.usernameValue}
        onChange={props.handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className={styles.textInput}
        value={props.passwordValue}
        onChange={props.handleInputChange}
      />
      <input
        type="submit"
        value="Log in"
        className={styles.button}
      />
    </form>
    <span className={styles.divider}>or</span>
    <span className={styles.facebookLink}>
      <Ionicon icon="logo-facebook" fontSize="20px" color="#385185" /> Log in with Facebook
    </span>
    <span className={styles.forgotLink}>Forgot password?</span>
  </div>
)

LoginForm.propTypes = {
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

LoginForm.contextTypes = {
  t: PropTypes.func.isRequired
}

export default LoginForm