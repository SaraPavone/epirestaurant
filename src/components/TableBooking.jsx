import { Component } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

class TableBooking extends Component {

    state = {
        reservation: {
            name: "",
            phone: "",
            numberOfPeople: 1,
            smoking: false,
            dateTime: "",
            specialRequests: "",
        }
    }


    // per non richiamare l'onchange di ogni input posso usare questa funzione riutilizzabile richiamandola quando mi serve
    //#### handleChange = (e, property) => {
    //  this.setState({
    //    reservation: {
    //      ...this.state.reservation,
    //    [property]: e.target.value
    //}
    // })
    //}


   handleSubmit = (e) => {
       e.preventDefault();
       //inviamo i dati alle API di Epicode per salvare la prenotazione
       //facciamo il fetch e passiamo i dati del reservation con una chiamata POST
       fetch('https://striveschool-api.herokuapp/api/reservations', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify(this.state.reservation)
       })
           .then((response) => {
               if (response.ok) {
                   console.log('Prenotazione inviata con successo!')
                   alert('Prenotazione inviata con successo!')

                   //setto l'oggetto reservation a vuoto per resettare il form
                   this.setState({ reservation: {
                       name: "",
                       phone: "",
                       numberOfPeople: 1,
                       smoking: false,
                       dateTime: "",
                       specialRequests: "",
                   } })
               } else {
                   alert('Prenotazione non inviata!')
                   throw new Error('Something went wrong');
                   
               }
           })
           .catch((error) => {
               alert(error)
           }) 
   }

//ALTERNATIVA CON LE PROMISE CON ASYNC AWAIT

    //   handleSubmitAsyncAwait = async (e) => {
  //     e.preventDefault()
  //     // ora inviamo i dati alle API di EPICODE per salvare la prenotazione
  //     // inviamo i dati tramite una chiamata con metodo 'POST'

  //     try {
  //       const response = await fetch(
  //         'https://striveschool-api.herokuapp.com/api/reservation',
  //         {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify(this.state.reservation),
  //         }
  //       )

  //       console.log('response', response) // funziona!

  //       if (response.ok) {
  //         console.log('prenotazione salvata')
  //         alert('grazie!')
  //         // dobbiamo svuotare i campi!
  //         // per farlo resettiamo lo stato, così i campi si svuoteranno da soli
  //         this.setState({
  //           reservation: {
  //             // lo stato iniziale del componente
  //             name: '',
  //             phone: '',
  //             numberOfPeople: '1',
  //             smoking: false,
  //             dateTime: '',
  //             specialRequests: '',
  //           },
  //         })
  //       } else {
  //         alert('riprova più tardi')
  //         throw new Error('errore!')
  //       }
  //     } catch (error) {
  //       // questo è un po' come il .catch() che avevate dopo il .then()
  //       console.log(error)
  //     }
  //   }


    render() {
        return (
            <Container>
                <Row className="justify-content-md-center my-4">
                    <Col xs={12} md={6}>
                        <h2 className="text-center mb-3">Prenota il tio tavolo ORA!</h2>

                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Nome</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Come ti Chiami?"
                                    required
                                    onChange={(e) => {
                                        console.log('scritto qualcosa in Name!', e.target.value)
                                        this.setState({
                                            reservation: {
                                                ...this.state.reservation,
                                                //fa partire il nuovo oggetto reservation da tutte le proprietà precedenti salvandole
                                                name: e.target.value
                                            }
                                        })
                                    }}

                                    value={this.state.reservation.name}
                                //con questo permetto di scrivere qualcosa nell'input modificando lo stato
                                />
                            </Form.Group>

                            {/*con questo fa uscire un alert se scrivo Stefano nel campo di input name, posso anche usare il ternario se voglio due opzioni
                            {this.state.reservation.name === 'Stefano'? (
                            <Alert variant='success'>Hai indovinato il nome!</Alert>}
                            ): (
                            <Alert variant='danger'>Non hai indovinato il nome!</Alert>}) */}
                            
                            {this.state.reservation.name === 'Stefano' && <Alert  variant='success'>Alert di esempio</Alert>}

                            

                            <Form.Group className="mb-3">
                                <Form.Label>N. telefono</Form.Label>
                                <Form.Control
                                    type="tel"
                                    placeholder="Inserisci un numero italiano"
                                    required
                                    onChange={(e) => {
                                        this.setState({
                                            reservation: {
                                                ...this.state.reservation,
                                                //fa partire il nuovo oggetto reservation da tutte le proprietà precedenti salvandole
                                                phone: e.target.value
                                            }
                                        })
                                        //##### this.handleChange(e, 'phone')
                                    }}

                                    value={this.state.reservation.phone}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Numero di persone</Form.Label>
                                <Form.Select required
                                    onChange={(e) => {
                                        this.setState({
                                            reservation: {
                                                ...this.state.reservation,
                                                numberOfPeople: e.target.value
                                            }
                                        })
                                    }}

                                    value={this.state.reservation.numberOfPeople}>

                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Check
                                    type="checkbox"
                                    label="Tavolo fumatori?"
                                    onChange={(e) => {
                                        this.setState({
                                            reservation: {
                                                ...this.state.reservation,
                                                smoking: e.target.checked
                                            }
                                        })
                                    }}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Quando volete venire?</Form.Label>
                                <Form.Control type="datetime-local" required
                                    onChange={(e) => {
                                        this.setState({
                                            reservation: {
                                                ...this.state.reservation,
                                                dateTime: e.target.value
                                            }
                                        })
                                    }}

                                    value={this.state.reservation.dateTime} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Allergie/bambini/animali?</Form.Label>
                                <Form.Control as="textarea" rows={5}
                                    onChange={(e) => {
                                        this.setState({
                                            reservation: {
                                                ...this.state.reservation,
                                                specialRequests: e.target.value
                                            }
                                        })
                                    }}

                                    value={this.state.reservation.specialRequests} />
                            </Form.Group>

                            <Button variant="success" type="submit">
                                Invia!
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default TableBooking