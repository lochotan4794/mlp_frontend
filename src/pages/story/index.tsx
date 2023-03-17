import { GetStaticProps } from 'next'
import Link from 'next/link'
import Layout from '@/components/Layout'

const AboutPage = () => (
    <Layout>
        <>
            <p>Live is short</p>
            <p>Many technical paritioner choose other job like photographer or Photo editor for 2nd job</p>
            <p>In this series, I will write about others topic about my lives</p>
            <p>I hope writting well help my english level will push up my English competency. Also help me relax</p>
            <p>These topics are not trueky technical so please swith to other tab if you don't like</p>
            {/* {
                this.state.stories.map((item, i) => {
                    return (
                        <p>
                            <a
                                style={
                                    {
                                        fontSize: "22px",
                                        fontWeight: "0.4"
                                    }
                                }
                                href={`/${item.slug}`}>{item.title}</a>
                        </p>
                    );
                })
            } */}
        </>
    </Layout>
)


export default AboutPage