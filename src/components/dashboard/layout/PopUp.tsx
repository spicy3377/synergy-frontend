"use client";
import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';

interface FormProps {
  onSubmit: (formData: Record<string, string>) => void;
}

export function MyForm({ onSubmit }: FormProps): React.JSX.Element {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
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
    onSubmit(formData);
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
            onClick={handleFormClick}
          >
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
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
            <TextField
              name="password"
              label="Password"
              variant="outlined"
              value={formData.password}
              onChange={handleChange}
              type="password"
              fullWidth
            />
            <Button type="submit" variant="contained" fullWidth>
              Add Talent
            </Button>
          </Box>
        </Box> : null}
    </>
  );
}

export function AddSkills({ onSubmit }: FormProps): React.JSX.Element {
  const [formData, setFormData] = useState({
    skill: "",
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
    onSubmit(formData);
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
            onClick={handleFormClick}
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
    onSubmit(formData);
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
            onClick={handleFormClick}
          >
            <TextField
              name="title"
              label="job title"
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
              Add Job Title
            </Button>
          </Box>
        </Box> : null}
    </>
  );
}




