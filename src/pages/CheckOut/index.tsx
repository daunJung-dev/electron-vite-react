import { Button } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";

export default function CheckOut() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>CheckOut Page</h1>
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
