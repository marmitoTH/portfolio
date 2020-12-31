import { FormEvent, useRef, useState } from 'react'
import axios from 'axios'
import * as Styled from './styles'

export interface Feedback {
  type: 'error' | 'success'
  message: string
}

const ContactForm = () => {
  const [sending, setSending] = useState<boolean>()
  const [feedback, setFeedback] = useState<Feedback>()
  const emailInput = useRef<HTMLInputElement>()
  const messageInput = useRef<HTMLTextAreaElement>()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    const base = process.env.NEXT_PUBLIC_EMAIL_PROVIDER
    const email = event.currentTarget.elements['email'].value as string
    const message = event.currentTarget.elements['message'].value as string

    event.preventDefault()

    if (!email || !message) {
      setFeedback({
        type: 'error',
        message: 'Please, complete all fields.'
      })
    } else if (!email.match(/^.+@.+$/) || email.length > 64) {
      setFeedback({
        type: 'error',
        message: 'Please, use a valid email.'
      })
    } else if (message.length > 512) {
      setFeedback({
        type: 'error',
        message: 'Your message is too big!!!'
      })
    } else {
      setSending(true)

      await axios.post(base, { email, message }).then(() => {
        setFeedback({
          type: 'success',
          message: 'Thanks, your email has been sent!'
        })

        emailInput.current.value = ''
        messageInput.current.value = ''
      }).catch(() => {
        setFeedback({
          type: 'error',
          message: 'Something went wrong with the email provider.'
        })
      })

      setSending(false)
    }
  }

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <input
        ref={emailInput}
        type='email'
        name='email'
        maxLength={64}
        placeholder='E-mail'
        required
      />
      <textarea
        ref={messageInput}
        name='message'
        rows={3}
        maxLength={512}
        placeholder='Message'
        required
      />
      <Styled.Button
        type='submit'
        disabled={sending}
      >
        Send
      </Styled.Button>
      <Styled.Feedback type={feedback?.type}>
        {feedback?.message}
      </Styled.Feedback>
    </Styled.Form>
  )
}

export default ContactForm
