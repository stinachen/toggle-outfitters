import Head from "next/head";
import styles from "@/styles/Home.module.css";
import NavigationMenuDemo from "@/components/menu";
import { useFlags } from "launchdarkly-react-client-sdk";
import StoreLaunch from "@/components/StoreContent";
import StorePreview from "@/components/storepreview";
import { cn } from "@/lib/utils";

export default function Home() {
  const { storeEnabled } = useFlags();

  return (
    <div className={cn("font-sohne")}>
      <Head>
        <title>Toggle Outfitters</title>
      </Head>
      <div className="min-h-screen relative">
        <header className={`absolute z-50 ${styles.header}`}>
          <NavigationMenuDemo />
        </header>

        {storeEnabled ? <StoreLaunch /> : <StorePreview />}
      </div>
    </div>
  );
}
