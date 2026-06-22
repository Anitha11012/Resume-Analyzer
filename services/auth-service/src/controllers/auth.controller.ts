import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User";


export const register = async (req: any, res: any) => {
  const { name, email, password } = req.body;

  const hashedPassword =
    await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET
  );

  res.json({ token });
};

const login = async (req: any, res: any) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user)
    return res.status(401).json({
      message: "Invalid Credentials",
    });

  const match = await bcrypt.compare(
      password,
      user.password
    );

  if (!match)
    return res.status(401).json({
      message: "Invalid Credentials",
    });

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET
  );

  res.json({ token });
};