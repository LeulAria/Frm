import Head from "next/head"

type Props = {
    title?: string ;
    keyword?: string;
    description?: string;
}

const Meta = ({ title, keyword, description }: Props) => {
    return (
        <Head>
            <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=7"/>
            <meta name="description" content=""/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="keywords" content=""/>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'TecHawks Message | Home',
    keywords: 'message, demo, chat',
    description: 'chat with frieds demo'
}

export default Meta
