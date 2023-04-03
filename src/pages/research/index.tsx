import { GetStaticProps } from 'next'
import Link from 'next/link'
import Layout from '@/components/Layout'
import RightPanel from '@/components/Right'
import LeftPanel from '@/components/Left'
import MainLayout from '@/components/MainLayout'

const AboutPage = () => (
    <Layout>
        <MainLayout middleChild={<>
            <div style={{ fontSize: "22px" }}>
                <div>About this site</div>
                <div>
                    Hello, My name is Loc.
                </div>
                <div>
                    I am interested in Machine Leaning and I am a Professional developer.
                </div>
                <div>
                    I have a Bachelor Degree on Telecommunication Engineering and a Masters degree in Computer Sciences and I’ve worked on machine learning systems for defense, startups and Big Embedded system.
                </div>
                <div>
                    I start this site for these reasons:
                </div>
                <ol>
                    <li>
                        I find machine learning exciting.
                    </li>
                    <li>
                        Because I want to help developers get good at applied machine learning in the real problem.
                    </li>
                    <li>
                        Get updated with new research and apply it.
                    </li>
                </ol>
                <div>I am always listening on every feedback to improve myself also my work.</div>
                <div>I hope this site not only provide start point for research developer on Machine learning but also for who want to try embedded technology and other related topics.</div>
                <div>I am always learning and take into account myself with new challenge topics to get more knowledge. </div>
                <div>The article on this site is written on Paper fashion. I try to review carefully before put it online but if any problem on content please feedback via email.</div>
                <div>I am opening for new remote or onsite job on USA company. I am also open for join research group.</div>
                <div>Machine learning is so excited, I hope my work can provide useful information for developer like many other blogs, posts. I am very happy for Freelance Researcher contribute to this site.</div>
                <div>Throughout my post, I am always considered to cite other trusted source for references with only purpose build high quality article.</div>
                <div>Also, I am happy to share many stories about my live at work and my mother country, hope you like it.</div>
                <div>I am very happy to get your donation for maintaining this site also used for pay server cost. You can help me get a coffee while writing this site.</div>
                <div>Thanks for your time with me.</div>
            </div>
        </>} leftChild={<LeftPanel slug={''} path={'post/'} />} rightChild={<RightPanel slug={''} path={'post/'} />} />

    </Layout>
)


export default AboutPage