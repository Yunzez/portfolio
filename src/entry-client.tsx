import { mount, StartClient } from "solid-start/entry-client";
import GlobalProvider from "./Global/GlobalProvider";
import Layout from "./Global/Layout";

mount(() => (
    <GlobalProvider>
        <Layout>
            <StartClient />
        </Layout>
    </GlobalProvider>
), document);
