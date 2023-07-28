import { useTheme } from "@mui/material";
import {
  FacebookLogo,
  InstagramLogo,
  SocialList,
  TwitterLogo,
  YoutubeLogo,
} from "./FollowUs.styled";

export function FollowUs({ hoverColor }) {
  const theme = useTheme();
  return (
    <SocialList $hovercolor={hoverColor}>
      <li>
        <a
          style={{ color: theme.palette.iconHeader }}
          href="https://www.facebook.com/"
          rel="noreferrer"
        >
          <FacebookLogo />
        </a>
      </li>
      <li>
        <a
          style={{ color: theme.palette.iconHeader }}
          href="https://www.youtube.com/"
          rel="noreferrer"
        >
          <YoutubeLogo />
        </a>
      </li>
      <li>
        <a
          style={{ color: theme.palette.iconHeader }}
          href="https://twitter.com/"
          rel="noreferrer"
        >
          <TwitterLogo />
        </a>
      </li>
      <li>
        <a
          style={{ color: theme.palette.iconHeader }}
          href="https://www.instagram.com/"
          rel="noreferrer"
        >
          <InstagramLogo />
        </a>
      </li>
    </SocialList>
  );
}
