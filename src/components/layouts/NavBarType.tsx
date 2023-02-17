import React, { FC, useState } from "react";

const NavBarType: FC<{ className?: string }> = ({ className = "" }) => {
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

  return (
    <div
      className={`${className} flex px-3 lg:px-0 lg:w-[70%] items-center justify-center mx-auto my-6 space-x-4`}
    >
      {links.map((link, k) => (
        <React.Fragment key={k}>
          <div
            onClick={() => toggleActive(link.id)}
            className={`w-1/2 lg:max-w-max px-2 lg:px-10 border-2 border-dashed dashed-card-link ${
              link.active && "active"
            } text-center font-bold md:text-xl  cursor-pointer  py-2`}
          >
            {link.value}
          </div>
          {links.length - 1 !== k && (
            <span className="h-1 w-1/6 md-w-28 lg:w-40 border-t-2 border-dashed"></span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default NavBarType;
