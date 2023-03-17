import { GetStaticProps } from 'next'
import Link from 'next/link'
import Layout from '@/components/Layout'

const AboutPage = () => (
    <Layout>
        <>
            <h3>Job contact</h3>
            <span />
            <div className="simple-text-md">I am opening for AI/Machine Learning job</div>
            <div className="simple-text-md">I would like to work remotely or onsite on US</div>
            <div className="simple-text-md">Please send JD or contact with me via email</div>
            <div className="simple-text-md">My mail id: </div>
            <a>htanloc994@gmail.com</a>

            <span />
            <div className="simple-text-md">Thanks Sincerely</div>
            <div className="simple-text-md">Ho Tan Loc (Mr.)</div>
        </>
    </Layout>
)


export default AboutPage