import React, { Component } from "react"
import cn from "classnames"
import styles from "./email.module.css"
import * as emailjs from "emailjs-com"

const {
  container,
  title,
  formContainer,
  fields,
  field,
  half,
  input,
  textareaWraper,
  textareaField,
  actions,
  btn,
  primary,
  report,
} = styles

class EmailForm extends Component {
  constructor(props) {
    super(props)
    this.reportView = React.createRef()
    console.log("email", process.env.GATSBY_EMAILJS_RECEIVER)
  }

  state = {
    name: "",
    email: "",
    message: "",
    sending: false,
    submited: false,
  }

  static sender = "kinev1979@gmail.com"

  handleCancel = event => {
    event.preventDefault()

    this.setState({
      name: "",
      email: "",
      message: "",
      sending: false,
      submited: false,
      sent: false,
    })

    this.reportView.current.innerHTML = ""
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { name, email, message } = this.state

    if (name && email && message) {
      this.sendEmail(
        process.env.GATSBY_EMAILJS_TEMPLATEID,
        this.sender,
        process.env.GATSBY_EMAILJS_RECEIVER,
        name,
        email,
        message
      )

      this.setState({
        sending: true,
        submited: true,
      })

      this.reportView.current.innerHTML = "отправка сообщения"
    } else {
      this.reportView.current.innerHTML = "нужно заполнить все поля"
      return false
    }
  }

  sendEmail = (templateId, senderEmail, receiverEmail, name, email, message) => {
    emailjs
      .send(
        "gmail",
        templateId,
        {
          senderEmail,
          receiverEmail,
          name,
          email,
          message,
        },
        process.env.GATSBY_EMAILJS_UID
      )
      .then(res => {
        this.setState({
          sent: true,
        })
        this.hand
        this.reportView.current.innerHTML = "сообщение успешно отправлено"
      })
      // Handle errors here however you like
      .catch(err => console.error("Failed to send feedback. Error: ", err))
  }

  render() {
    const { sent } = this.state
    return (
      <section className={container}>
        <h2 className={title}>отправить сообщение</h2>
        <form className={formContainer} onSubmit={sent ? this.handleCancel : this.handleSubmit}>
          <div className={fields}>
            {sent ? null : (
              <>
                <div className={cn(field, half)}>
                  <input
                    className={input}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Имя"
                    onChange={this.handleChange}
                  />
                </div>
                <div className={cn(field, half)}>
                  <input
                    className={input}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Эл. Почта"
                    onChange={this.handleChange}
                  />
                </div>
                <div className={field}>
                  <div className={textareaWraper}>
                    <textarea
                      className={textareaField}
                      name="message"
                      id="message"
                      placeholder="Собщение"
                      rows="1"
                      style={{ overflow: "hidden", resize: "none", height: 79 }}
                      onChange={this.handleChange}
                    ></textarea>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className={actions}>
            <input
              type="submit"
              value={sent ? "показать форму" : "Отправить"}
              className={cn(btn, primary)}
            />
            <p className={report} ref={this.reportView}></p>
          </div>
        </form>
      </section>
    )
  }
}

export default EmailForm
