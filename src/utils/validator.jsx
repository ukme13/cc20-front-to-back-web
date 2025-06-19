//Validate with Yup
import { object, ref, string } from "yup";

export const registerSchema = object({
  email: string().email("อีเมลไม่ถูกต้อง").required("กรุณากรอกอีเมล"),
  name: string().min(2, "ชื่อต้องมีมากกว่า 2 ตัว"),
  password: string().min(6, "รหัสผ่านต้องมากกว่า 6 ตัว"),
  confirmPassword: string().oneOf(
    [ref("password"), null],
    "รหัสผ่านยืนยันไม่ตรงกัน"
  ),
});

export const loginSchema = object({
  email: string().email("อีเมลไม่ถูกต้อง").required("กรุณากรอกอีเมล"),
  password: string().min(6, "รหัสผ่านต้องมากกว่า 6 ตัว"),
});
