import { Box, Typography } from "@mui/material";
import Banner from "./_components/Banner";
import ProjectContainer from "./_components/ProjectContainer";
import Expertise from "./_components/Expertise";
import EducationCard from "./_components/EducationCard";
import ExperienceContainer from "./_components/ExperienceContainer";

export default function Page() {
  return (
    <>
      <Banner />
      <Box p={2}>
        <Expertise />
        <ProjectContainer />
        <EducationCard />
        <ExperienceContainer />
      </Box>
    </>
  );
}
