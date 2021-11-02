import { FunctionComponent } from "react"
import { Show } from "../../models/Show";
import { getShowFromStore } from '../../redux/reducers/showReducer';
import { connect } from "react-redux";
import parse from 'html-react-parser';
import { Col, Container, Row, Image, Button, Breadcrumb } from "react-bootstrap";

export interface ShowItemProps {
    show: Show
}

const ShowItem: FunctionComponent<ShowItemProps> = (showItemProps) => {

    const { show } = showItemProps;
    
    return (
        <Container fluid>
            <Container>
                <Row>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            {show.name}
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Row>
                <Row>
                    <Col lg={10}><h1 className="header">{show.name}</h1></Col>
                    {show.score && (<Col lg={2}><h1 className="header">Score: {show.score}</h1></Col>)}
                </Row>
                <Row><hr></hr></Row>
                <Row>
                    <Col lg={4}>
                        <Image src={show.image?.original ? show.image.original : 'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png'} rounded fluid />
                    </Col>
                    <Col lg={8}>
                        <Container>
                            <Row>
                                <Col>
                                    <h3 className="header">Description</h3>
                                    {show.description ? parse(show.description) : "No description available."}  
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h3 className="header">Review</h3>
                                    <Button href={show.linkToReview} target="_blank">Link to Review in external site.</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Container>
    )

}

const mapStateToProps = (state: any) => {
    return {
        show: getShowFromStore(state)
    }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowItem);