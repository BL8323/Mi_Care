import React from 'react'
import { Container } from 'react-bootstrap'
import SquareInfoCard from '../commons/Card/SquareInfoCard'

const DashboardScreen = ({
    setTitle
}) => {

    const [dummyData, setDummyData] = React.useState([
        {
            name: 'John Stuart Sr.',
            bloodPressure: '100',
            oxygen: '97',
            temperature: '36.5',
            heathStatusIsOkay: true,
            imageUrl: 'https://thumbs.dreamstime.com/b/old-happy-man-holding-thumbs-up-retirement-home-35821112.jpg'
        },
        {
            name: 'David Chester',
            bloodPressure: '100',
            oxygen: '97',
            temperature: '36.5',
            heathStatusIsOkay: false,
            imageUrl: 'https://thumbs.dreamstime.com/b/old-happy-man-holding-thumbs-up-retirement-home-35821112.jpg'
        },
        {
            name: 'Michael Stuart',
            bloodPressure: '100',
            oxygen: '97',
            temperature: '36.5',
            heathStatusIsOkay: true,
            imageUrl: 'https://thumbs.dreamstime.com/b/old-happy-man-holding-thumbs-up-retirement-home-35821112.jpg'
        },
        {
            name: 'James Smith',
            bloodPressure: '100',
            oxygen: '97',
            temperature: '36.5',
            heathStatusIsOkay: true,
            imageUrl: 'https://thumbs.dreamstime.com/b/old-happy-man-holding-thumbs-up-retirement-home-35821112.jpg'
        },
        {
            name: 'Michael Smith',
            bloodPressure: '100',
            oxygen: '97',
            temperature: '36.5',
            heathStatusIsOkay: true,
            imageUrl: 'https://thumbs.dreamstime.com/b/old-happy-man-holding-thumbs-up-retirement-home-35821112.jpg'
        },
        {
            name: 'Rubel Johnson',
            bloodPressure: '100',
            oxygen: '97',
            temperature: '36.5',
            heathStatusIsOkay: false,
            imageUrl: 'https://thumbs.dreamstime.com/b/old-happy-man-holding-thumbs-up-retirement-home-35821112.jpg'
        },
        {
            name: 'Robert Garcia',
            bloodPressure: '100',
            oxygen: '97',
            temperature: '36.5',
            heathStatusIsOkay: true,
            imageUrl: 'https://thumbs.dreamstime.com/b/old-happy-man-holding-thumbs-up-retirement-home-35821112.jpg'
        },
        {
            name: 'Andrew Martinez',
            bloodPressure: '100',
            oxygen: '97',
            temperature: '36.5',
            heathStatusIsOkay: false,
            imageUrl: 'https://thumbs.dreamstime.com/b/old-happy-man-holding-thumbs-up-retirement-home-35821112.jpg'
        },
        {
            name: 'David Smith',
            bloodPressure: '100',
            oxygen: '97',
            temperature: '36.5',
            heathStatusIsOkay: false,
            imageUrl: 'https://thumbs.dreamstime.com/b/old-happy-man-holding-thumbs-up-retirement-home-35821112.jpg'
        },
        {
            name: 'William Dumini',
            bloodPressure: '100',
            oxygen: '97',
            temperature: '36.5',
            heathStatusIsOkay: true,
            imageUrl: 'https://thumbs.dreamstime.com/b/old-happy-man-holding-thumbs-up-retirement-home-35821112.jpg'
        },
        {
            name: 'Kevin Johnson',
            bloodPressure: '100',
            oxygen: '97',
            temperature: '36.5',
            heathStatusIsOkay: true,
            imageUrl: 'https://thumbs.dreamstime.com/b/old-happy-man-holding-thumbs-up-retirement-home-35821112.jpg'
        },
        {
            name: 'James Johnson',
            bloodPressure: '100',
            oxygen: '97',
            temperature: '36.5',
            heathStatusIsOkay: false,
            imageUrl: 'https://thumbs.dreamstime.com/b/old-happy-man-holding-thumbs-up-retirement-home-35821112.jpg'
        },
        {
            name: 'David Smith',
            bloodPressure: '100',
            oxygen: '97',
            temperature: '36.5',
            heathStatusIsOkay: false,
            imageUrl: 'https://thumbs.dreamstime.com/b/old-happy-man-holding-thumbs-up-retirement-home-35821112.jpg'
        },
        {
            name: 'William Dumini',
            bloodPressure: '100',
            oxygen: '97',
            temperature: '36.5',
            heathStatusIsOkay: true,
            imageUrl: 'https://thumbs.dreamstime.com/b/old-happy-man-holding-thumbs-up-retirement-home-35821112.jpg'
        },
        {
            name: 'Kevin Johnson',
            bloodPressure: '100',
            oxygen: '97',
            temperature: '36.5',
            heathStatusIsOkay: true,
            imageUrl: 'https://thumbs.dreamstime.com/b/old-happy-man-holding-thumbs-up-retirement-home-35821112.jpg'
        },
        {
            name: 'James Johnson',
            bloodPressure: '100',
            oxygen: '97',
            temperature: '36.5',
            heathStatusIsOkay: false,
            imageUrl: 'https://thumbs.dreamstime.com/b/old-happy-man-holding-thumbs-up-retirement-home-35821112.jpg'
        },
        {
            name: 'David Smith',
            bloodPressure: '100',
            oxygen: '97',
            temperature: '36.5',
            heathStatusIsOkay: false,
            imageUrl: 'https://thumbs.dreamstime.com/b/old-happy-man-holding-thumbs-up-retirement-home-35821112.jpg'
        },
        {
            name: 'William Dumini',
            bloodPressure: '100',
            oxygen: '97',
            temperature: '36.5',
            heathStatusIsOkay: true,
            imageUrl: 'https://thumbs.dreamstime.com/b/old-happy-man-holding-thumbs-up-retirement-home-35821112.jpg'
        },
        {
            name: 'Kevin Johnson',
            bloodPressure: '100',
            oxygen: '97',
            temperature: '36.5',
            heathStatusIsOkay: true,
            imageUrl: 'https://thumbs.dreamstime.com/b/old-happy-man-holding-thumbs-up-retirement-home-35821112.jpg'
        },
        {
            name: 'James Johnson',
            bloodPressure: '100',
            oxygen: '97',
            temperature: '36.5',
            heathStatusIsOkay: false,
            imageUrl: 'https://thumbs.dreamstime.com/b/old-happy-man-holding-thumbs-up-retirement-home-35821112.jpg'
        },
        {
            name: 'David Smith',
            bloodPressure: '100',
            oxygen: '97',
            temperature: '36.5',
            heathStatusIsOkay: false,
            imageUrl: 'https://thumbs.dreamstime.com/b/old-happy-man-holding-thumbs-up-retirement-home-35821112.jpg'
        },
        {
            name: 'William Dumini',
            bloodPressure: '100',
            oxygen: '97',
            temperature: '36.5',
            heathStatusIsOkay: true,
            imageUrl: 'https://thumbs.dreamstime.com/b/old-happy-man-holding-thumbs-up-retirement-home-35821112.jpg'
        },
        {
            name: 'Kevin Johnson',
            bloodPressure: '100',
            oxygen: '97',
            temperature: '36.5',
            heathStatusIsOkay: true,
            imageUrl: 'https://thumbs.dreamstime.com/b/old-happy-man-holding-thumbs-up-retirement-home-35821112.jpg'
        },
        {
            name: 'James Johnson',
            bloodPressure: '100',
            oxygen: '97',
            temperature: '36.5',
            heathStatusIsOkay: false,
            imageUrl: 'https://thumbs.dreamstime.com/b/old-happy-man-holding-thumbs-up-retirement-home-35821112.jpg'
        }
    ])

    React.useEffect(() => {
        if (setTitle) {
            setTitle('Dashboard')
        }
    }, [setTitle])

    const RenderCardsInCol = (eachData, index) => {
        return (
            <div className='col mb-4'>
                <SquareInfoCard
                    key={index}
                    name={eachData.name}
                    bloodPressure={eachData.bloodPressure}
                    oxygen={eachData.oxygen}
                    temperature={eachData.temperature}
                    heathStatusIsOkay={eachData.heathStatusIsOkay}
                    imageUrl={eachData.imageUrl}
                />
            </div>
        )
    }

    return (
        <Container fluid className='mx-0 px-0'>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>
                {dummyData.map(RenderCardsInCol)}
            </div>
        </Container>
    )
}

export default DashboardScreen
