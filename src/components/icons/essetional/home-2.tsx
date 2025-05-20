import { FC } from "react";
import { IconProps } from "../icon";

const HomeTwoEssetional: FC<Pick<IconProps, "isFill">> = ({ isFill }) => {
  if (isFill)
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.0402 6.82018L14.2802 2.79018C12.7102 1.69018 10.3002 1.75018 8.79023 2.92018L3.78023 6.83018C2.78023 7.61018 1.99023 9.21018 1.99023 10.4702V17.3702C1.99023 19.9202 4.06023 22.0002 6.61023 22.0002H17.3902C19.9402 22.0002 22.0102 19.9302 22.0102 17.3802V10.6002C22.0102 9.25018 21.1402 7.59018 20.0402 6.82018ZM12.7502 18.0002C12.7502 18.4102 12.4102 18.7502 12.0002 18.7502C11.5902 18.7502 11.2502 18.4102 11.2502 18.0002V15.0002C11.2502 14.5902 11.5902 14.2502 12.0002 14.2502C12.4102 14.2502 12.7502 14.5902 12.7502 15.0002V18.0002Z"
          fill="black"
        />
      </svg>
    );
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.02 2.84004L3.63 7.04004C2.73 7.74004 2 9.23004 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.29004 21.19 7.74004 20.2 7.05004L14.02 2.72004C12.62 1.74004 10.37 1.79004 9.02 2.84004Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17.99V14.99"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HomeTwoEssetional;
