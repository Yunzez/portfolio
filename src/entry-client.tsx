import { mount, StartClient } from "solid-start/entry-client";
import GlobalProvider from "./components/GlobalProvider";
import Layout from "./components/Layout";

mount(() => (
    <GlobalProvider>
        <Layout>
            <StartClient />
        </Layout>
    </GlobalProvider>
), document);
