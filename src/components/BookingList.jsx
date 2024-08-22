import { Alert, Col, Container, ListGroup, Row, Spinner } from "react-bootstrap";
import { Component } from "react";


class BookingList extends Component {

    state = {
        reservations: [],
        isLoading: true, 
        isError: false
    }

    //devo necessariamente usare la funzione freeccia perche per definizione non hanno il proprio this, quindi ereditano quello della classe

    // componentDidMount() {} il componente viene lanciato automaticamente e immediatamente
    //dopo il pirimo render, quindi ci mette qualche secondo a renderizzare il contenuto sulla pagina esiste solo nei componenti a classe!!!!
    // VIENE LANCIATO UNA VOLTA SOLA fino al refresh della pagina

    //componentDidMount() e il posto perdetto per eseguite il fetch all'avvio o in generale 
    //per operazioni "costose"

componentDidMount = () =>{
    this.fetchReservations()
    //eventuale altra fetch
    //eventuale altra fetch


    //e il metodo nei componenti a classe che si occupa di recuperare dati
    //tramite una chiamata API all'avvio paragonabile all'init, ma molto piu' precisa
    //perche' ogni componente ha la sua
}



    fetchReservations = () => {
        // recupero le prenotazioni dalle API
        fetch("https://striveschool-api.herokuapp.com/api/reservation")
            .then((response) => {
                //finale buono
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error("Failed to fetch reservations")
                }
            })
            .then((arreyOfReservations) => {
                console.log( 'PRENOTAZIONI RECUPERATE DAL SERVER',arreyOfReservations)
                this.setState({ 
                    reservations: arreyOfReservations,
                    isLoading: false
                    //salva l'array di prenotazioni nel state, prendendo il posto di quello vuoto dello stato iniziale

                    // !!!!! REGOLA FONDAMENTALE DI REACT !!!!!
                    // DOPO OGNI CAMBIO DI STATE O DI PROPS RENDER VIENE RICHIAMATO, QUINDI 
                    // REACT RI RENDERIZZA IL COMPONMENT NELLE SUE PARTI MODIFICATE


                })
            })
            .catch((err) => {
                //finale brutto
                console.log("error", err)
                this.setState({
                    isLoading: false,
                    isError: true 
                })

            })
    }



    render() {
        return (
            <Container>
                <Row className="justify-content-center my-4">
                    <Col xs={12} md={6}>
                        <h2 className="text-center mb-3">Prenotazioni esistenti</h2>
                        <div className="d-flex justify-content-center mb-3">
                            {this.state.isLoading && (
                                <Spinner animation="border" variant="primary" />)}
                                { this.state.isError && (
                                    <Alert variant="danger">
                                        Ooops! Qualcosa non ha funzionato! 😱
                                        <i className="bi bi-exclamation-triangle-fill"></i>
                                        </Alert>)}
                        </div>
                        <ListGroup>
                            {!this.state.isLoading && this.state.reservations.length === 0 ? (
                                <ListGroup.Item>
                                    Al momento non ci sono prenotazioni!
                                </ListGroup.Item>
                                ) : (
                            this.state.reservations.map((res) => {
                                return (
                                    <ListGroup.Item key={res._id}>
                                        {res.name} per {res.numberOfPeople}
                                    </ListGroup.Item>
                                )
                            })
                            )}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default BookingList