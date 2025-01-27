import { useFormContext } from "react-hook-form"
import { Button } from "~/components/ui/button"
import { Checkbox } from "~/components/ui/checkbox"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { type RegisterFormSchema } from "../form/register"
import { useState } from "react"

type  RegisterFormInnerProps = {
    onRegisterSubmit: (values: RegisterFormSchema) => void;
}

export const RegisterFormInner = (props: RegisterFormInnerProps) => {

    const form = useFormContext<RegisterFormSchema>();

    const [ showPassword , SetShowPassword] = useState<boolean>(false)

    return(
        <form onSubmit={form.handleSubmit(props.onRegisterSubmit)} className="flex flex-col gap-y-1">
        <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
        <FormItem>
           <FormLabel>Email</FormLabel>
           <FormControl>
               <Input {...field} />
           </FormControl>
       <FormDescription />
       <FormMessage />
       </FormItem>
       )}
       />
       
       <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
        <FormItem>
           <FormLabel>Password</FormLabel>
           <FormControl>
               <Input type={showPassword ? "text" : "password"} {...field} />
           </FormControl>
       <FormDescription />
       <FormMessage />
       </FormItem>
       )}
       />

       <Label className="flex items-center gap-4">
           <Checkbox checked={showPassword} onCheckedChange={(checked) => SetShowPassword(!!checked)}/>
           Show Password
       </Label>

       <Button className="w-full mt-4">Buat Akun</Button>
       </form>
    )
}

