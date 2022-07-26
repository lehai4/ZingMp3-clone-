import { Route, Routes } from "react-router-dom";
import { MySelf, ZingChart } from "../common";
const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<MySelf />} />
      <Route path="/zingchart" element={<ZingChart />} />
    </Routes>
  );
};

export default Router;
