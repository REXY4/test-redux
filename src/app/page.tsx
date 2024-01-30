'use client'
import { Col, Container, Row } from "react-bootstrap";
import styles from "./page.module.css";
import FormInputRegister from "./components/InputGroub";
import { useEffect } from "react";
import AuthUseCase from "@/use-case/auth.usecase";
import { useRouter } from "next/navigation";

export default function Home() {
  const {isLogin} = AuthUseCase()
  const router = useRouter();
  useEffect(()=>{
    if(isLogin){
        router.replace("/home");
    }
  },[])
  return (
    <main className={styles.main}>
      <Container>
        <Row>
          <Col>
            <FormInputRegister/>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
