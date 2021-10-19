import useService from "../../hooks/useService";
import Service from "../Service/Service";
import{Row} from 'react-bootstrap';


const Services = () => {
    const [services]=useService();
    return (
        <div >
             <Row xs={1} sm={2} md={3} lg={4}className="g-4">
            {
                services.map(service=><Service
                key={service.id}
                service={service}></Service>)
            }
            </Row>
        </div>
    );
};

export default Services;