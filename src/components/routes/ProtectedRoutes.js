import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import BaseLayout from '../layouts/BaseLayout'
import DashboardScreen from '../screens/DashboardScreen'
import Dummy from '../screens/Dummy/Dummy'
import ResidentAnalysisScreen from '../screens/ResidentAnalysisScreen'
import ForwardAuthenticated from './ForwardAuthenticated'

const ProtectedRoutes = () => {

    const [title, setTitle] = React.useState('');

    const RenderComponent = (Component) => () => {
        return <Component setTitle={setTitle} />
    }

    React.useEffect(() => {
        document.title = `${title} - Mi Care`
    }, [title])

    return (
        <>
            <BaseLayout title={title}>
                <Route exact path='/' render={() => <Redirect to='/dashboard' />} />
                <Route exact path='/dashboard' render={RenderComponent(DashboardScreen)} />
                <Route exact path='/resident-analysis' render={RenderComponent(ResidentAnalysisScreen)} />


                {/* dummy chart for testing */}
                <Route exact path='/dummy' render={RenderComponent(Dummy)} />
            </BaseLayout>
            <ForwardAuthenticated />
        </>
    )
}

export default ProtectedRoutes
