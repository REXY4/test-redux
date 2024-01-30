'use client'
import { AuthStoreType } from "@/types/AuthStoreType";
import AuthUseCase from "@/use-case/auth.usecase";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap"
import { useDispatch } from "react-redux";

const HomePage = () =>{
    const {isLogin, logout} = AuthUseCase();
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(()=>{
        if(!isLogin){
            router.replace("/");
        }
    },[])

    return (
        <Container>
            <Row className="mt-5">
                <Col>
                    <h1>Hallo HOME PAGE</h1>
                </Col>
                <Col>
                    <Button 
                    onClick={()=>{
                        dispatch({
                            type :  AuthStoreType.LOGOUT,
                        });
                        router.replace("/")
                    }}
                    variant="danger">Logout</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage;