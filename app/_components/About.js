import { Box, Typography } from "@mui/material";
import Image from "next/image";
import EducationCard from "./EducationCard";

export default function About() {
  return (
    <Box sx={{ minHeight: 500, py: 3 }}>
      <Typography variant="h1" textAlign={"center"} sx={{ mb: 3 }}>
        About Me
      </Typography>
      <Box
        sx={{
          position: "relative",
          height: "300px", // ✅ Ganti dari maxHeight, tambah unit
          width: "300px", // ✅ Ganti dari minWidth, tambah unit
          margin: "0 auto", // Optional: center gambar
        }}
      >
        <Image
          fill
          alt="profile2"
          src={"/profile2.jpeg"}
          style={{ objectFit: "cover" }} // ✅ Tambah objectFit
        />
      </Box>
      <Box sx={{ px: 1, py: 3 }}>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Halo! Saya William, seorang web developer yang suka bikin hal-hal
          digital jadi lebih simple, cepat, dan enak dipakai. Saya biasa bekerja
          dengan React, Next.js, dan TypeScript. Saya orangnya suka belajar hal
          baru, suka nge-explore teknologi, dan selalu pengen bikin sesuatu yang
          lebih baik tiap hari. Di luar coding, saya suka ngulik, baca, dan
          improve skill pelan-pelan.
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, px: 2 }}>
          <Typography variant="h2">Education</Typography>
          <EducationCard />
        </Box>
      </Box>
    </Box>
  );
}
