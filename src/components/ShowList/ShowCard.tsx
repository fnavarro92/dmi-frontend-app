import { FunctionComponent } from "react"
import { Card, Col, Container, Row } from "react-bootstrap";
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
        <Card onClick={openShow} style={{ cursor: "pointer" }}> 
            <Card.Img variant="top" src={show.image?.medium ? show.image.medium : 'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png'} />
            <Card.Body>
                <Card.Title>
                    <Container fluid>
                        <Row>
                            <Col>{show.name}</Col>
                        </Row>
                    </Container>
                </Card.Title>
                <Card.Text as="div">
                    {show.description ? parse(show.shortDescription) : <p>No description available.</p> }
                </Card.Text>
            </Card.Body>
        </Card>
    )

}

const mapDispatchToProps = {
    setShowAction: setShowAction
}

export default connect(null, mapDispatchToProps)(ShowCard);