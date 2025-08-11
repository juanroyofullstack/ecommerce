import React from "react";
import { AppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Header: React.FC = () => {
  return (
    <AppBar position="sticky" className="bg-white shadow-md top-0 z-50">
      <Toolbar className="flex justify-between items-center">
        <Typography variant="h6" className="text-gray-800 font-bold">
        Mi Ecommerce
        </Typography>
        <div>
          <Button color="inherit" className="text-gray-800 hover:text-blue-600">
        Inicio
          </Button>
          <Button color="inherit" className="text-gray-800 hover:text-blue-600">
        Productos
          </Button>
          <Button color="inherit" className="text-gray-800 hover:text-blue-600">
        Contacto
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
