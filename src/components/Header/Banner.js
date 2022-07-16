import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
    return (
        <Container className='mt-5'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="w-100"
                        src="https://i.ibb.co/SrQJDnK/banner-1.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100"
                        src="https://i.ibb.co/6Hjppy0/banner-3.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100"
                        src="https://i.ibb.co/QMg3xFh/banner-2.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default Banner;