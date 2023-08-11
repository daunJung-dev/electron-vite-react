import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Section,
} from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";

export function Main() {
  const navigate = useNavigate();

  return (
    <Container>
      <Flex align={"center"} justify={"center"}>
        <Heading>VKiosk</Heading>
        <Section position={"absolute"} right="0" pr={"4"}>
          <Button onClick={() => console.log("한글")}>한글</Button>
          <Button onClick={() => console.log("English")}>English</Button>
          <Button onClick={() => console.log("中文")}>中文</Button>
          <Button onClick={() => console.log("日本語")}>日本語</Button>
        </Section>
      </Flex>
      <Grid columns="2" gap="3" mt="4">
        <Flex
          justify={"center"}
          className="text-white text-2xl bg-slate-800 rounded-xl h-[200px] text-center items-center justify-center"
          onClick={() => navigate("/checkIn")}
        >
          체크인
        </Flex>
        <Flex
          justify={"center"}
          className="text-white text-2xl bg-yellow-600 rounded-xl h-[200px] text-center items-center justify-center"
          onClick={() => navigate("/lodge")}
        >
          숙박
        </Flex>
      </Grid>
    </Container>
  );
}

export default Main;
