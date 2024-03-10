import { IconProps } from "@/types/types";

const Email = (props: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width || "24"}
      height={props?.height || "24"}
      data-icon="email"
      viewBox="0 0 128 96"
      {...props}
    >
      <path
        d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z"
        data-name="Layer 2"
      />
    </svg>
  );
};

export default Email;
