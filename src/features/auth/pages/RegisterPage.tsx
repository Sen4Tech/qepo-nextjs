import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { PageContainer } from "~/components/layout/PageContainer";
import { SectionContainer } from "~/components/layout/SectionContainer";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "~/components/ui/card";
import { Form } from "~/components/ui/form";
import { RegisterFormInner } from "../components/RegisterFormInner";
import { type RegisterFormSchema, registerFormSchema } from "../form/register";

const RegisterPage = () => {

    const [ showPassword, SetShowPassword] = useState<boolean>(false)

    const form = useForm<RegisterFormSchema>({
       resolver: zodResolver(registerFormSchema),
    });

    const handleRegisterSubmit = (values: RegisterFormSchema) => {
        alert('Register submit');
    }

    return (
        <PageContainer>
            <SectionContainer padded className="min-h-[calc(100vh-144px)] w-full flex-col justify-center">
                <Card className="max-w-[480px] self-center w-full">
                    {/* Header */}
                    <CardHeader className="flex flex-col items-center jufity-center">
                        <h1 className="text-primary text-3xl font-bold">Create an account</h1>
                        <p className="text-muted-foreground">Qepoin Creator Favorite Kamu!</p>
                    </CardHeader>

                    {/* Content / Isi */}
                    <CardContent>
                     <Form {...form}>
                       <RegisterFormInner onRegisterSubmit={handleRegisterSubmit}/>
                     </Form>

                     {/* Continue with google */}
                    </CardContent>

                    <CardFooter className="flex flex-col gap-y-4">
                        <div className="flex items-center justify-between w-full gap-x-4">
                            <div className="w-full h-[2px] border-t-2" />
                                <p className="flex-1 text-muted-foreground text-nowrap">Atau lanjut dengan</p>
                            <div className="w-full h-[2px] border-t-2" />
                        </div>

                    
                    <Button variant="secondary" className="w-full" size="lg"> <FcGoogle /> Buat AKun Dengan Google</Button>

                    
                    <p>Sudah Punya Akun? <Link href="/login" className="text-purple-500 font-bold">P, Login</Link></p>
                    </CardFooter>

                </Card>
            </SectionContainer>
        </PageContainer>
    );
}

export default RegisterPage;