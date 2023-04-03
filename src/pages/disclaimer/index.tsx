import { GetStaticProps } from 'next'
import Link from 'next/link'
import Layout from '@/components/Layout'
import RightPanel from '@/components/Right'
import LeftPanel from '@/components/Left'
import MainLayout from '@/components/MainLayout'

const Disclaimer = () => (
    <Layout>

        <MainLayout middleChild={<>
            <h3>
                Disclaimer for Machine Learning Practices
            </h3>
            <p>
                If you require any more information or have any questions about our site's disclaimer, please feel free to contact me by email at htanloc994@gmail.com
            </p><p>
                Disclaimers for Machine Learning Practices
                All the information on this website is published in good faith and for general information purpose only. Website Name does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (Website.com), is strictly at your own risk. will not be liable for any losses and/or damages in connection with the use of our website.
            </p>
            From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone ‘bad'.
            <p>
                Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information.
            </p>
            <p>
                Consent
                By using our website, you hereby consent to our disclaimer and agree to its terms.
            </p>
            Update
            Should we update, amend or make any changes to this document, those changes will be prominently posted here.
        </>} leftChild={<LeftPanel slug={''} path={'post/'} />} rightChild={<RightPanel slug={''} path={'post/'} />} />

    </Layout>
)


export default Disclaimer