import React from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser'; //necessário instalar emailjs

function Contatos() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function sendEmail(e) {
        e.preventDefault();

        if (name === '' || email === '' || message === '') {
            alert("Preencha todos os campos");
            return;
        }

        const templateParams = {
            from_name: name,
            email: email,
            message: message
        }

        emailjs.send("service_fhdtqca", "template_1enbt2d", templateParams, "ikOnbZRr6I4sF_uS2")
            .then((response) => {
                console.log("Email enviado", response.status, response.text)
                setName('')
                setEmail('')
                setMessage('')

                alert("Enviado, agradecemos o contato.")

            }, (err) => {
                console.log("ERRO:", err)
            })
    }

    return (
        <div>
            {/* Container (Contact Section)*/}
            <div id="contato" className="container-fluid bg-grey">
                <h2 className="text-center">CONTATO</h2>
                <div className="row" >
                    <div className="col-sm-5">
                        <p>Entre em contato conosco e retornaremos em até 24 horas.</p>
                        <p><span className="glyphicon glyphicon-map-marker"></span> Teresópolis, RJ</p>
                        <p><span className="glyphicon glyphicon-phone"></span> +00 1515151515</p>
                        <p><span className="glyphicon glyphicon-envelope"></span> nocpolaco@gmail.com</p>
                    </div>
                    <div className="col-sm-7 ">
                        <form className='' onSubmit={sendEmail}>
                            <div className="row">
                                <div className="col-sm-6 form-group">
                                    <input className="form-control" id="name" name="name" placeholder="Nome"
                                        onChange={(e) => setName(e.target.value)}
                                        value={name} type="text" required />
                                </div>

                                <div className="col-sm-6 form-group">
                                    <input className="form-control" id="email" name="email" placeholder="Email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email} type="email" required />
                                </div>

                            </div>
                            <textarea className="form-control" id="comments" name="comments" placeholder="Comment"
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                                rows="5"></textarea><br />

                            <div className="row">
                                <div className="col-sm-12 form-group" onSubmit={sendEmail}>
                                    <input className="btn btn-default pull-right" type="submit" value="Enviar" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contatos;