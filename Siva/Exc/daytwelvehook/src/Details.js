import React from "react";
import { useSelector } from "react-redux";


// const mapStateToProps = state => {

//   return {
//       menuList: state.crudManageeRed.menuList,
//       selectedMenu: state.crudManageeRed.selectedMenu
//   }
// }
export const Details = () => {
  const count = useSelector((state) => state.counter.count);
  const title = useSelector((state) => state.counter.title);
  console.log("renderizou");

  return (
    <>
      <h1>{title}</h1>
      <h2>The count is: {count}</h2>
    </>
  );
};
