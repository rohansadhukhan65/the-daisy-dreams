interface facilitiesObj {
  isAc: boolean;
  isWifi: boolean;
  isBreakfast: boolean;
}
interface Irooms {
  id: number;
  name: string;
  img: string;
  description: string;
  facilities: facilitiesObj;
  category: string;
  price: number;
}

const rooms : Irooms[] = [
  {
    id: 1,
    name: "Single Room",
    img: "/rooms/single-room.png",
    description:"Luxury abounds in these suites. From the living room to Italian marble bathroom.",
    facilities: {
      isAc: true,
      isWifi: true,
      isBreakfast: true,
    },
    category: "Standard",
    price: 1400,
  },
  {
    id: 2,
    name: "Deluxe Room",
    img: "/rooms/dulex-rooms.png",
    description:
      "Indulge in the epitome of luxury and comfort with our Deluxe Room.",
    facilities: {
      isAc: true,
      isWifi: true,
      isBreakfast: true,
    },
    category: "Deluxe",
    price: 2500,
  },
  {
    id: 1,
    name: "Kohinoor Deluxe Suites",
    img: "/rooms/kohinoor-deluxe-suites.png",
    description:
      "Immerse yourself in luxury and comfort at our Kohinoor Deluxe Suites.",
    facilities: {
      isAc: true,
      isWifi: true,
      isBreakfast: true,
    },
    category: "Suite",
    price: 7000,
  }
];

export default rooms;
