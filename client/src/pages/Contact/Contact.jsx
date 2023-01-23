import React from 'react'
import Container from "../../components/UI/container/Container"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons'
import "./style.css"

export default function Contact() {
    return (
        <Container>
            <div className='contact-types' >
                <div className='contact-type'>
                    <FontAwesomeIcon icon={faLocationPin} size="xl" />
                    <h3>Adress</h3>
                    <p>Площа Конституції, 7, Харків, Харківська область, 61000</p>
                </div>



                <div className='contact-type'>
                    <FontAwesomeIcon icon={faMessage} size="xl" />
                    <h3>Email</h3>
                    <p>alex24072003s@gmail.com</p>
                </div>



                <div className='contact-type'>
                    <FontAwesomeIcon icon={faPhone} size="xl" />
                    <h3>Phone</h3>
                    <p>380660019845</p>
                </div>
            </div>

            <iframe className='map-frame' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2156.988991145913!2d36.231769553150286!3d49.99060981971442!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0f103cfc483%3A0xa6ebc5504718327b!2z0KXQsNGA0YzQutC-0LLRgdC60LjQuSDQs9C-0YDQvtC00YHQutC-0Lkg0YHQvtCy0LXRgg!5e0!3m2!1sru!2sua!4v1666541551678!5m2!1sru!2sua" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </Container>
    )
}
