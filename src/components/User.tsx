interface Props{
    name:string
};

const User = (props: Props) => {
  return <div>{props.name}</div>;
};

export default User;
