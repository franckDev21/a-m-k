import { useState } from "react";

const useToggleNavBarType = () => {
  const [links, setLinks] = useState<
    { id: number; value: string; active: boolean }[]
  >([
    {
      id: 1,
      value: "PMP",
      active: true,
    },
    {
      id: 2,
      value: "PSM1",
      active: false,
    },
    {
      id: 3,
      value: "ITIL 4",
      active: false,
    },
  ]);

  const toggleActive = (id: number) => {
    let copiesLinks = links.map(link => {
      if(link.id === id){
        link.active = true;
        return link;
      }else{
        link.active = false;
        return link;
      }
    });
    setLinks(copiesLinks)
  };
};

export default useToggleNavBarType;
