import React from "react";
import { FunctionComponent, ReactElement, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Show } from "../../models/Show";
import { getAllShows } from "../../service/api/showApiHandler";
import ShowCard from './ShowCard';

const ShowList: FunctionComponent<any> = (props): ReactElement => {

    const { history } = props;

    const [shows, setShows] = useState<Show[]>([]);

    const obtainShows = async () => {
        const showData = await getAllShows();
        console.log(showData);
        setShows(showData);
    }

    React.useEffect(() => {
        obtainShows();
    }, []);

    return (
        <Container fluid>
            <h1 className="header text-center">Show List</h1>
            <Container>
                <Row>
                    {shows && shows.map((show) => {
                        return (
                            <Col key={show.id} lg={3}>
                                {/* <ProductCard key={product.id} product={product} onProductAdd={onProductAdd}/> */}
                                <ShowCard show={show} history={history}/>
                                <br></br>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </Container>
    )
}

export default ShowList;