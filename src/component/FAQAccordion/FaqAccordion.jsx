import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import AddIcon from "@mui/icons-material/Add";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion elevation={0} square {...props} />
))(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
 
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <AddIcon
        sx={{
          fontSize: "0.9rem",
          backgroundColor: "#E3B748",
          borderRadius: "50%",
        }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#1D1D1D",
  color: "white",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    display: "none",
  },
  "& .MuiAccordionSummary-content": {
    margin: "20px 0px 20px 0px",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  color: "gray",
  border: "0px",
  backgroundColor: "#1D1D1D",
}));

export default function FaqAccordion({data}) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
      <Accordion
        expanded={expanded === `${data.id}`}
        onChange={handleChange(`${data.id}`)}
      >
        <AccordionSummary aria-controls={`${data.id}d-content`} id={`${data.id}d-header`}>
          <Typography>{data.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {data.ans}
          </Typography>
        </AccordionDetails>
      </Accordion>

  );
}
