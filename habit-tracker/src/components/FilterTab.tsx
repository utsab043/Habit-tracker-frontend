import React from "react";
type FilterTabProps = {
  tabList: {
    name?: string;
    icon?: React.ReactNode;
    id: number;
  }[];
};
export default function FilterTab({ tabList }: FilterTabProps) {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <div className="filter-tab w-fit rounded-full bg-neutral_gray p-2 flex gap-4">
      {tabList.map(tab => (
        <button key={tab.id} className={`${activeTab === tab.id && "bg-white"} px-6 py-2 rounded-full`}
          onClick={() => setActiveTab(tab.id)}>
          {tab.name || tab.icon}
        </button>
      ))
      }
    </div >
  )
}