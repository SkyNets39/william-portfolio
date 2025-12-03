import { Box, Chip, Typography } from "@mui/material";
import {
  coding_languages,
  frameworks,
  libraries,
  databases,
  tools,
} from "../../_data/tech_stacks";

export default function TechStacks() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Tech Stacks and Tools
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <TechItems label="Coding Languages" stacks={coding_languages} />
        <TechItems label="Frameworks" stacks={frameworks} />
        <TechItems label="Libraries" stacks={libraries} />
        <TechItems label="Databases" stacks={databases} />
        <TechItems label="Tools" stacks={tools} />
      </Box>
    </Box>
  );
}

function TechItems({ label, stacks }) {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 1 }}>
        {label}
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {stacks.map((stack) => {
          const { id, name } = stack;
          return (
            <Chip
              key={id}
              label={name}
              size="small"
              sx={{
                bgcolor: "primary.main",
                color: "background.default",
                fontWeight: 600,
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
}
