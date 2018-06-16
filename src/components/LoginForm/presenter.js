import React from 'react'
import PropTypes from 'prop-types'
import FacebookLogin from 'react-facebook-login'
import styles from 'shared/formStyles.scss'

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
        onChange={props.handleInputChange}
      />
    </form>
    <span className={styles.divider}>or</span>
    <FacebookLogin
      appId="480048199093245"
      autoLoad={false}
      fields="name,email,picture"
      callback={props.handleFacebookLogin}
      cssClass={styles.facebookLink}
      icon="fa-facebook-square"
      textButton={context.t("Log in with Facebook")}
    />
    <span className={styles.forgotLink}>Forgot password?</span>
  </div>
)

LoginForm.propTypes = {
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleFacebookLogin: PropTypes.func.isRequired
}

LoginForm.contextTypes = {
  t: PropTypes.func.isRequired
}

export default LoginForm