import BookRooms from "@/components/BookRooms/BookRooms";
import Footer from "@/components/Footer/Footer";
import HomePageApluseOne from "@/components/HomePageApluseOne/HomePageApluseOne";
import ImageHeader from "@/components/ImageHeader/ImageHeader";
import MetaInfo from "@/components/MetaInfo/MetaInfo";
import RoomFacilites from "@/components/RoomFacilites/RoomFacilites";
import dynamic from "next/dynamic";

const NavBar = dynamic(() => import("../components/NavBar/NavBar"));

export default function Home() {
  return (
    <>
      <MetaInfo
        title="Home | The Daisy Dreams"
        description="The Daisy Dream is a passion project by software engineer Rohan Sadhukhan and Designer Priya mondal it is completely design by Priya mondal and Developed by Rohan Sadhukhan"
        metaImgUrl="/icon.png"
      />
      <NavBar pageRoute="/"/>
      <ImageHeader/>
      <HomePageApluseOne/>
      <RoomFacilites/>
      <BookRooms/>
      <Footer/>
  
    </>
  );
}
