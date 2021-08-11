import React from 'react'
import styled from 'styled-components';
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                BackgroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                BackgroundImg="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"/>
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                BackgroundImg="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"/>
            <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                BackgroundImg="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
             <Section
                title="Lowest Cost Solar Panels in America"
                description="Money-back guarantee"
                BackgroundImg="solar-panel.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />
            <Section
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Than a New Roof"
                BackgroundImg="solar-roof.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />
            <Section
                title="Accessories"
                description="Money-back guarantee"
                BackgroundImg="accessories.jpg"
                leftBtnText="Shop now"
            />
            
        </Container>
    )
}

export default Home;

const Container = styled.div`
height: 100vh;
`

