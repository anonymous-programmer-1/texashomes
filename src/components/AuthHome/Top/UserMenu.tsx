type UserDetails = {
  body: {
    firstName: string;
    lastName: string;
  };
};
function UserMenu(props: UserDetails) {
  const userDetailsProp = props.body;
  const { firstName, lastName } = userDetailsProp;
  return (
    <div>
      <div className="flex gap-4 flex-col fixed bg-[#0d0d13] z-50  mt-10 w-fit right-0 p-3 lg:pl-4 lg:pr-4 transition-all">
        <span className="flex text-[1.1rem] text-gray-300 lg:hidden ">
          <h5 className="font-bold ">{firstName}</h5>
          <h5 className="font-bold ml-1">{lastName}</h5>
        </span>
        <div>
          <span className="flex text-[1.1rem] text-gray-300  font-bold items-center">
            <h5>Settings</h5>
            <i className="fa fa-gear ml-1"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
export default UserMenu;
