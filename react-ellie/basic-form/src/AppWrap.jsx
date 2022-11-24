import React from "react";

const AppWrap = () => {
  return (
    <div>
      <Nav>
        <span>Nav컴포넌트 안에 있는 내용이 children에 들어가는 것</span>
      </Nav>
    </div>
  );
};

export default AppWrap;

const Nav = ({ children }) => {
  return (
    <>
      <div>hi</div>
      {children}
    </>
  );
};
