import React, { FC, useCallback, useContext, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { IService } from "../types/interfaces";
import { ServiceContext } from "./servicesList";

export const Accordion: FC<{ items: IService[] }> = ({ items }) => {
  const [open, setOpen] = useState(false);
  const { onClick, active } = useContext(ServiceContext);

  const onOpen = useCallback(() => {
    if (items.length > 1) {
      setOpen((prev) => !prev);
    } else {
      onClick(items[0]);
    }
  }, [items, onClick]);

  return (
    <div className=" bg-[#f5f5f7] mb-2 rounded-xl">
      <div
        role="button"
        className="cursor-pointer flex justify-between items-center p-[2rem]"
        onClick={onOpen}
      >
        <h1 className="text-2xl">{items[0].title}</h1>
        {items.length > 1 ? (
          open ? (
            <FaMinus size={20} />
          ) : (
            <FaPlus size={20} />
          )
        ) : null}
      </div>
      {open && (
        <div className="border-t-1 p-[2rem]">
          {items.map((s) => (
            <div
              role="button"
              className="mb-3 cursor-pointer"
              onClick={() => onClick(s)}
              key={s.id}
            >
              <h1
                className={`text-2xl ${
                  active && active.id === s.id ? "" : "text-[grey]"
                }`}
              >
                {s.title}
              </h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
