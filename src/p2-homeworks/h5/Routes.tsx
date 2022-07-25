import React from "react";
import {
  BrowserRouter,
  Routes as RoutesP,
  Route,
  Navigate,
} from "react-router-dom";
import Error404 from "../h5-rrd-v6/pages/Error404";
import PreJunior from "../h5-rrd-v6/pages/PreJunior";
import { Junior } from "../h5-rrd-v6/pages/Junior";
import { JuniorPlus } from "../h5-rrd-v6/pages/JuniorPlus";

export const PATH = {
  PRE_JUNIOR: "/pre-junior",
  JUNIOR: "/junior",
  JUNIOR_PLUS: "/junior-plus",
};

function Routes() {
  return (
    <div>
      <BrowserRouter>
        <RoutesP>
          {/* <Route path="new" element={<PreJunior />} /> */}
          {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
          {/* <Route path="*" element={<Navigate to={PATH.PRE_JUNIOR} replace />} /> */}
          {/* <Route path={PATH.PRE_JUNIOR} element={<PreJunior />} /> */}
          {/* <Route path={PATH.JUNIOR} element={<Junior />} /> */}
          {/* <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus />} /> */}

          {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
          {/* <Route element={<Error404 />} /> */}
        </RoutesP>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
