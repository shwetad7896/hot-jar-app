import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

const analytics = Analytics({
    app: 'devtest',
    plugins: [
        googleAnalytics({
            measurementIds: ['UA-251791212-1']
        })
    ]
})



export default analytics