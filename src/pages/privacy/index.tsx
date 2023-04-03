import { GetStaticProps } from 'next'
import Link from 'next/link'
import Layout from '@/components/Layout'
import RightPanel from '@/components/Right'
import LeftPanel from '@/components/Left'
import MainLayout from '@/components/MainLayout'

const Privacy = () => (
    <Layout>
        <MainLayout middleChild={
            <>
                <h3>
                    Privacy </h3>
                <p>
                    My website address is: https://www.machinelearningpractices.com
                </p><p>
                    What personal data I collect and why I collect it
                </p>
                <p>
                    Comments
                    When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.
                </p><p>
                    An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.
                </p><p>
                    Media
                    If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
                </p><p>
                    Contact forms
                    We collect name, email address and message from contact forms in order to respond to queries.
                </p><p>
                    The resulting submission of contact forms are generally not shared.
                </p><p>
                    Product reviews and testimonials
                    We may collect name, email address and a product review or testimonial.
                </p><p>
                    Your name, photograph, and review or testimonial may be shared on this website.
                </p><p>
                    If your review or testimonial is posted on the website, you can request that it be removed at any time.

                </p><p>
                    Embedded content from other websites
                    Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
                </p><p>
                    These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracing your interaction with the embedded content if you have an account and are logged in to that website.
                </p><p>
                    Analytics
                    Google Analytics is used to record website visitor statistics.
                </p><p>
                    This may be used in aggregate to learn more about what content is interesting or useful to visitors.
                </p><p>
                    You can learn more about Google’s privacy policy here: https://policies.google.com/privacy
                </p><p>
                    You can learn more about Amazon’s privacy policy here: https://amazon.com/privacy
                </p><p>

                    Who we share your data with
                    A list prepared in good faith of companies/services that data is indirectly or automatically shared with includes:
                </p><p>
                    Amazon S3 for content hosting.
                    Google Analytics for website statistics.
                    PayPal for payment processing.
                    Some personal information may be shared with employees or contractors of Machine Learning Mastery Pty. Ltd. toward meeting legal, financial or related obligations, not limited to accountants and lawyers.
                </p><p>
                    How long we retain your data
                    If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.
                </p><p>
                    For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.
                </p><p>
                    If you subscribe to an email marketing campaign, your personal information will be retained indefinitely.
                </p><p>
                    If you make a product purchase, your personal information will be retained indefinitely.
                </p><p>
                    What rights you have over your data
                    You may opt-out of receiving most e-mails from us by following the “unsubscribe” instructions provided in the e-mails. Alternatively, you may contact us as described herein. If you are our customer, you may not be able to opt out of all emails, including certain administrative or billing communications which are important to the ongoing maintenance of your account.
                </p><p>
                    If you have an account on this site, or have left comments, subscribed to an email campaign or purchased a product, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
                </p><p>
                    Sale of business
                    We reserve the right to transfer information (including your personal information) to a third party in the event of a sale of our business provided that the third party only uses such information for the purposes that you provided it to us. You will be notified in the event of any such transfer and afforded the opportunity to opt-out.
                </p><p>
                    Contact information
                    If you have privacy concerns, you can contact the website owner directly via the following web form: https://www.machinelearningpractices.com/contact/
                </p><p>
                    Or send a email to:
                    htanloc994@gmail.com
                </p>
            </>
        } leftChild={<LeftPanel slug={''} path={'post/'} />} rightChild={<RightPanel slug={''} path={'post/'} />} />

    </Layout>
)


export default Privacy