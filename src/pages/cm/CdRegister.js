import { useContext, useEffect } from "react";
import { CmUserContext } from "../../context/CmUserContext";
import {
  CM_LOGIN_NOT_CHECK,
  CM_LOGIN_NOT_EMAIL,
  CM_USER_LEVEL_ADM,
  CmNoPermissionAndGotoMain,
} from "../../components/js/Common";
import CdModifyForm from "./components/CdModifyForm";
export default function CdRegister(props) {
  
  //====================================================================
  const { ctxtCmUser } = useContext(CmUserContext);

  let myCtxtCmUser = { ...ctxtCmUser };
  if (!myCtxtCmUser) {
    myCtxtCmUser = {};
    myCtxtCmUser.userEmail = CM_LOGIN_NOT_CHECK;
  }

  useEffect(() => {
    if (myCtxtCmUser.userEmail !== CM_LOGIN_NOT_CHECK) {
      if (
        myCtxtCmUser.userEmail &&
        myCtxtCmUser.userEmail !== CM_LOGIN_NOT_EMAIL &&
        myCtxtCmUser.userLevel >= CM_USER_LEVEL_ADM
      ) {
      } else {
        CmNoPermissionAndGotoMain();
        return;
      }
    }
  }, [myCtxtCmUser.userEmail]);

  return (
    <main>
      {myCtxtCmUser &&
      myCtxtCmUser.userEmail !== CM_LOGIN_NOT_CHECK &&
      myCtxtCmUser.userEmail !== CM_LOGIN_NOT_EMAIL ? (
        <CdModifyForm {...props} />
      ) : (
        ""
      )}
    </main>
  );
}
