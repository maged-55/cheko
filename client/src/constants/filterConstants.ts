import { CoffeeOutlined, FileOutlined } from "@ant-design/icons";

export const FILTER_OPTIONS = [
  {
    label: "Orders",
    icon: FileOutlined,
    bgColor: "#d0e7db",
  },
  {
    label: "Soups",
    icon: FileOutlined,
    bgColor: "#d9cce7",
  },
  {
    label: "Breakfast",
    icon: CoffeeOutlined,
    bgColor: "#f4cbdf",
  },
  {
    label: "Drinks",
    icon: CoffeeOutlined,
    bgColor: "#c7d6e8",
  },
  {
    label: "Sushi",
    icon: FileOutlined,
    bgColor: "#d9cce7",
  },
];


export const FILTER_LABELS = FILTER_OPTIONS.map((option) => option.label);
