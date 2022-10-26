import { UilWebGrid } from "@iconscout/react-unicons";
import { UilArrow } from "@iconscout/react-unicons";
import { UilEdit } from "@iconscout/react-unicons";
import { UilClapperBoard } from "@iconscout/react-unicons";
import { UilMusicNote } from "@iconscout/react-unicons";
import { SiArduino } from "react-icons/si";

export const servicesContentData = [
  {
    id: 1,
    icon: <UilWebGrid className="services__icon" />,
    category: "Web",
    serviceName: "Designing",
    serviceList: [
      { id: 1, title: "I designing web interface" },
      { id: 2, title: "I designing App interface" },
      { id: 3, title: "I designing admin interface" },
    ],
  },
  {
    id: 2,
    icon: <UilArrow className="services__icon" />,
    category: "UI/UX",
    serviceName: "Designing",
    serviceList: [
      { id: 1, title: "I designing web interface" },
      { id: 2, title: "I designing Business card" },
      { id: 3, title: "I designing logo" },
    ],
  },
  {
    id: 3,
    icon: <UilEdit className="services__icon" />,
    category: "Branding",
    serviceName: "Designing",
    serviceList: [
      { id: 1, title: "I designing web interface" },
      { id: 2, title: "I designing App interface" },
      { id: 3, title: "I designing admin interface" },
    ],
  },
  {
    id: 4,
    icon: <UilClapperBoard className="services__icon" />,
    category: "Video",
    serviceName: "Editing",
    serviceList: [
      { id: 1, title: "I designing web interface" },
      { id: 2, title: "I designing App interface" },
      { id: 3, title: "I designing admin interface" },
    ],
  },
  {
    id: 5,
    icon: <UilMusicNote className="services__icon" />,
    category: "Sound Track",
    serviceName: "Mixing",
    serviceList: [
      { id: 1, title: "I designing web interface" },
      { id: 2, title: "I designing App interface" },
    ],
  },
  {
    id: 6,
    icon: <SiArduino className="services__icon" />,
    category: "Arduino",
    serviceName: "Development",
    serviceList: [{ id: 1, title: "I making small robot and other project" }],
  },
];
