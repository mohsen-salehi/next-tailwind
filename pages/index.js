import Layout from "@/lauout/Layout";
import TopSite from "@/pages/HomeComponents/TopSite";
import IntroComponent from "@/pages/HomeComponents/IntroComponent";
import VideosComponent from "@/pages/HomeComponents/VideosComponent";
import SurfboardComponent from "@/pages/HomeComponents/SurfboardComponent";
import SurfTrainingComponent from "@/pages/HomeComponents/SurfTrainingComponent";
import PointBreakComponent from "@/pages/HomeComponents/PointBreakComponent";
import JoinTheClubComponent from "@/pages/HomeComponents/JoinTheClubComponent";
import OurCampComponent from "@/pages/HomeComponents/OurCampComponent";


export default function Home() {
    return (
        <main className={`flex container mx-auto max-w-7xl  min-h-screen flex-col items-center justify-between `}>
            <Layout>
                <TopSite/>
                <IntroComponent/>
                <VideosComponent/>
                <SurfboardComponent/>
                <SurfTrainingComponent/>
                <PointBreakComponent/>
                <JoinTheClubComponent/>
                <OurCampComponent/>
            </Layout>
        </main>
    )
}
