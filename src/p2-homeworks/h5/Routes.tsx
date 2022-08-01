import React from "react";

export const PATH = {
  PRE_JUNIOR: "/pre-junior",
};

function Routes() {
  return (
    <div>
      {/* <BrowserRouter>
        <RoutesP> */}
      {/* <Route path="new" element={<PreJunior />} /> */}
      {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
      {/* <Route path="*" element={<Navigate to={PATH.PRE_JUNIOR} replace />} /> */}

      {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
      {/* <Route element={<Error404 />} /> */}
      {/* </RoutesP> */}
      {/* </BrowserRouter> */}
    </div>
  );
}

export default Routes;
