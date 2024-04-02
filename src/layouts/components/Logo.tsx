import config from "@/config/config.json";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Logo = ({ src }: { src?: string }) => {
  // Destructuring items from config object
  const {
    logo,
    logo_darkmode,
    logo_width,
    logo_height,
    logo_text,
    title,
  }: {
    logo: string;
    logo_darkmode: string;
    logo_width: any;
    logo_height: any;
    logo_text: string;
    title: string;
  } = config.site;

  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const resolvedLogo =
    mounted && (theme === "dark" || resolvedTheme === "dark")
      ? logo_darkmode
      : logo;
  const logoPath = src ? src : resolvedLogo;

  return (
    <Link href="/" passHref>
      <div
        className="logo-container"
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          width: "80px", // Adjust the width value as desired
          height: "auto", // Adjust the height value as desired
        }}
      >
        {logoPath ? (
          <Image
            src={logoPath}
            alt={title}
            priority
            layout="responsive"
            width={80} // Adjust the width value as desired
            height={80} // Adjust the height value as desired
          />
        ) : logo_text ? (
          logo_text
        ) : (
          title
        )}
      </div>
    </Link>
  );
};

export default Logo;