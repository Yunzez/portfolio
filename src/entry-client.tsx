import { mount, StartClient } from "solid-start/entry-client";
import GlobalProvider from "./GlobalProvider";
import Layout from "./Layout";

mount(() => (
    <GlobalProvider>
        <Layout>
            <StartClient />
        </Layout>
    </GlobalProvider>
), document);
