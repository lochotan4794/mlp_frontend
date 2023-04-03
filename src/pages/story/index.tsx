import { GetStaticProps } from 'next'
import Link from 'next/link'
import Layout from '@/components/Layout'
import RightPanel from '@/components/Right'
import LeftPanel from '@/components/Left'
import MainLayout from '@/components/MainLayout'

const AboutPage = () => (
    <Layout>
        <MainLayout middleChild={
            <>
                <p>Live is short</p>
                <p>Many technical paritioner choose other job like photographer or Photo editor for 2nd job</p>
                <p>In this series, I will write about others topic about my lives</p>
                <p>I hope writting well help my english level will push up my English competency. Also help me relax</p>
                <p>These topics are not trueky technical so please swith to other tab if you don't like</p>
            </>
        } leftChild={<LeftPanel slug={''} path={'post/'} />} rightChild={<RightPanel slug={''} path={'post/'} />} />

    </Layout>
)


export default AboutPage