"use client";
import React, { useState } from "react";
import { TextField, Button, Box, MenuItem } from "@mui/material";
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import axiosInstance from "@/utils/utils";
import { userAdmin } from "@/zustand/state";

interface FormProps {
  onSubmit?: (formData: Record<string, string>) => void;
}

const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
  }
};

export function MyForm({ onSubmit }: FormProps): React.JSX.Element {
  const { updateUserAdmin } = userAdmin()
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
    updateUserAdmin("message", `Talent ${formData.first_name} ${formData.last_name} has been Added`)
    setFormVisible(false);
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
                required
              />
              <TextField
                name="last_name"
                label="Last Name"
                variant="outlined"
                value={formData.last_name}
                onChange={handleChange}
                type="text"
                fullWidth
                required
              />
              <TextField
                name="email"
                label="Email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
                type="email"
                fullWidth
                required
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
  const { updateUserAdmin } = userAdmin();
  const [formData, setFormData] = useState({ name: "" });
  const [formVisible, setFormVisible] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }

    // try {
      await axiosInstance.post("/skills", formData);
      updateUserAdmin("message", `Skill "${formData.name}" has been added`);
    // } catch (error) {
    //   updateUserAdmin("message", `Failed to add skill: ${error}`);
    // }
  };

  const handleBackgroundClick = () => { setFormVisible(false); };

  const handleFormClick = (event: React.MouseEvent<HTMLDivElement>) =>
    { event.stopPropagation(); };

  const openForm = () => { setFormVisible(true); };

  return (
    <>
      <Button
        onClick={openForm}
        startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />}
        variant="contained"
      >
        Add Skill
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
            component="div"
            onClick={handleFormClick}
            tabIndex={0}
            role="button"
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setFormVisible(false);
              }
            }}
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
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <TextField
                name="name"
                label="Skill"
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
              />
              <Button type="submit" variant="contained" fullWidth>
                Add Skill
              </Button>
            </Box>
          </Box>
        </Box> : null}
    </>
  );
}

interface FormData {
  title: string;
  company: string;
  description: string;
  location: string;
  salary: string;
  company_logo: string;
  link: string;
  user_id: string;
  job_type_id: string;
  active: boolean;
  min_salary: string;
  max_salary: string;
  status: string;
  job_style_id: string;
  currency_id: string;
  end_date: string;
  job_title_id: string;
  experience: string;
  total_talents: number;
}

type FormFieldName = keyof FormData;

export function AddJobs({ onSubmit }: FormProps): React.JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    company: "",
    description: "",
    location: "",
    salary: "",
    company_logo: "",
    link: "",
    user_id: "",
    job_type_id: "",
    active: true,
    min_salary: "",
    max_salary: "",
    status: "",
    job_style_id: "",
    currency_id: "",
    end_date: "",
    job_title_id: "",
    experience: "",
    total_talents: 0,
  });

  const [formVisible, setFormVisible] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const transformedData = {
      ...formData,
      active: formData.active.toString(),
      total_talents: formData.total_talents.toString(),
    };

    onSubmit?.(transformedData);
    void axiosInstance.post("/jobs", transformedData);
    setFormVisible(false);
  };

  const handleBackgroundClick = () => {
    setFormVisible(false);
  };

  const handleFormClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const formFields: { name: FormFieldName; label: string; multiline: boolean; rows?: number }[] = [
    { name: "title", label: "Job Title", multiline: false },
    { name: "company", label: "Company", multiline: false },
    { name: "description", label: "Description", multiline: true, rows: 4 },
    { name: "location", label: "Location", multiline: false },
    { name: "salary", label: "Salary", multiline: false },
    { name: "company_logo", label: "Company Logo URL", multiline: false },
    { name: "link", label: "Job Link", multiline: false },
  ];

  return (
    <>
      <Button onClick={() => { setFormVisible(true); }} startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">
        Add Job
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
                flexWrap: "wrap",
                gap: 2,
                maxWidth: 800,
                mx: "auto",
                p: 3,
                backgroundColor: "#fff",
                boxShadow: 3,
                borderRadius: 1,
              }}
            >
              {formFields.map((field) => (
                <Box
                  key={field.name}
                  sx={{ flexBasis: field.multiline ? '100%' : '48%', flexGrow: 1 }}
                >
                  <TextField
                    name={field.name}
                    label={field.label}
                    variant="outlined"
                    value={formData[field.name]} // No more TypeScript error
                    onChange={handleChange}
                    fullWidth
                    multiline={field.multiline}
                    rows={field.rows || 1}
                    required
                  />
                </Box>
              ))}
              <Box sx={{ flexBasis: '100%' }}>
                <Button type="submit" variant="contained" fullWidth>
                  Add Job
                </Button>
              </Box>
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
                required
                type="email"
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




