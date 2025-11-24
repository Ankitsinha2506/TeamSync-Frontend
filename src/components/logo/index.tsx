import { AudioWaveform } from "lucide-react";
import { Link } from "react-router-dom";

interface LogoProps {
  url?: string; // optional
}

const Logo = ({ url = "/" }: LogoProps) => {
  return (
    <Link
      to={url}
      className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground"
    >
      <AudioWaveform className="size-4" />
    </Link>
  );
};

export default Logo;
