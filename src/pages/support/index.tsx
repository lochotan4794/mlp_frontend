import { GetStaticProps } from 'next'
import Link from 'next/link'
import Layout from '@/components/Layout'

const AboutPage = () => (
    <Layout>

        <div style={{ fontSize: "22px" }}>
            <h4 style={{ fontSize: "24px" }}>Support Address</h4>
            <div>MOMO account: 0902816155</div>
            {/* <div>Paypal account: </div> */}
            <div style={{ fontWeight: "bold" }}>Payonneer account</div>
            <ol>
                <li>Bank name:
                    First Century Bank</li>
                <li>Bank address:
                    1731 N Elm St  Commerce, GA 30529 USA</li>
                <li>Routing (ABA):
                    061120084</li>
                <li>Account number:
                    4027037064920</li>
                <li>Account type:
                    CHECKING</li>
                <li>Beneficiary name:
                    Loc Ho</li>
            </ol>
            <div style={{ fontWeight: "bold" }}>Techcombank account: </div>
            <ol>
                <li>SWIFT code: VTCBVNVX</li>
                <li>Name: Ho Tan Loc</li>
                <li>Account number: 19033533607027</li>
            </ol>
        </div>

    </Layout>
)


export default AboutPage