import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { modalStyle } from "../../styles/GlobalStyle";
import { Button, TextField } from "@mui/material";
import useStockCall from "../../hooks/useStockCall";

export default function FirmModal({ open, handleClose, info, setInfo }) {
  const { postStockData, putStockData } = useStockCall();
  // const [info, setInfo] = useState({
  //   name: "",
  //   phone: "",
  //   address: "",
  //   image: "",
  // });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info);
    if (info.id) {
      putStockData("products", info);
    } else {
      postStockData("products", info);
    }
    handleClose();
    setInfo({ name: "", phone: "", address: "", image: "" });
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          handleClose();
          setInfo({ name: "", phone: "", address: "", image: "" });
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle} onSubmit={handleSubmit}>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            component="form"
          >
            <TextField
              label="Brand"
              name="brand"
              id="brand"
              type="text"
              variant="outlined"
              required
              value={info?.brand || ""}
              onChange={handleChange}
            />
            <TextField
              label="Category"
              name="category"
              id="category"
              type="text"
              variant="outlined"
              required
              value={info?.category || ""}
              onChange={handleChange}
            />
            <TextField
              label="Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              required
              value={info?.address || ""}
              onChange={handleChange}
            />
            {/* <TextField
              label="Stock"
              name="stock"
              id="stock"
              type="number"
              variant="outlined"
              required
              value={info?.image || ""}
              onChange={handleChange}
            /> */}
            <Button type="submit" variant="contained">
              SUBMIT FIRM
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
