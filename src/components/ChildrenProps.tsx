import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const ChildrenProps = ({children }: Props) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default ChildrenProps;
