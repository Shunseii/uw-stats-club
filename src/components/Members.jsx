import React from "react";

import Member from "./Member.jsx";
import RoleTitle from "./RoleTitle.jsx";

const Members = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center w-full mb-4">
        <RoleTitle title="President" />
        <Member
          name="John Doe"
          src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
        />
      </div>

      <div className="flex flex-col items-center w-full mb-4">
        <RoleTitle title="Technology" />
        <Member
          name="Jane Done"
          src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
        />
      </div>

      <div className="flex flex-col items-center w-full">
        <RoleTitle title="Events" />

        <div className="flex flex-row justify-around w-full">
          <Member
            name="Jane Done"
            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
          />

          <Member
            name="John Doe"
            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
          />

          <Member
            name="John Doe"
            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Members;
