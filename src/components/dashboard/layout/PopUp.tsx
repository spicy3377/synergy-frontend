"use client";
import React, { useState } from "react";
import { TextField, Button, Box, MenuItem } from "@mui/material";
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import axiosInstance from "@/utils/utils";

interface FormProps {
  onSubmit?: (formData: Record<string, string>) => void;
}

const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
  }
};

export function MyForm({ onSubmit }: FormProps): React.JSX.Element {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  const [formVisible, setFormVisible] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.(formData);
    void axiosInstance.post("/dashboard", formData)
  };


  const handleBackgroundClick = () => {
    setFormVisible(false); // Close the form when clicking outside
  };


  const handleFormClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation(); // Prevent closing the form when clicking inside it
  };

  return (
    <>
      <Button onClick={() => { setFormVisible(true); }} startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">
        Add
      </Button>

      {formVisible ? <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={handleBackgroundClick}
        >
          <div
            onClick={handleFormClick}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="button"
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                maxWidth: 400,
                width: "100%",
                mx: "auto",
                p: 3,
                backgroundColor: "#fff",
                boxShadow: 3,
                borderRadius: 1,
              }}
            >
              <TextField
                name="first_name"
                label="First Name"
                variant="outlined"
                value={formData.first_name}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                name="last_name"
                label="Last Name"
                variant="outlined"
                value={formData.last_name}
                onChange={handleChange}
                type="password"
                fullWidth
              />
              <TextField
                name="email"
                label="Email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
                fullWidth
              />
              <Button type="submit" variant="contained" fullWidth>
                Add Talent
              </Button>
            </Box>
          </div>
        </Box> : null}
    </>
  );
}

export function AddSkills({ onSubmit }: FormProps): React.JSX.Element {
  const [formData, setFormData] = useState({
    name: "",
    // email: "",
    // password: "",
  });

  const [formVisible, setFormVisible] = useState(false);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.(formData);
    void axiosInstance.post("/skills", formData)
  };


  const handleBackgroundClick = () => {
    setFormVisible(false); // Close the form when clicking outside
  };


  const handleFormClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation(); // Prevent closing the form when clicking inside it
  };

  return (
    <>
      <Button onClick={() => { setFormVisible(true); }} startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">
        Add
      </Button>

      {formVisible ? <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={handleBackgroundClick}
        >
          <div
            onClick={handleFormClick}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="button"
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                maxWidth: 400,
                width: "100%",
                mx: "auto",
                p: 3,
                backgroundColor: "#fff",
                boxShadow: 3,
                borderRadius: 1,
              }}
            >
              <TextField
                name="skill"
                label="Skill"
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
                fullWidth
              />
              {/* <TextField
                name="email"
                label="Email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                name="password"
                label="Password"
                variant="outlined"
                value={formData.password}
                onChange={handleChange}
                type="password"
                fullWidth
              /> */}
              <Button type="submit" variant="contained" fullWidth>
                Add Skill
              </Button>
            </Box>
          </div>
        </Box> : null}
    </>
  );
}


export function AddJobs({ onSubmit }: FormProps): React.JSX.Element {
  const [formData, setFormData] = useState({
    title: "",
  });

  const [formVisible, setFormVisible] = useState(false);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.(formData);
  };


  const handleBackgroundClick = () => {
    setFormVisible(false); // Close the form when clicking outside
  };

  const handleFormClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation(); // Prevent closing the form when clicking inside it
  };

  return (
    <>
      <Button onClick={() => { setFormVisible(true); }} startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">
        Add
      </Button>

      {formVisible ? <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={handleBackgroundClick}
        >
          <div
            onClick={handleFormClick}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="button"
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                maxWidth: 400,
                width: "100%",
                mx: "auto",
                p: 3,
                backgroundColor: "#fff",
                boxShadow: 3,
                borderRadius: 1,
              }}
            >
              <TextField
                name="title"
                label="job title"
                variant="outlined"
                value={formData.title}
                onChange={handleChange}
                fullWidth
              />
              <Button type="submit" variant="contained" fullWidth>
                Add Job Title
              </Button>
            </Box>
          </div>
        </Box> : null}
    </>
  );
}

export function SendTalentInfo({ onSubmit }: FormProps): React.JSX.Element {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [formVisible, setFormVisible] = useState(false);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.(formData);
  };


  const handleBackgroundClick = () => {
    setFormVisible(false); // Close the form when clicking outside
  };

  const handleFormClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation(); // Prevent closing the form when clicking inside it
  };

  return (
    <>
      {/* <Button onClick={() => { setFormVisible(true); }} startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">
        Add
      </Button> */}
      <MenuItem onClick={() => { setFormVisible(true); }}>Send Info</MenuItem>

      {formVisible ? <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={handleBackgroundClick}
        >
          <div
            onClick={handleFormClick}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="button"
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                maxWidth: 400,
                width: "100%",
                mx: "auto",
                p: 3,
                backgroundColor: "#fff",
                boxShadow: 3,
                borderRadius: 1,
              }}
            >
              <TextField
                name="email"
                label="Employer email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
                fullWidth
              />
              <Button type="submit" variant="contained" fullWidth>
                Send Info
              </Button>
            </Box>
          </div>
        </Box> : null}
    </>
  );
}




