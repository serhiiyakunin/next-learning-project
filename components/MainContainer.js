import Head from "next/head";
import A from "../components/A";

const MainContainer = ({ children, keywords }) => {
    return (
        <>
            <Head>
                <meta keywords={"serge next.js" + keywords}></meta>
                <title>Main page</title>
            </Head>
            <div className="navbar">
                <A href={'/'} text="Main" />
                <A href={'/users'} text="Users" />
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                    .navbar {
                        background: orange;
                        padding: 15px;
                    }
                     
                `}
            </style>
        </>
    );
};



export default MainContainer;