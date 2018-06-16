import React from 'react'
import PropTypes from 'prop-types'
import FacebookLogin from 'react-facebook-login'
import styles from 'shared/formStyles.scss'

const SignupForm = (props, context) => (
  <div className={styles.formComponent}>
    <h3 className={styles.signupHeader}>
      Sign up to see photos and videos from your friends.
    </h3>
    <FacebookLogin
      appId="480048199093245"
      autoLoad={false}
      fields="name,email,picture"
      callback={props.handleFacebookLogin}
      cssClass={styles.facebookLink}
      icon="fa-facebook-square"
      textButton={context.t("Log in with Facebook")}
    />
    <span className={styles.divider}>or</span>
    <form 
      className={styles.form}
      onSubmit={props.handleSubmit}
    >
      <input 
        type="email"
        name="email"
        placeholder="Email"
        className={styles.textInput}
        value={props.emailValue}
        onChange={props.handleInputChange}
      />
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        className={styles.textInput}
        value={props.fullNameValue}
        onChange={props.handleInputChange}
      />
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
        value="Sign up"
        className={styles.button}
        onChange={props.handleInputChange}
      />
    </form>
    <p className={styles.terms}>
      By signing up, you agree to our <span>Terms & Privacy Policy</span>.
    </p>
  </div>
)

SignupForm.propTypes = {
  emailValue: PropTypes.string.isRequired,
  fullNameValue: PropTypes.string.isRequired,
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleFacebookLogin: PropTypes.func.isRequired
}

SignupForm.contextTypes = {
  t: PropTypes.func.isRequired
}

export default SignupForm