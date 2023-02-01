import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import  logo  from "./Logo.png";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={1} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={100}  />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
