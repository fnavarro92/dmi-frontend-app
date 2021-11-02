import { FunctionComponent } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Show } from "../../models/Show";
import parse from 'html-react-parser';
import { setShowAction } from '../../redux/reducers/showReducer';
import { connect } from "react-redux";

export interface ShowCardProps {
    show: Show,
    setShowAction: any,
    history: any
}

const ShowCard: FunctionComponent<ShowCardProps> = (showCardProps: ShowCardProps) => {

    const { show, setShowAction, history } = showCardProps;

    const openShow = () => {
        setShowAction(show);
        history.push('/show');
    }
    
    return (
        <Card> 
            <Card.Img variant="top" src={show.image?.medium ? show.image.medium : 'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png'} />
            <Card.Body>
                <Card.Title>
                    <Container fluid>
                        <Row>
                            <Col>{show.name}</Col>
                        </Row>
                    </Container>
                </Card.Title>
                <Card.Text>
                    {show.description ? parse(show.shortDescription) : <p>No description available.</p> }
                </Card.Text>
                <Button variant="primary" onClick={openShow}>Open</Button>
            </Card.Body>
        </Card>
    )

}

const mapStateToProps = (state: any) => {
}

const mapDispatchToProps = {
    setShowAction: setShowAction
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowCard);