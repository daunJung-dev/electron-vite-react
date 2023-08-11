import { Button } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";

export default function CheckIn() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>CheckIn Page</h1>
      <Button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </Button>
    </div>
  );
}
