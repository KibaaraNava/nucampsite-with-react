import { Container, Row, Col, Button } from 'reactstrap';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from '../features/campsites/CampsitesList';
import { selectRandomCampsite } from '../features/campsites/campsitesSlice';

const CampsitesDirectoryPage = () => {
    let selectedCampsite = selectRandomCampsite();

    const toggleCampsite = () => {
        selectedCampsite = selectRandomCampsite();
        console.log(selectedCampsite);
    };
    return (
        <Container>
            <Row>
                <Col sm="5" md="7"><CampsitesList/></Col>
                <Col sm="7" md="5"><CampsiteDetail campsite={selectedCampsite}/></Col>
                <Button onClick={() => toggleCampsite()}>
                    Select Random Campsite
                </Button>
            </Row>
        </Container>
    )
}

export default CampsitesDirectoryPage;