import { MouseEventHandler } from "react";

const Toggle = ({
  open,
  toggle,
}: {
  open: boolean;
  toggle: MouseEventHandler;
}) => {
  return (
    <button
      onClick={toggle}
      className={`flex items-center space-x-2 z-10 transition-colors md:hidden`}
    >
      <span>MENU</span>
      <div
        className={`flex flex-col space-y-1 w-5 transform transition-transform duration-200 ${
          open && `rotate-90`
        }`}
      >
        <span
          className={`${
            open
              ? `rotate-45 translate-y-[6px] border-current`
              : `border-gray-800`
          } transform border-b-2 transition-all`}
        />
        <span className={`${open && `invisible`} border-b-2 border-current`} />
        <span
          className={`${
            open
              ? `-rotate-45 translate-y-[-6px] border-current`
              : `border-gray-800`
          } transform border-b-2 transition-all`}
        />
      </div>
    </button>
  );
};

export default Toggle;
