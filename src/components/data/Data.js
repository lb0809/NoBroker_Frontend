// Sidebar imports


// Analytics DashCards imports
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent DashCard Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";
console.log("dfjk");
// Sidebar Data
export const SidebarData = [
  {
    icon: <i class="fa fa-home" aria-hidden="true"></i>,
    heading: "Dashboard",
  },
  {
    icon: <i class="fa fa-list-alt" aria-hidden="true"></i>,
    heading: "Orders",
  },
  {
    icon: <i class="fa fa-users" aria-hidden="true"></i>,
    heading: "Customers",
  },
  {
    icon: <i class="fa fa-gift" aria-hidden="true"></i>,
    heading: 'Products'
  },
  {
    icon: <i class="fa fa-bar-chart" aria-hidden="true"></i>,
    heading: 'Analytics'
  },
];


// Analytics DashCards Data
export const cardsData = [
  {
    title: "Total users visited",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",  
    // backGround: "#576CBC",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: <i class="fa fa-inr" aria-hidden="true"></i>,
    series: [
      {
        name: "Total users visited",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Properties posted",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: <i class="fa fa-money" aria-hidden="true"></i>,
    series: [
      {
        name: "Properties posted",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Registered Users",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: <i class="fa fa-list-alt" aria-hidden="true"></i>,
    series: [
      {
        name: "Registered Users",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update DashCard Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];
