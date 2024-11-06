import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import { PostEngagementPageContainer } from "../pages/post-engagement";
import EditPage from "../pages/edit-page";

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/*">
            <Route index element={<PostEngagementPageContainer />} />
          </Route>
          <Route path="/edit/:id" element={<EditPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
