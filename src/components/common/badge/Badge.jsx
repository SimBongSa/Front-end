import { StBadge } from "./Badge.styled";

const Badge = ({ count }) => {
  if (0 <= count && count < 5) {
    return <StBadge src={process.env.PUBLIC_URL + '/image/32badge1.png'} alt="badge1"/>
  } else if (5 <= count && count < 10) {
    return <StBadge src={process.env.PUBLIC_URL + '/image/32badge2.png'} alt="badge2" />
  } else if (10 <= count && count < 20) {
    return <StBadge src={process.env.PUBLIC_URL + '/image/32badge3.png'} alt="badge3" />
  } else {
    return <StBadge src={process.env.PUBLIC_URL + '/image/32badge4.png'} alt="badge4" />
  }
}

export default Badge;