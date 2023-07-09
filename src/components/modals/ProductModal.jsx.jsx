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
      putStockData("firms", info);
    } else {
      postStockData("firms", info);
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
              label="Firm Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              required
              value={info?.name || ""}
              onChange={handleChange}
            />
            <TextField
              label="Phone"
              name="phone"
              id="phone"
              type="tel"
              variant="outlined"
              required
              value={info?.phone || ""}
              onChange={handleChange}
            />
            <TextField
              label="Address"
              name="address"
              id="address"
              type="text"
              variant="outlined"
              required
              value={info?.address || ""}
              onChange={handleChange}
            />
            <TextField
              label="Image"
              name="image"
              id="image"
              type="url"
              variant="outlined"
              required
              value={info?.image || ""}
              onChange={handleChange}
            />
            <Button type="submit" variant="contained">
              SUBMIT FIRM
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
